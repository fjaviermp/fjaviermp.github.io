<template>
  <button
    class="experienceTile"
    type="button"
    itemprop="item"
    itemscope
    itemtype="https://schema.org/Thing"
    :aria-pressed="active ? 'true' : 'false'"
    :aria-controls="controlsId"
  >
    <div class="experiencePoint" :class="{ experiencePointAnimated: active }">
      <time :datetime="String(year)">{{ year }}</time>
    </div>
    <div class="experienceDesc d-flex justify-content-center w-100 mt-2">
      <h3 itemprop="name">{{ name }}</h3>
      <p class="visually-hidden" itemprop="description">{{ desc }}</p>
    </div>
  </button>
</template>

<script setup lang="ts">
defineProps({
  year: { type: Number, required: true },
  name: { type: String, required: true },
  desc: { type: String, required: true },
  active: { type: Boolean, default: () => false },
  controlsId: { type: String, required: true },
});
</script>

<style>
.experienceTile {
  width: 10%;
}

.experienceTile {
  background: transparent;
  border: 0;
  padding: 0;
  color: inherit;
}

.experienceTile:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 4px;
  border-radius: 12px;
}

.experienceTile:hover {
  cursor: pointer;
}

.experienceTile,
.experienceDesc .info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.experiencePoint {
  background-color: white;
  border: 4px solid var(--primary-color);
  margin: 1em 1em 0 1em;
  width: 5em;
  height: 5em;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.experienceDesc {
  position: relative;
}

.experienceDesc h4 {
  position: absolute;
  width: auto;
  height: auto;
}

.experienceDesc .info {
  max-width: 20em;
}

.experiencePoint time {
  color: rgba(30, 34, 51, 1);
  font-weight: bolder;
  font-size: larger;
}

/* Animacion para mover el punto*/
.experiencePointAnimated {
  animation: vibration 1.5s infinite;
}

@keyframes vibration {
  0% {
    transform: translateY(0)
  }

  25% {
    transform: translateY(-20px)
  }

  50% {
    transform: translateY(0px)
  }

  75% {
    transform: translateY(-20px)
  }

  100% {
    transform: translateY(0px)
  }
}

@media only screen and (max-width: 768px) {
  .experienceTile {
    flex-direction: row;
    width: 80%;
    margin: 1em 0 1em 0;
  }

  .experienceTile .experienceDesc,
  .experienceTile .experienceDesc h4 {
    position: static;
    display: none !important;
  }

  /* En movil la vibracion será de izquierda a derecha */
  @keyframes vibration {
    0% {
      transform: translateX(0)
    }

    25% {
      transform: translateX(-20px)
    }

    50% {
      transform: translateX(0px)
    }

    75% {
      transform: translateX(-20px)
    }

    100% {
      transform: translateX(0px)
    }
  }
}

@media only screen and (max-width: 680px) {
  div#experiencias {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
  }

  .experienceTile,
  .experiencePoint {
    width: 4em;
    height: 4em;
    margin: 0;
  }

  .experienceRoad.roadPair {
    height: 3em;
  }
}
</style>