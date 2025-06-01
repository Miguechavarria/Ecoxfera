<template>
  <div id="app">
    <div class="landing-container">
      <!-- Header PNG -->
      <img class="header" src="@/assets/Header mobile.png" alt="Ecoxfera Header" @click="onHeaderClick" />
      <!-- Logo SVG -->
      <LogoLetters :animState="animState" />
      <Dandeleons :animState="animState" />

      <!-- Description -->
      <section class="description">
        <div>
          <p>Un</p>
          <p>universo</p>
          <p>donde florece</p>
          <p>la conciencia</p>
        </div>
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
import Dandeleons from './components/Logo/Dandeleons.vue';

const animState = ref(false)
const onHeaderClick = () => {
  animState.value = !animState.value;
console.log('oe')
}

</script>

<style scoped>
/* Container */
/*Para que la pagina sea responsive el ancho del
  container principal no puede ser fijo*/
.landing-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  cursor: pointer;
  background: url('@/assets/OIP.jpg') center/cover no-repeat;
}

/* Header */
.header {
  top: 0;
  left: 0;
  width: 100VW;
  z-index: 10;
  object-fit: fill;
}

.description {
}

</style>
