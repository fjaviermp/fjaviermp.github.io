<script setup lang="ts">
    const props = defineProps({
        label: String,
        question: String,
        answer: String,
    });
</script>
<script lang="ts">
    export default {
        properties: ['id', 'question', 'answer'],
    }
</script>

<template>
    <div class="dato" :id="label">
        <p class="pregunta">{{question}}</p>
        <p class="respuesta">{{answer}}</p>
    </div>
</template>

<style>
.dato .pregunta{
    color: var(--primary-color);
}
.dato{
    width: 50%;
    margin-bottom: 0.3em;
}

.dato>p{
    font-size: larger;
    text-align: justify;
    margin-block-start: 0 !important;
    margin-block-end: 0 !important;
    margin-inline-start: 0 !important;
    margin-inline-end:  0  !important;
    margin-bottom: 0 !important;
}
.pregunta{
    font-weight: bold;
}
@media only screen and (max-width: 570px){
    .dato, .dato>p{
        text-align: center;
        width: 100%;
    }
}
</style>