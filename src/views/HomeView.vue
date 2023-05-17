<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import ImgPortada from "../components/ImgPortada.vue"
import Header from '../components/Header.vue'
import Portada from '../components/HomeComponents/Portada.vue'
import Presentacion from '../components/HomeComponents/Presentacion.vue'
import Servicios from '../components/HomeComponents/Servicios.vue'
</script>

<template>
    <ImgPortada></ImgPortada>
    <Header></Header>
    <Portada></Portada>
    <Presentacion></Presentacion>
    <Servicios></Servicios>
</template>