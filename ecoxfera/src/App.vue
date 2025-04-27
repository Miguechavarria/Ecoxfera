<template>
  <div id="app">
    <div class="landing-container">
      <!-- Header PNG -->
      <img class="header" src="@/assets/Header.png" alt="Ecoxfera Header" @click="onHeaderClick" />
      <!-- Logo SVG -->
      <img src="@/assets/logo/L_E.svg" class="logo" :class="{'fadeIN': animState}"/>


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
// Import SVGs via vue-svg-loader or unplugin-icons
//import LogoLetters from '@/assets/logo/L_E.svg';
//import DandelionLarge from '@/assets/';
//import DandelionSmall from '@/assets/';
//import SeedSVG from '@/assets/seed.svg';
//import LogoLetters from './components/Logo/LogoLetters.vue';

const seedCount = 8;
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

/* Logo Animation */

@keyframes fadein{
  0% {
    opacity: 0;
  }
  25%{opacity: 1;}
  75%{top: 50%;
  left: 20%;
  opacity: 1;}
  100%{
    top: 10%;
  left: 10%;
  opacity: 1;
  }
}

.logo {
  position: relative;
  top: 50%;
  left: 20%;
  height: auto;
  width: 80px;
  opacity: 0;
}

.fadeIN {
  animation-name: fadein;
  animation-duration: 4s;
  animation-timing-function:ease-in;
  opacity: 1;
  animation-fill-mode: forwards;

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
.step-4 .description {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
}
</style>
