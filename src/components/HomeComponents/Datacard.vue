<template>
  <div
    class="dato"
    :id="label"
    role="group"
    :aria-labelledby="questionId"
    :aria-describedby="answerId"
  >
    <p class="pregunta" :id="questionId">{{ question }}</p>
    <p class="respuesta" :id="answerId">
      <span :data-nosnippet="sensitive ? '' : undefined">
        <template v-if="kind === 'email' && !sensitive">
          <a
            class="dato__link"
            :href="`mailto:${answer}`"
            rel="nofollow noopener noreferrer"
            :aria-label="`Enviar email a ${answer}`"
          >{{ answer }}</a>
        </template>
        <template v-else-if="kind === 'phone' && !sensitive">
          <a
            class="dato__link"
            :href="`tel:${telHref}`"
            rel="nofollow noopener noreferrer"
            :aria-label="`Llamar al ${answer}`"
          >{{ answer }}</a>
        </template>
        <template v-else>
          {{ answer }}
        </template>
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  label: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
    // Los datos personales llevan 'data-nosnippet' para evitar que me llamen a la hora de la siesta
  kind: { type: String as () => 'text' | 'phone' | 'email', default: () => 'text' },
  sensitive: { type: Boolean, default: () => false },
});

const safeLabel = computed(() => props.label.replace(/[^a-zA-Z0-9_-]/g, ''));
const questionId = computed(() => `${safeLabel.value}-q`);
const answerId = computed(() => `${safeLabel.value}-a`);
const telHref = computed(() => props.answer.replace(/[^\d+]/g, ''));
</script>

<style>
.dato .pregunta {
  color: var(--primary-color);
}

.dato {
  width: 50%;
  margin-bottom: 0.3em;
}

.dato>p {
  font-size: larger;
  text-align: justify;
  margin-block-start: 0 !important;
  margin-block-end: 0 !important;
  margin-inline-start: 0 !important;
  margin-inline-end: 0 !important;
  margin-bottom: 0 !important;
}

.pregunta {
  font-weight: bold;
}

.dato__link {
  color: inherit;
  text-decoration: none;
}

.dato__link:hover {
  text-decoration: underline;
}

@media only screen and (max-width: 570px) {

  .dato,
  .dato>p {
    text-align: center;
    width: 100%;
  }
}
</style>