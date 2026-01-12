<template>
  <div class="experienceRoad" />
</template>

<style>
.experienceRoad {
  width: 3em;
  height: 1em;
  margin: 0.25em;
  background-color: white;
  border: 3px solid var(--primary-color);
  border-radius: 25px;
}

@media only screen and (max-width: 768px) {
  .experienceRoad {
    width: 1em;
    height: 3em;
  }

  .roadImpair {
    display: none;
  }
}
</style>