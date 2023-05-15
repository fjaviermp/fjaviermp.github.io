<script setup lang="ts">
    import ServicioCard from './ServicioCard.vue'

</script>
<template>
    <section id="servicios">
        <div class="content d-flex flex-column">
            <div class="titulo-seccion">
                <span>Habilidades</span>
                <h1>Conocimientos técnicos</h1>
            </div>
            
            <div class="tarjetas_servicios d-flex justify-content-around">
                <ServicioCard icon="fa-brands fa-laravel" title="Laravel" desc="Framework de PHP más usado del actualmente"></ServicioCard>
                
                <ServicioCard icon="fa-brands fa-php" title="PHP" desc="El lenguaje por excelencia de Back-End"></ServicioCard>

                <ServicioCard icon="fa-solid fa-database" title="MySQL" desc="Gestión de Bases de Datos relacionales"></ServicioCard>

                <ServicioCard icon="fa-brands fa-css3-alt" title="CSS" desc="Estilos para ajustar la presentación de la apliación"></ServicioCard>

                <ServicioCard icon="fa-brands fa-vuejs" title="Vue.js" desc="Famework de JavaScript"></ServicioCard>

                <ServicioCard icon="fa-brands fa-git-alt" title="Git" desc="Herramienta para el control de versiones"></ServicioCard>
                
            </div>
        </div>
    </section>
</template>

<style>
#servicios{
    background-color: #24273D !important;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding: 1em 0;
}

.servicio {
    border: solid 1px var(--primary-color);
    border-radius: 10px;
    margin: 1rem;
    padding: 1em;
    width: 30%;
}

.tarjetas_servicios{
    display: flex;
    flex-wrap: wrap;
}
</style>