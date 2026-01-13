<template>
  <section
    id="experienciasPanel"
    aria-labelledby="experiencias-title"
    itemscope
    itemtype="https://schema.org/ItemList"
  >
    <header class="visually-hidden">
      <h2 id="experiencias-title" itemprop="name">Hoja de ruta de conocimientos</h2>
    </header>
    <div id="experiencias">
      <template v-for="(experience, index) in experiences" :key="experience.id">
        <div
          class="experienceGroup"
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/ListItem"
        >
          <meta itemprop="position" :content="String(index + 1)">
          <ExperienceTile
            :year="experience.year"
            :name="experience.name"
            :desc="experience.desc"
            :active="activeIndex === index"
            controls-id="experienciasDetalles"
            @mouseenter="setActive(index)"
            @focus="setActive(index)"
            @click="setActive(index)"
            @mouseleave="clearActive"
            @blur="clearActive"
          />
          <ExperienceRoad v-if="experience.id < experiences.length" class="roadImpair"></ExperienceRoad>
          <ExperienceRoad v-if="experience.id < experiences.length" class="roadPair"></ExperienceRoad>
        </div>
      </template>
    </div>
    <div id="detallesContainer">
      <div id="experienciasDetalles">
        <h3 id="experienciaChangeName">{{ activeExperience?.name ?? '' }}</h3>
        <p id="experienciaChangeDesc">
          {{ activeExperience?.desc ?? "🔎Explora a través de mis años en el mundo de la programación🔍" }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import ExperienceTile from '@/components/JobsComponents/ExperienceTile.vue';
import ExperienceRoad from '@/components/JobsComponents/ExperienceRoad.vue';

const experiences = ref([
  {
    id: 1, year: 2018, name: 'HTML & CSS',
    desc: 'Aprendí la base de una web básica en el Grado Medio de Sistemas Microinformáticos y Redes.',
  },
  {
    id: 2, year: 2020, name: 'JS & jQuery',
    desc: 'El siguiente paso lo di en el Grado Superior de Desarrollo de Aplicaciones Web.',
  },
  {
    id: 3, year: 2021, name: 'PHP & Laravel',
    desc: 'Un gran paso fue aprender en ese mismo curso programación Back-End usando mi primer framework.',
  },
  {
    id: 4, year: 2022, name: 'Vue 2',
    desc: 'Si ya había aprendido un framework de Back-End ¿Por qué no probar con uno de Front-End? Comencé a aprender Vue',
  },
  {
    id: 5, year: 2023, name: 'Vue 3 & Router',
    desc: 'Siempre es buen momento de actualizarse y ampliar conocimientos',
  },
  {
    id: 6, year: 2025, name: 'Clean Code & SOLID',
    desc: 'Es momento de apostar por código de calidad siguiendo principios SOLID, arquitectura moderna usando composables reutilizables y test unitarios',
  }
]);

const activeIndex = ref<number | null>(null);
const activeExperience = computed(() =>
  activeIndex.value === null ? null : experiences.value[activeIndex.value]
);

const setActive = (i: number) => {
  activeIndex.value = i;
};

const clearActive = () => {
  activeIndex.value = null;
};
</script>

<style>
#experienciasPanel {
  display: flex;
  flex-direction: column;
}

.experienceGroup {
  display: contents;
}

#experienciaChangeDesc,
#experienciaChangeName {
  text-align: center;
}

#experienciaChangeName {
  text-decoration: underline var(--primary-color);
  text-underline-offset: 0.3em;
}

#experiencias,
#detallesContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

#experienciaChangeDesc {
  margin: 0;
}

#experienciasDetalles {
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

@media only screen and (max-width: 768px) {
  #experienciasPanel {
    flex-direction: row;
  }

  .experiencePoint {
    margin: 0;
  }

  #experiencias {
    flex-direction: column;
    width: 40%;
    justify-content: flex-end;
  }

  #experienciasDetalles {
    position: static;
    border-width: 3px 0 3px 3px;
    border-radius: 25px 0 0 25px;
    height: 70%;
    width: 100%;
    padding: 0.5em;
    justify-content: center;
    align-items: center;
  }

  #detallesContainer {
    width: 60%;
    justify-content: flex-end;
  }
}
</style>