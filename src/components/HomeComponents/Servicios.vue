<template>
  <section
    id="servicios"
    aria-labelledby="servicios-title"
    itemscope
    itemtype="https://schema.org/ItemList"
  >
    <div class="content d-flex flex-column">
      <header class="titulo-seccion">
        <span>Habilidades</span>
        <h2 id="servicios-title" itemprop="name">Conocimientos técnicos</h2>
      </header>

      <ul class="tarjetas_servicios d-flex justify-content-around" role="list">
        <ServicioCard
          v-for="(servicio, idx) in servicios"
          :key="servicio.title"
          :icon="servicio.icon"
          :title="servicio.title"
          :desc="servicio.desc"
          :position="idx + 1"
        />
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ServicioCard from '@/components/HomeComponents/ServicioCard.vue';

type Servicio = {
  icon: string;
  title: string;
  desc: string;
};

const servicios = ref<Servicio[]>([
  { icon: "fa-brands fa-laravel", title: "Laravel", desc: "Framework de PHP muy usado actualmente." },
  { icon: "fa-brands fa-php", title: "PHP", desc: "Lenguaje ampliamente usado en desarrollo back-end." },
  { icon: "fa-solid fa-database", title: "MySQL", desc: "Gestión de bases de datos relacionales." },
  { icon: "fa-brands fa-css3-alt", title: "CSS", desc: "Estilos para ajustar la presentación de la aplicación." },
  { icon: "fa-brands fa-vuejs", title: "Vue.js", desc: "Framework de JavaScript para interfaces web." },
  { icon: "fa-brands fa-git-alt", title: "Git", desc: "Herramienta para control de versiones." },
]);
</script>

<style>
#servicios {
  background-color: #24273D !important;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
}

.servicio {
  border: solid 1px var(--primary-color);
  border-radius: 10px;
  padding: 1em;
  width: 100%;
}

.tarjetas_servicios {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.tarjetas_servicios__item {
  list-style: none;
  margin: 1rem;
  width: 30%;
  display: flex;
}

@media only screen and (max-width: 900px) {
  .tarjetas_servicios__item {
    width: 40%;
  }
}

@media only screen and (max-width: 570px) {
  #servicios {
    min-height: fit-content;
  }

  .tarjetas_servicios__item {
    margin: 0.5em;
    width: 45%;
  }
}
</style>