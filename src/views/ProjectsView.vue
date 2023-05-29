<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '../components/Header.vue'
import ImgPortada from '../components/ImgPortada.vue'
import ProjectCard from '../components/ProjectsComponents/ProjectCard.vue'
</script>

<script lang="ts">
    export default {
        name: 'App',
        data() {
            const jobs = [
                {
                    id: 0,
                    portrait: "/src/assets/projects/hefadi.jpg",
                    title: "Hefadi.es",
                    desc: "Página web de la Hermandad Farmacéutica Digital. Cabe destacar que la gran mayoría de información se obtiene de una API externa al sitio web. Además, cuenta con un sencillo panel de administración desarrollado en PHP para añadir, editar o eliminar eventos y podcast.",
                    tech: "PHP, JavaScript, CSS, MySQL",
                    website: "https://www.hefadi.es",
                    github: "",
                },
                {
                    id: 1,
                    portrait: "/src/assets/projects/qrcelia.jpg",
                    title: "QrCelia",
                    desc: "Gestor de contenidos desarrollado para fácilmente crear un sitio web con todo lo que ello conlleva: roles, panel de administración, categorías, entradas, personalización...todo ello con el añadido de crear automáticamente un código QR para cada entrada del sitio web.",
                    tech: "Laravel 7, JavaScript, Vue 2, MySQL, AJAX",
                    website: "https://qrcelia.iescelia.org",
                    github: "https://github.com/FMRedondo/QRCelia",
                },
                {
                    id: 2,
                    portrait: "/src/assets/projects/linku.jpg",
                    title: "Linku.es",
                    desc: "Web de empresa mayorista en telefonía móvil, por lo que los precios sólo son visibles para usuarios registrados. Además de la web y su panel de administración, existen diversos conectores para enviar pedidos, cambios de stock o información de clientes al Sistema de Contabilidad",
                    tech: "Laravel 5, JavaScript, SQL Server, MySQL, Python, Java, Bootstrap",
                    website: "https://linku.es",
                    github: "https://github.com/manulinku/linku_shop",
                },
            ];
            return {
                jobs
            };
        },
    }
</script>

<template>
    <Header></Header>
    <ImgPortada></ImgPortada>
    <div id="projectsGrid">
        <template v-for="(job, index) in jobs" :key="jobs.id">
            <ProjectCard 
                :portrait="job.portrait"
                :title="job.title"
                :desc="job.desc"
                :tech="job.tech"
                :website="job.website"
                :github="job.github">
            </ProjectCard>
        </template>
    </div>

</template>

<style>
    #projectsGrid{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    @media (max-width: 1158px) {
        #projectsGrid{
            flex-wrap: wrap;
            padding-top: 5em;
        }
    }
</style>
