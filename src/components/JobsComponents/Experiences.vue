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
            setDesc(i: number){
                const expDetail = document.getElementById('experienciaChangeDesc') as any;
                expDetail.innerHTML = this.experiences[i].desc;
                
                const expName = document.getElementById('experienciaChangeName') as any;
                expName.innerHTML = this.experiences[i].name;

                document.getElementsByClassName("experiencePoint")[i].classList.add("experiencePointAnimated")
            },
            clearDesc(i: number){
                const experieneDetail = document.getElementById('experienciaChangeDesc') as any;
                experieneDetail.innerHTML = "🔎Explora a través de mis años en el mundo de la programación🔍";

                const expName = document.getElementById('experienciaChangeName') as any;
                expName.innerHTML = ""; 

                document.getElementsByClassName("experiencePoint")[i].classList.remove("experiencePointAnimated")
            }
        }
    }
</script>

<template>
    <section id="experienciasPanel">
        <div id="experiencias">
            <template v-for="(experience, index) in experiences" :key="experience.id">
                <ExperienceTile @mouseenter="setDesc(index)" @mouseleave="clearDesc(index)" :id="experience.id" :year="experience.year" :name="experience.name"></ExperienceTile>
                <ExperienceRoad v-if="experience.id < experiences.length" class="roadImpair"></ExperienceRoad>
                <ExperienceRoad v-if="experience.id < experiences.length" class="roadPair"></ExperienceRoad>
            </template>
        </div>
        <div id="detallesContainer">
            <div id="experienciasDetalles">
                <h2 id="experienciaChangeName"></h2>
                <h4 id="experienciaChangeDesc">🔎Explora a través de mis años en el mundo de la programación🔍</h4>
            </div>
        </div>
    </section>
</template>

<style>
    #experienciasPanel{
        display: flex;
        flex-direction: column;
    }
    

    #experienciaChangeDesc, #experienciaChangeName{
        text-align: center;
    }

    #experienciaChangeName{
        text-decoration: underline var(--primary-color);
        text-underline-offset: 0.3em;
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
        flex-direction: column;
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
            justify-content: flex-end;
        }
        #experienciasDetalles{
            position: static;
            border-width: 3px 0 3px 3px;
            border-radius: 25px 0 0 25px;
            height: 70%;
            width: 100%;
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