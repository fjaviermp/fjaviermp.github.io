<script setup lang="ts">
    import ExperienceTile from './ExperienceTile.vue';
    import ExperienceRoad from './ExperienceRoad.vue';
</script>
<script lang="ts">
    export default {
        name: 'App',
        data() {
            const experiences = [
                {id: 1, year: 2018, name: 'HTML & CSS',
                    desc: 'Aprendí la base de una web básica en el Grado Medio de Sistemas Microinformáticos y Redes.',
                },
                {id: 2, year: 2020, name: 'JS & jQuery',
                    desc: 'El siguiente paso lo di en el Grado Superior de Desarrollo de Aplicaciones Web.',
                },
                {id: 3, year: 2021, name: 'PHP & Laravel',
                    desc: 'Un gran paso fue aprender en ese mismo curso programación Back-End usando mi primer framework.',
                },
                {id: 4, year: 2022, name: 'Vue 2',
                    desc: 'Si ya había aprendido un framework de Back-End ¿Por qué no probar con uno de Front-End? Comencé a aprender Vue',
                },
                {id: 5, year: 2023, name: 'Vue 3 & Router',
                    desc: 'Siempre es buen momento de actualizarse y ampliar conocimientos',
                },
            ];
            return {
                experiences
            };
        },
        computed:{
            
        },
        methods: {
            setDesc(i: Number){
                console.log(i);                
            },
        }
    }
</script>

<template>
    <section id="experienciasPanel">
        <div id="experiencias">
            <template v-for="(experience, index) in experiences" :key="experience.id">
                <ExperienceTile @click="setDesc(index)" :id="experience.id" :year="experience.year" :ref="experience.desc" :name="experience.name"></ExperienceTile>
                <ExperienceRoad v-if="experience.id < experiences.length" class="roadImpair"></ExperienceRoad>
                <ExperienceRoad v-if="experience.id < experiences.length" class="roadPair"></ExperienceRoad>
            </template>
        </div>
        <div id="detallesContainer">
            <div id="experienciasDetalles">
                <h3>PASA EL CURSOR POR ENCIMA PARA VER MÁS DETALLES</h3>
            </div>
        </div>
    </section>
</template>

<style>
    #experienciasPanel{
        display: flex;
        background-color: rgba(30, 34, 51, 0.6);
        flex-direction: column;
    }

    #experiencias, #detallesContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }

    #experienciasDetalles{
        position: absolute;
        width: 60%;
        height: 10em;
        bottom: 0;
        background-color: rgb(30, 34, 51);
        border-radius: 25px 25px 0 0;
        border: solid var(--primary-color);
        border-width: 4px 4px 0 4px;
        padding: 2em;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (max-width: 768px){
        #experienciasPanel{
            flex-direction: row;
        }
        .experiencePoint{
            margin: 0;
        }
        #experiencias{
            flex-direction: column;
            width: 40%;
        }
        #experienciasDetalles{
            position: static;
            border-width: 3px 0 3px 3px;
            border-radius: 25px 0 0 25px;
            height: 70%;
            width: 90%;
            padding: 0.5em;
            justify-content: center;
            align-items: center;
        }
        #detallesContainer{
            width: 60%;
            justify-content: flex-end;
        }
    }
</style>