<script setup lang="ts">
    import Datacard from './HomeComponents/Datacard.vue'
    const props = defineProps({
        age: String,
    });
</script>
<script lang="ts">
    export default {
      computed:{
        calculatedAge: function() {
          let currentDate = new Date();
          let birthDate = new Date("2001/02/011");
          let age = Math.floor((currentDate.getTime() - birthDate.getTime())/31557600000);
          return age.toString() + " años";
        }
      }
    }
</script>

<template>
    <section id="presentacion">
        <div class="content">
            <div class="img-present">
                <img class="img-fluid" src="/img/foto_perfil3.jpg" alt="">
            </div>
                            
            <div class="texto-derecha">
                <div class="titulo-seccion">
                    <span>Conóceme</span>
                    <h1>Sobre mi</h1>
                </div>

                <div id="texto_present">
                    <p class="mb-4">
                        Soy un chico apasionado por el desarrollo web. Me encanta crear cosas nuevas y emocionantes con los conocimientos que he ganado a lo largo de mi vida.
                        He trabajado con algunos frameworks y plataformas populares. Además, me siento cómodo experimentando con nuevas herramientas.
                    </p>
                    <p>
                        Me considero proactivo, colaborativo y me encanta trabajar en equipo para resolver problemas y encontrar soluciones ingeniosas. Pienso que lo mejor de resolver un problema es ¡La satisfacción después de ello!
                    </p>
                </div>

                <div id="tarjeta_datos">
                    <Datacard label="nombre" question="Nombre:" answer="Francisco Javier" ></Datacard>
                    <Datacard label="tfn" question="Teléfono:" answer="649 14 28 39" ></Datacard>      
                    <Datacard label="edad" question="Edad:" :answer="calculatedAge" ></Datacard>      
                    <Datacard label="ciudad" question="Ciudad:" answer="Almería" ></Datacard>      
                    <Datacard label="idiomas" question="Idiomas:" answer="Inglés C1 certificado" ></Datacard>      
                    <Datacard label="email" question="Email:" answer="fjaviermpinf@gmail.com" ></Datacard>      
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.img-present{
    width: 30%;
    height: auto;
}

#presentacion{
    background-color: #1E2233 !important;
    align-content: center;
    justify-content: center;
    align-items: center;
}

#texto_present{
    font-size: larger;
    text-align: justify;
}

.texto-derecha{
    width: 60%;
}

#tarjeta_datos{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 3em;
    border: solid 1px var(--primary-color);
    border-radius: 10px;
    margin: 1rem;
}
@media only screen and (max-width: 1310px){
    #tarjeta_datos{
        padding: 0.5em;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
}

@media only screen and (max-width: 768px){
    .img-present{
        display: none;
    }

    .texto-derecha{
        width: 80%;
    }
}

@media only screen and (max-width: 570px){
    #nombre, #tfn, #edad, #ciudad{
        width: 50%;
    }
    #tarjeta_datos{
        margin: 2em 0 0.5em 0;
    }
}
</style>