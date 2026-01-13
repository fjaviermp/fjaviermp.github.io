<template>
  <li
    class="tarjetas_servicios__item"
    itemprop="itemListElement"
    itemscope
    itemtype="https://schema.org/ListItem"
  >
    <meta itemprop="position" :content="String(position)">
    <article class="servicio" itemprop="item" itemscope itemtype="https://schema.org/Thing">
      <i :class="icon" aria-hidden="true"></i>
      <h3 itemprop="name">{{ title }}</h3>
      <p itemprop="description">{{ desc }}</p>
    </article>
  </li>
</template>

<script setup lang="ts">
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, default: () => '' },
  position: { type: Number, required: true },
});
</script>

<style scoped>
.servicio i {
  display: flex !important;
  justify-content: center;
  color: var(--primary-color);
  text-shadow: 1px 1px 1px #FD5C55;
  font-size: 4em;
}

.servicio h3 {
  text-align: center;
  text-transform: uppercase;
}

.servicio p {
  margin-bottom: 0 !important;
  font-size: larger;
  text-align: center;
}

@media only screen and (max-width: 900px) {
  .servicio {
    padding: 0.5em;
  }

  .servicio i {
    font-size: 2em;
  }
}

@media only screen and (max-width: 570px) {
  .servicio {
    padding: 0.5em;
  }

  .servicio h3 {
    text-align: center;
  }

  .servicio p {
    display: none;
  }
}
</style>