<template>
  <header role="banner">
    <ImgPortada />
    <Header />
  </header>

  <main id="contenido" role="main">
    <Portada />
    <Presentacion />
    <Servicios />
  </main>
</template>

<script setup lang="ts">
import ImgPortada from "@/components/ImgPortada.vue";
import Header from '@/components/Header.vue';
import Portada from '@/components/HomeComponents/Portada.vue';
import Presentacion from '@/components/HomeComponents/Presentacion.vue';
import Servicios from '@/components/HomeComponents/Servicios.vue';
</script>
