<script setup lang="ts">
</script>

<script lang="ts">
export default {
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        changeBG: function () {
            const menuButton = document.getElementById("menuBTN")
            const navbar = document.getElementById("navbar");

            if (!menuButton.classList.contains("collapsed"))
                navbar.style.backgroundColor = "rgb(6,23,39)";
            else
                navbar.style.backgroundColor = "rgba(6, 23, 39, 0.5)";
        },
        handleScroll: function(){
            const menuButton = document.getElementById("menuBTN")
            const navbar = document.getElementById("navbar");

            if(window.scrollY > 0)
                navbar.style.backgroundColor = "rgb(6,23,39)";
            else
                navbar.style.backgroundColor = "rgba(6, 23, 39, 0.5)";   
        }
    }
}
</script>
<template> 
    <div class="img-portada"></div>
            
    <header class="container">
        <nav id="navbar" class="navbar navbar-expand-lg navbar-light fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">fjaviermp</a>
                <button v-on:click="changeBG" id="menuBTN" class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                    <ul class="navbar-nav mb-2 mb-lg-0"> 

                        <li class="nav-item">
                            <a class="nav-link" href="#portada">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#presentacion">Sobre mí</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#servicios">Servicios</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.img-portada{
    background-image: url("../img/montana.jpg");
    height: 100vh;
    width: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    z-index: -1;
}

#navbar{
    background-color: rgba(6, 23, 39, 0.5);
}

.navbar ul li{
    margin: 0 0.75rem 0 0.75rem;
}

.navbar a{
    color: white !important;
    font-size:x-large
}

.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.custom-toggler.navbar-toggler {
  border-color: var(--second-color);
} 

@media only screen and (max-width: 570px){
    #navbarSupportedContent>ul{
        justify-content: center;
        align-items: center;
    }
}
</style>