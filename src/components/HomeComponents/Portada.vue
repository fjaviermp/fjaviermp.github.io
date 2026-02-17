<template>
  <section
    id="portada"
    aria-labelledby="hero-title"
    itemscope
    itemtype="https://schema.org/Person"
  >
    <header class="perfil">
      <figure class="perfil__foto">
        <img
          class="img-fluid"
          src="/img/foto_perfil.jpg"
          alt="Foto de perfil de Javier (FJavierMP), desarrollador web en Almería"
          title="Javier (FJavierMP) — Desarrollador web"
          loading="eager"
          decoding="async"
          fetchpriority="high"
          itemprop="image"
        >
      </figure>

      <h1 id="hero-title" itemprop="name">FJavierMP</h1>
      <p class="perfil__rol" itemprop="jobTitle">Desarrollador Web</p>
      <address class="perfil__ubicacion" itemprop="homeLocation">Almería</address>
    </header>
  </section>
</template>

<style scoped>
.perfil {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.perfil__foto {
  margin: 0;
}

.perfil__foto > img {
  border-radius: 150px;
  padding: 0.25rem;
}

.perfil h1 {
  font-size: 4rem;
  font-weight: bolder;
  color: var(--primary-color);
  padding: 0.25rem;
}

.perfil__rol,
.perfil__ubicacion {
  font-weight: bold;
  color: white;
  padding: 0.25rem;
}

.perfil__ubicacion {
  font-style: normal;
}
</style>