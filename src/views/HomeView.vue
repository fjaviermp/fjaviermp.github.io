<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import Preloader from '../components/Preloader.vue'
import ImgPortada from "../components/ImgPortada.vue"
import Header from '../components/Header.vue'
import Portada from '../components/HomeComponents/Portada.vue'
import Presentacion from '../components/HomeComponents/Presentacion.vue'
import Servicios from '../components/HomeComponents/Servicios.vue'
</script>

<template>
    <Preloader v-if="loading"></Preloader>
    <ImgPortada></ImgPortada>
    <Header></Header>
    <Portada></Portada>
    <Presentacion></Presentacion>
    <Servicios></Servicios>
</template>

<script lang="ts">
    export default {
    name: "App",
        data() {
            return {
                loading: true
            }
        },
        created() {
            setTimeout(() => this.loading = false, 500);
        }
    }
</script>