<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Portada from './components/Portada.vue'
import Presentacion from './components/Presentacion.vue'
import Servicios from './components/Servicios.vue'
</script>

<template>
    <Header></Header>
    <Portada></Portada>
    <Presentacion></Presentacion>
    <Servicios></Servicios>
</template>