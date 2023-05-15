<script setup lang="ts">
    const props = defineProps({
        icon: String,
        title: String,
        desc: String,
    });
</script>

<script lang="ts">
    export default {
        properties: ['icon','text','desc'],
    }
</script>

<template>
    <div class="servicio">
        <i :class="icon"></i>
        <h3>{{title}}</h3>
        <p>{{desc}}</p>
    </div>
</template>

<style scoped>
    .servicio i{
        display: flex !important;
        justify-content: center;
        color: var(--primary-color);
        text-shadow: 1px 1px 1px #FD5C55;
        font-size: 4em;
    }
    .servicio h3{
        text-align: center;
        text-transform: uppercase;
    }

    .servicio p{
        margin-bottom: 0 !important;
        font-size: larger;
        text-align: center;
    }

    @media only screen and (max-width: 900px){
        .servicio{
            padding: 0.5em;
            width: 40%;
        }

        .servicio i{
            font-size: 2em;
        }
    }

    @media only screen and (max-width: 570px){
        .servicio{
            padding: 0.5em;
            margin: 0.5em;
            width: 45%;
        }

        .servicio h3{
            text-align: center;
        }

        .servicio p{
            display: none;
        }
    }
</style>