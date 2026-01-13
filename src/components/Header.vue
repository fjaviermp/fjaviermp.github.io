<template>
  <div class="container">
    <a class="skip-link" href="#contenido">Saltar al contenido</a>
    <nav id="navbar" class="navbar navbar-expand-lg navbar-light fixed-top" aria-label="Navegación principal">
      <div class="container">
        <router-link class="navbar-brand" to="/" aria-label="Inicio: fjaviermp">fjaviermp</router-link>
        <button
          id="menuBTN"
          class="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation"
          @click="changeBG"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

          <ul class="navbar-nav mb-2 mb-lg-0">

            <li class="nav-item">
              <router-link class="nav-link" to="/" aria-label="Ir a Inicio">Inicio</router-link>
            </li>

            <li
              id="dropdown"
              class="nav-item dropdown"
              @click="rotateIcon">
              <button
                class="nav-link dropdown-toggle"
                type="button"
                id="navbarDropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                aria-controls="dropdownItems"
              >
                Conóceme
              </button>
              <ul class="dropdown-menu" id="dropdownItems" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#presentacion">Sobre mí</a></li>
                <li><a class="dropdown-item" href="#servicios">Servicios</a></li>
              </ul>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/experiencia" aria-label="Ir a Experiencia">Experiencia</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/proyectos" aria-label="Ir a Proyectos">Proyectos</router-link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
const dropActive = ref(false);

const handleScroll = () => {
  const dropdown = document.getElementById("dropdownItems");
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 0) {
    if (navbar) navbar.style.backgroundColor = "rgb(6,23,39)";
    if (dropdown) dropdown.style.backgroundColor = "rgb(6,23,39)";
  } else {
    if (dropdown) dropdown.style.backgroundColor = "rgba(6, 23, 39, 0.5)";
    if (navbar) navbar.style.backgroundColor = "rgba(6, 23, 39, 0.5)";
  }
}

const changeBG = () => {
  const menuButton = document.getElementById("menuBTN");
  const navbar = document.getElementById("navbar");

  if (!menuButton || !navbar) return;
  if (!menuButton.classList.contains("collapsed")) navbar.style.backgroundColor = "rgb(6,23,39)";
  else navbar.style.backgroundColor = "rgba(6, 23, 39, 0.5)";
}

const rotateIcon = () => {
  const dropdownButton = document.getElementById("navbarDropdownMenuLink");
  if (!dropdownButton) return;
  if (dropActive.value) {
    dropdownButton.classList.remove("menuActive");
    dropdownButton.classList.add("menuInactive");
    dropActive.value = false;
  } else {
    dropdownButton.classList.add("menuActive");
    dropdownButton.classList.remove("menuInactive");
    dropActive.value = true;
  }
}

// Lifecycle
onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<style scoped>
.skip-link {
  position: absolute;
  left: -9999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.skip-link:focus {
  left: 1rem;
  top: 1rem;
  width: auto;
  height: auto;
  padding: 0.5rem 0.75rem;
  background: rgb(6,23,39);
  color: white;
  z-index: 2000;
  border-radius: 0.25rem;
}

#dropdown {
  display: flex;
}

#navbar,
.dropdown-menu,
.dropdown-menu li .dropdown-item:hover {
  background-color: rgba(6, 23, 39, 0.5);
}

.navbar ul li {
  margin: 0 0.75rem 0 0.75rem;
}

.navbar a {
  color: white !important;
  font-size: x-large
}

.navbar button.nav-link {
  color: white !important;
  font-size: x-large;
  background: transparent;
  border: 0;
  padding: 0;
}

.navbar button.nav-link:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 4px;
}

.navbar a:hover {
  color: var(--primary-color) !important;
  font-size: x-large
}

.navbar button.nav-link:hover {
  color: var(--primary-color) !important;
}

.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.custom-toggler.navbar-toggler {
  border-color: var(--second-color);
}

.dropdown-menu {
  border: 0;
  border-radius: 0 0 0.25rem 0.25em;
  margin-top: 0.5em;
}

.menuActive::after {
  animation: rotation-left 0.3s ease-in-out;
  animation-fill-mode: forwards;
}

.menuInactive::after {
  animation: rotation-right 0.3s ease-in-out;
  animation-fill-mode: forwards;
}

@media only screen and (max-width: 570px) {
  #navbarSupportedContent>ul {
    justify-content: center;
    align-items: center;
  }
  #dropdown {
    flex-direction: column;
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