<template>
  <div class="projectCard">
    <a :href="website">
      <img class="img-fluid" :src="portrait" :alt="title">
    </a>
    <div class="projectDesc px-4">
      <div class="projectHeader">
        <h1>{{ title }}</h1>
        <p class="technologies">
          {{ tech }}
        </p>
      </div>
      <p class="description">
        {{ desc }}
      </p>
    </div>
    <div class="projectWebsites p-4">
      <a v-if="github" :href="github" class="btn btn-primary btn-myPrimary">
        <i class="fa-brands fa-github"></i> | Ver en GitHub
      </a>
      <a v-if="website" :href="website" class="btn btn-primary btn-myPrimary">
        <i class="fa-sharp fa-solid fa-earth-americas"></i> | Ver sitio web</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id: Number,
  portrait: String,
  title: String,
  desc: String,
  tech: String,
  website: String,
  github: String
});
</script>

<style>
.projectCard {
  width: 25%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  margin: 2em;
}

.projectCard img {
  border-bottom: 0.3em solid var(--primary-color);
}

.projectCard h1 {
  color: var(--secondary-color);
}

.projectCard .projectDesc {
  height: 55%;
  text-align: justify;
}

.projectCard .projectWebsites {
  height: 20%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-shrink: 2;
}

a.btn-myPrimary {
  margin: 0 auto;
  width: 45%;
  text-decoration: none;
  color: white;
  background-color: var(--primary-color);
  border-color: #d53b03;
}

a.btn-myPrimary:hover {
  background-color: #d53b03;
  border-color: var(--primary-color);
  font-weight: bolder;
}

.technologies {
  color: var(--primary-color);
  font-weight: bold;
  font-size: small;
}

.projectHeader {
  margin-bottom: 1em;
}

.projectDesc .description {
  text-align: justify;
  word-break: break-all;
}

@media (max-width: 1158px) {
  .projectCard {
    width: 40%;
    margin: 1em;
  }
}

@media (max-width: 750px) {
  .projectCard {
    width: 90%;
  }

  .projectHeader {
    margin-bottom: 0 !important;
  }

  .projectCard .projectWebsites {
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: center;
  }

  .projectWebsites {
    padding: 0 !important;
  }

  a.btn-myPrimary {
    width: 80%;
    margin: 0.5em 1em;
  }

}
</style>