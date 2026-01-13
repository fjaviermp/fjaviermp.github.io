import fs from "node:fs";
import path from "node:path";

function parseDotEnv(content) {
  const out = {};
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if (!key) continue;
    // Quitar comillas simples/dobles si envuelven todo el valor
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    out[key] = val;
  }
  return out;
}

function loadDotEnvFiles(fileNames) {
  const envFromFiles = {};
  for (const fileName of fileNames) {
    const fullPath = path.resolve(process.cwd(), fileName);
    if (!fs.existsSync(fullPath)) continue;
    try {
      const parsed = parseDotEnv(fs.readFileSync(fullPath, "utf8"));
      Object.assign(envFromFiles, parsed);
    } catch {
      // Si el archivo no se puede leer, lo ignoramos para evitar romper el build
    }
  }
  return envFromFiles;
}

const envFiles = [
  ".env.production.local",
  ".env.production",
  ".env.local",
  ".env",
];
const fileEnv = loadDotEnvFiles(envFiles);

// process.env manda sobre fileEnv
const env = { ...fileEnv, ...process.env };

const SITE_URL = (env.SITE_URL || "https://fjaviermp.com").replace(/\/+$/, "");
const DIST_DIR = env.DIST_DIR || "dist";
const ROUTER_FILE = env.ROUTER_FILE || path.join("src", "router", "index.ts");

function ensureDistExists() {
  if (!fs.existsSync(DIST_DIR)) {
    throw new Error(
      `No existe "${DIST_DIR}/". Ejecuta primero "vite build" (o "npm run build").`
    );
  }
}

function readRouterRoutes() {
  const routerSrc = fs.readFileSync(ROUTER_FILE, "utf8");
  const routePaths = [];

  // Captura urls '/loquesenospide'
  const re = /path\s*:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = re.exec(routerSrc)) !== null) {
    const p = m[1];
    if (!p || typeof p !== "string") continue;
    if (!p.startsWith("/")) continue;
    if (p.includes(":")) continue; // evita rutas dinámicas tipo /post/:id
    if (p.includes("*")) continue; // evita catch-all
    routePaths.push(p);
  }

  // Evitar duplicados y ordenar, manteniendo '/' primero
  const unique = Array.from(new Set(routePaths));
  unique.sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));
  return unique;
}

function toAbsUrl(p) {
  if (p === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${p}`;
}

function formatDateYYYYMMDD(d = new Date()) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function escapeXml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function buildSitemapXml(urls) {
  const lastmod = formatDateYYYYMMDD();
  const entries = urls
    .map((u) => {
      const loc = escapeXml(u);
      const priority = u.endsWith("/") ? "1.0" : "0.7";
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

function writeFileInDist(fileName, content) {
  const outPath = path.join(DIST_DIR, fileName);
  fs.writeFileSync(outPath, content, "utf8");
  return outPath;
}

function main() {
  ensureDistExists();
  const routes = readRouterRoutes();
  const urls = routes.map(toAbsUrl);

  const sitemapXml = buildSitemapXml(urls);
  writeFileInDist("sitemap.xml", sitemapXml);

  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
  writeFileInDist("robots.txt", robotsTxt);

  console.log(`[sitemap] Generado: ${urls.length} URLs -> ${DIST_DIR}/sitemap.xml (+ robots.txt)`);
  console.log(`[sitemap] Destino del sitemap: ${SITE_URL}`)
}

main();

