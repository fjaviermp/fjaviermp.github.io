<template>
    <section id="portada">
        <div class="perfil">
            <img class="img-fluid" src="/img/foto_perfil.jpg" alt="Imagen de Javi">
            <h1>FJavierMP</h1>
            <h2>Desarrollador Web</h2>
            <h3>Almería</h3>
        </div>
    </section>
</template>

<style scoped>
.perfil{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

.perfil>img{
    border-radius:150px;
    padding: 0.25rem;
}

.perfil h1{
    font-size: 4rem;
    font-weight: bolder;
    color: orangered;
    padding: 0.25rem;
}

.perfil h2{
    font-weight: bold;
    color: white;
    padding: 0.25rem;
}
</style>