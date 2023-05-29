<script setup lang="ts">
    const props = defineProps({
        id: Number,
        portrait: String,
        title: String,
        desc: String,
        tech: String,
        website: String,
        github: String
    });
</script>

<template>
    <div class="projectCard">
        <a href="https://qrcelia.iescelia.org/" >
            <img class="img-fluid" :src="portrait" alt="">
        </a>
        <div class="projectDesc px-4">
            <div class="projectHeader">
                <h1>{{ title }}</h1>
                <p class="technologies">{{ tech }}</p>
            </div>
            <p class="description"> {{ desc }}</p>
        </div>
        <div class="projectWebsites p-4">
            <a :href="github" class="btn btn-primary btn-myPrimary"><i class="fa-brands fa-github"></i> | Ver en GitHub</a>
            <a :href="website" class="btn btn-primary btn-myPrimary"><i class="fa-sharp fa-solid fa-earth-americas"></i> | Ver sitio web</a>
        </div>
    </div>
</template>

<style>
    .projectCard{
        width: 25%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: white;
        margin: 2em;
    }

    .projectCard h1{
        color: #1E2233;
    }

    .projectCard .projectDesc{
        height: 55%;
        text-align: justify;
    }

    .projectCard .projectWebsites{
        height: 20%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-shrink: 2;
    }

    a.btn-myPrimary{
        width: 45%;
        text-decoration: none;
        color: white;
        background-color: var(--primary-color);
        border-color: #d53b03;
    }

    a.btn-myPrimary:hover{
        background-color: #d53b03;
        border-color: var(--primary-color);
    }

    .technologies{
        color: var(--primary-color);
        font-weight: bold;
        font-size: small;
    }

    .projectHeader{
        margin-bottom: 1em;
    }
</style>