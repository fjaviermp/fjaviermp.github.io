<script setup lang="ts">
</script>

<script lang="ts">
export default {
    data() {
        return {
            dropActive: false
        };
    },
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
            const dropdown = document.getElementById("dropdownItems")
            const navbar = document.getElementById("navbar");

            if(window.scrollY > 0){
                navbar.style.backgroundColor = "rgb(6,23,39)";
                dropdown.style.backgroundColor = "rgb(6,23,39)";
            }else{
                dropdown.style.backgroundColor = "rgba(6, 23, 39, 0.5)";
                navbar.style.backgroundColor = "rgba(6, 23, 39, 0.5)";   
            }
        },
        rotateIcon: function(){
            var dropdownButton = document.getElementById("navbarDropdownMenuLink")
            if (this.dropActive) {
                dropdownButton.classList.remove("menuActive");
                dropdownButton.classList.add("menuInactive");
                this.dropActive = false;
            }else{
                dropdownButton.classList.add("menuActive");
                dropdownButton.classList.remove("menuInactive");
                this.dropActive = true;
            }
        }
    }
}
</script>
<template> 
    <header class="container">
        <nav id="navbar" class="navbar navbar-expand-lg navbar-light fixed-top">
            <div class="container">
                <router-link class="navbar-brand" to="/" name="home">fjaviermp</router-link>
                <button v-on:click="changeBG" id="menuBTN" class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                    <ul class="navbar-nav mb-2 mb-lg-0"> 

                        <li class="nav-item">
                            <router-link class="nav-link" to="/" name="home">Inicio</router-link>
                        </li>
    
                        <li class="nav-item dropdown" id="dropdown" v-on:click="rotateIcon">
                            <a class="nav-link dropdown-toggle menuInactive" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Conóceme
                            </a>
                            <ul class="dropdown-menu" id="dropdownItems" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="/#presentacion">Sobre mí</a></li>
                                <li><a class="dropdown-item" href="/#servicios">Servicios</a></li>
                            </ul>
                        </li>

                        <li class="nav-item">
                            <router-link class="nav-link" to="/experiencia" name="jobs">Experiencia</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
#navbar, .dropdown-menu, .dropdown-menu li .dropdown-item:hover{
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

.dropdown-menu{
    border: 0;
    border-radius: 0 0 0.25rem 0.25em;
    margin-top: 0.5em;
}

.menuActive::after {
  animation: rotation-left 0.3s ease-in-out;
  animation-fill-mode: forwards;
}

.menuInactive::after{
    animation: rotation-right 0.3s ease-in-out;
    animation-fill-mode: forwards;
}

@media only screen and (max-width: 570px){
    #navbarSupportedContent>ul{
        justify-content: center;
        align-items: center;
    }
}

@keyframes rotation-left {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}

@keyframes rotation-right {
  from {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>