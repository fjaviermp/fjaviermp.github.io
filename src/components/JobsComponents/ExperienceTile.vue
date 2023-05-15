<script setup lang="ts">
    const props = defineProps({
        year: Number,
        name: String,
        desc: String,
    });
</script>

<template>
    <div class="experienceTile">
        <div class="experiencePoint">
            <p>{{ year }}</p>
        </div>
        <div class="experienceDesc d-flex justify-content-center w-100 mt-2">
            <h4> {{ name }}</h4>            
        </div>
    </div>
</template>

<style>
    .experienceTile{
        width: 10%;
    }

    .experienceTile:hover{
        cursor: pointer;
    }

    .experienceTile, .experienceDesc .info{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .experiencePoint{
        background-color: white;
        border: 4px solid var(--primary-color);
        margin: 1em 1em 0 1em;
        width: 4em;
        height: 4em;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .experienceDesc{
        position: relative;
    }

    .experienceDesc h4{
        position: absolute;
        width: auto;
        height: auto;
    }

    .experienceDesc .info{
        max-width: 20em;
    }

    .experiencePoint p{
        color: rgba(30, 34, 51, 1);
        font-weight: bolder;
        font-size: larger;
    }

    @media only screen and (max-width: 768px){
        .experienceTile{
            flex-direction: row;
            width: 80%;
            margin: 1em;
        }

        .experienceTile .experienceDesc, .experienceTile .experienceDesc h4{
            position: static;
            display: none !important;
        }
    }
</style>