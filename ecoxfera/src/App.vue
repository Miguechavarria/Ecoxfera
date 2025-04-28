<template>
  <div id="app">
    <div class="landing-container">
      <!-- Header PNG -->
      <img class="header" src="@/assets/Header.png" alt="Ecoxfera Header" @click="onHeaderClick" />
      <!-- Logo SVG -->
      <LogoLetters :animState="animState" />

      <!-- Description -->
      <section class="description">
        <h2>Un universo donde florece la conciencia</h2>
        <p>
          En algún rincón del tiempo, donde la naturaleza y la imaginación se
          entrelazan, nace Ecoxfera: un universo sensorial creado para recantar
          nuestra relación con el planeta.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LogoLetters from '@/components/Logo/LogoLetters.vue'

const animState = ref(false)
const onHeaderClick = () => {
  animState.value = !animState.value;
console.log('oe')
}

</script>

<style scoped>
/* Container */
.landing-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  cursor: pointer;
  /*background: url('@/assets/paper-texture.jpg') center/cover no-repeat;*/
}

/* Header */
.header {
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  object-fit: fill;
}

/* Description Animation */
.description {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%) translateY(40px);
  opacity: 0;
  max-width: 600px;
  text-align: center;
  color: #444;
  transition: transform 0.6s ease-out, opacity 0.6s ease-out;
}

</style>
