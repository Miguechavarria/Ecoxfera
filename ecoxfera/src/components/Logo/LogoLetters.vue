<template>
  <!-- Montamos solo tras el click -->
  <div v-if="animState" class="logo-letters" :key="renderKey">
    <img
      v-for="letter in letters"
      :key="letter.name"
      :src="letter.src"
      class="logo-letter"
      :class="letter.animClass"
      alt=""
    />
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue'

const props = defineProps({
  animState: { type: Boolean, required: true }
})

const renderKey = ref(0)
watch(() => props.animState, val => {
  if (val) renderKey.value++
})

import L_E  from '@/assets/logo/L_E.svg'
import L_C  from '@/assets/logo/L_C.svg'
import L_O  from '@/assets/logo/L_O.svg'
import L_X  from '@/assets/logo/L_X.svg'
import L_F  from '@/assets/logo/L_F.svg'
import L_E2 from '@/assets/logo/L_E2.svg'
import L_R  from '@/assets/logo/L_R.svg'
import L_A  from '@/assets/logo/L_A.svg'

const letters = [
  { name: 'L_E',  src: L_E,  animClass: 'animate-LE'  },
  { name: 'L_C',  src: L_C,  animClass: 'animate-LC'  },
  { name: 'L_O',  src: L_O,  animClass: 'animate-LO'  },
  { name: 'L_X',  src: L_X,  animClass: 'animate-LX'  },
  { name: 'L_F',  src: L_F,  animClass: 'animate-LF'  },
  { name: 'L_E2', src: L_E2, animClass: 'animate-LE2' },
  { name: 'L_R',  src: L_R,  animClass: 'animate-LR'  },
  { name: 'L_A',  src: L_A,  animClass: 'animate-LA'  }
]
</script>

<style scoped>
.logo-letters {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.logo-letter {
  /*position: absolute;*/
  width: 80px;
  height: auto;
  opacity: 0;
}
</style>

<style>
/* Animaciones para pantallas pequeñas */

@media screen and (min-width: 600px) {
  /* LETRA E */
  @keyframes fade-LE {
  0%   { opacity: 0; transform: translate(60px, 680px) scale(0.7) rotate(-10deg); }
  30%  { opacity: 1;}
  65%  { opacity: 1; transform: translate(60px, 680px) scale(0.7) rotate(-10deg); }
  100% { opacity: 1; transform: translate(75%, 150%) scale(0.7) rotate(-50deg);}
}
.animate-LE {
  animation: fade-LE 3s ease-in-out forwards;
}

/* LETRA C */
@keyframes fade-LC {
  0%   { opacity: 0; transform: translate(-60px, -30px) scale(0.5) rotate(0deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(50px, 640px) scale(0.5) rotate(0deg);}
  100% { opacity: 1; transform: translate(0%, 100%) scale(0.5) rotate(-35deg); }
}
.animate-LC {
  animation: fade-LC 3s ease-in-out forwards;
}

/* LETRA O */
@keyframes fade-LO {
  0%   { opacity: 0; transform: translate(40px, 600px) scale(0.25) rotate(10deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(40px, 600px) scale(0.25) rotate(10deg);}
  100% { opacity: 1; transform: translate(-80%, 60%) scale(0.4) rotate(-60deg); }
}
.animate-LO {
  animation: fade-LO 3s ease-in-out forwards;
}

/* LETRA X */
@keyframes fade-LX {
  0%   { opacity: 0; transform: translate(25px, 640px) scale(0.7) rotate(40deg); }
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(25px, 640px) scale(0.7) rotate(40deg); }
  100% { opacity: 1; transform: translate(-115%, 30%) scale(0.7) rotate(-18deg); }
}
.animate-LX {
  animation: fade-LX 3s ease-in-out forwards;
}

/* LETRA F */
@keyframes fade-LF {
  0%   { opacity: 0; transform: translate(25px, 640px) scale(0.4) rotate(10deg); }
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(25px, 640px) scale(0.4) rotate(10deg);}
  100% { opacity: 1; transform: translate(-150%, 0%) scale(0.4) rotate(-10deg);}
}
.animate-LF {
  animation: fade-LF 3s ease-in-out forwards;
}

/* SEGUNDA E */
@keyframes fade-LE2 {
  0%   { opacity: 0; transform: translate(0px, 640px) scale(0.5) rotate(-25deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(0px, 640px) scale(0.5) rotate(-25deg);}
  100% { opacity: 1; transform: translate(-170%, -10%) scale(0.5) rotate(-25deg);}
}
.animate-LE2 {
  animation: fade-LE2 3s ease-in-out forwards;
}

/* LETRA R */
@keyframes fade-LR {
  0%   { opacity: 0; transform: translate(0px, 640px) scale(0.5) rotate(-25deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(0px, 640px) scale(0.5) rotate(-25deg);}
  100% { opacity: 1; transform: translate(-210%, -20%) scale(0.4) rotate(-5deg);}
}
.animate-LR {
  animation: fade-LR 3s ease-in-out forwards;
}

/* LETRA A */
@keyframes fade-LA {
  0%   { opacity: 0; transform: translate(650%, 700%) scale(0.2) rotate(25deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(650%, 700%) scale(0.2) rotate(25deg);}
  100% { opacity: 1; transform: translate(460%, -200%) scale(0.6) rotate(0deg);}
}
.animate-LA {
  animation: fade-LA 3s ease-in-out forwards;
  }
}

/* Animaciones para pantallas medianas */
@media screen and (min-width: 720px) {

    /* LETRA E */
    @keyframes fade-LE {
  0%   { opacity: 0; transform: translate(60px, 680px) scale(0.9) rotate(-10deg); }
  30%  { opacity: 1;}
  65%  { opacity: 1; transform: translate(60px, 680px) scale(0.9) rotate(-10deg); }
  100% { opacity: 1; transform: translate(35px, 225px) scale(0.9) rotate(-50deg);}
}
.animate-LE {
  animation: fade-LE 3s ease-in-out forwards;
}

/* LETRA C */
@keyframes fade-LC {
  0%   { opacity: 0; transform: translate(-60px, -30px) scale(0.7) rotate(0deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(50px, 640px) scale(0.7) rotate(0deg);}
  100% { opacity: 1; transform: translate(-10px, 150px) scale(0.7) rotate(-35deg); }
}
.animate-LC {
  animation: fade-LC 3s ease-in-out forwards;
}

/* LETRA O */
@keyframes fade-LO {
  0%   { opacity: 0; transform: translate(40px, 600px) scale(0.45) rotate(10deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(40px, 600px) scale(0.45) rotate(10deg);}
  100% { opacity: 1; transform: translate(-60px, 83px) scale(0.6) rotate(-60deg); }
}
.animate-LO {
  animation: fade-LO 3s ease-in-out forwards;
}

/* LETRA X */
@keyframes fade-LX {
  0%   { opacity: 0; transform: translate(25px, 640px) scale(0.9) rotate(40deg); }
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(25px, 640px) scale(0.9) rotate(40deg); }
  100% { opacity: 1; transform: translate(-90px, 50px) scale(0.9) rotate(-18deg); }
}
.animate-LX {
  animation: fade-LX 3s ease-in-out forwards;
}

/* LETRA F */
@keyframes fade-LF {
  0%   { opacity: 0; transform: translate(25px, 640px) scale(0.6) rotate(10deg); }
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(25px, 640px) scale(0.6) rotate(10deg);}
  100% { opacity: 1; transform: translate(-120px, 0px) scale(0.6) rotate(-10deg);}
}
.animate-LF {
  animation: fade-LF 3s ease-in-out forwards;
}

/* SEGUNDA E */
@keyframes fade-LE2 {
  0%   { opacity: 0; transform: translate(0px, 640px) scale(0.7) rotate(-25deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(0px, 640px) scale(0.7) rotate(-25deg);}
  100% { opacity: 1; transform: translate(-130px, -10px) scale(0.7) rotate(-25deg);}
}
.animate-LE2 {
  animation: fade-LE2 3s ease-in-out forwards;
}

/* LETRA R */
@keyframes fade-LR {
  0%   { opacity: 0; transform: translate(0px, 640px) scale(0.7) rotate(-25deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(0px, 640px) scale(0.7) rotate(-25deg);}
  100% { opacity: 1; transform: translate(-145px, -20px) scale(0.6) rotate(-5deg);}
}
.animate-LR {
  animation: fade-LR 3s ease-in-out forwards;
}

/* LETRA A */
@keyframes fade-LA {
  0%   { opacity: 0; transform: translate(-30px, 620px) scale(0.4) rotate(25deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(-30px, 620px) scale(0.4) rotate(25deg);}
  100% { opacity: 1; transform: translate(-160px, -25px) scale(0.8) rotate(0deg);}
}
.animate-LA {
  animation: fade-LA 3s ease-in-out forwards;
  }
}

/* Animaciones para pantallas medio grandes */

@media  screen and (min-width: 861px) {

    /* LETRA E */
    @keyframes fade-LE {
  0%   { opacity: 0; transform: translate(60px, 680px) scale(0.9) rotate(-10deg); }
  30%  { opacity: 1;}
  65%  { opacity: 1; transform: translate(60px, 680px) scale(0.9) rotate(-10deg); }
  100% { opacity: 1; transform: translate(35px, 225px) scale(0.9) rotate(-50deg);}
}
.animate-LE {
  animation: fade-LE 3s ease-in-out forwards;
}

/* LETRA C */
@keyframes fade-LC {
  0%   { opacity: 0; transform: translate(-60px, -30px) scale(0.7) rotate(0deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(50px, 640px) scale(0.7) rotate(0deg);}
  100% { opacity: 1; transform: translate(-10px, 150px) scale(0.7) rotate(-35deg); }
}
.animate-LC {
  animation: fade-LC 3s ease-in-out forwards;
}

/* LETRA O */
@keyframes fade-LO {
  0%   { opacity: 0; transform: translate(40px, 600px) scale(0.45) rotate(10deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(40px, 600px) scale(0.45) rotate(10deg);}
  100% { opacity: 1; transform: translate(-60px, 83px) scale(0.6) rotate(-60deg); }
}
.animate-LO {
  animation: fade-LO 3s ease-in-out forwards;
}

/* LETRA X */
@keyframes fade-LX {
  0%   { opacity: 0; transform: translate(25px, 640px) scale(0.9) rotate(40deg); }
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(25px, 640px) scale(0.9) rotate(40deg); }
  100% { opacity: 1; transform: translate(-90px, 50px) scale(0.9) rotate(-18deg); }
}
.animate-LX {
  animation: fade-LX 3s ease-in-out forwards;
}

/* LETRA F */
@keyframes fade-LF {
  0%   { opacity: 0; transform: translate(25px, 640px) scale(0.6) rotate(10deg); }
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(25px, 640px) scale(0.6) rotate(10deg);}
  100% { opacity: 1; transform: translate(-120px, 0px) scale(0.6) rotate(-10deg);}
}
.animate-LF {
  animation: fade-LF 3s ease-in-out forwards;
}

/* SEGUNDA E */
@keyframes fade-LE2 {
  0%   { opacity: 0; transform: translate(0px, 640px) scale(0.7) rotate(-25deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(0px, 640px) scale(0.7) rotate(-25deg);}
  100% { opacity: 1; transform: translate(-130px, -10px) scale(0.7) rotate(-25deg);}
}
.animate-LE2 {
  animation: fade-LE2 3s ease-in-out forwards;
}

/* LETRA R */
@keyframes fade-LR {
  0%   { opacity: 0; transform: translate(0px, 640px) scale(0.7) rotate(-25deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(0px, 640px) scale(0.7) rotate(-25deg);}
  100% { opacity: 1; transform: translate(-145px, -20px) scale(0.6) rotate(-5deg);}
}
.animate-LR {
  animation: fade-LR 3s ease-in-out forwards;
}

/* LETRA A */
@keyframes fade-LA {
  0%   { opacity: 0; transform: translate(-30px, 620px) scale(0.4) rotate(25deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(-30px, 620px) scale(0.4) rotate(25deg);}
  100% { opacity: 1; transform: translate(-160px, -25px) scale(0.8) rotate(0deg);}
}
.animate-LA {
  animation: fade-LA 3s ease-in-out forwards;
  }
}

/* Animaciones para pantallas grandes */

@media screen and (min-width: 1024px) {
      /* LETRA E */
  @keyframes fade-LE {
  0%   { opacity: 0; transform: translate(60px, 680px) scale(0.9) rotate(-10deg); }
  30%  { opacity: 1;}
  65%  { opacity: 1; transform: translate(60px, 680px) scale(0.9) rotate(-10deg); }
  100% { opacity: 1; transform: translate(35px, 225px) scale(0.9) rotate(-50deg);}
}
.animate-LE {
  animation: fade-LE 3s ease-in-out forwards;
}

/* LETRA C */
@keyframes fade-LC {
  0%   { opacity: 0; transform: translate(-60px, -30px) scale(0.7) rotate(0deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(50px, 640px) scale(0.7) rotate(0deg);}
  100% { opacity: 1; transform: translate(-10px, 150px) scale(0.7) rotate(-35deg); }
}
.animate-LC {
  animation: fade-LC 3s ease-in-out forwards;
}

/* LETRA O */
@keyframes fade-LO {
  0%   { opacity: 0; transform: translate(40px, 600px) scale(0.45) rotate(10deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(40px, 600px) scale(0.45) rotate(10deg);}
  100% { opacity: 1; transform: translate(-60px, 83px) scale(0.6) rotate(-60deg); }
}
.animate-LO {
  animation: fade-LO 3s ease-in-out forwards;
}

/* LETRA X */
@keyframes fade-LX {
  0%   { opacity: 0; transform: translate(25px, 640px) scale(0.9) rotate(40deg); }
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(25px, 640px) scale(0.9) rotate(40deg); }
  100% { opacity: 1; transform: translate(-90px, 50px) scale(0.9) rotate(-18deg); }
}
.animate-LX {
  animation: fade-LX 3s ease-in-out forwards;
}

/* LETRA F */
@keyframes fade-LF {
  0%   { opacity: 0; transform: translate(25px, 640px) scale(0.6) rotate(10deg); }
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(25px, 640px) scale(0.6) rotate(10deg);}
  100% { opacity: 1; transform: translate(-120px, 0px) scale(0.6) rotate(-10deg);}
}
.animate-LF {
  animation: fade-LF 3s ease-in-out forwards;
}

/* SEGUNDA E */
@keyframes fade-LE2 {
  0%   { opacity: 0; transform: translate(0px, 640px) scale(0.7) rotate(-25deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(0px, 640px) scale(0.7) rotate(-25deg);}
  100% { opacity: 1; transform: translate(-130px, -10px) scale(0.7) rotate(-25deg);}
}
.animate-LE2 {
  animation: fade-LE2 3s ease-in-out forwards;
}

/* LETRA R */
@keyframes fade-LR {
  0%   { opacity: 0; transform: translate(0px, 640px) scale(0.7) rotate(-25deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(0px, 640px) scale(0.7) rotate(-25deg);}
  100% { opacity: 1; transform: translate(-145px, -20px) scale(0.6) rotate(-5deg);}
}
.animate-LR {
  animation: fade-LR 3s ease-in-out forwards;
}

/* LETRA A */
@keyframes fade-LA {
  0%   { opacity: 0; transform: translate(-30px, 620px) scale(0.4) rotate(25deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; transform: translate(-30px, 620px) scale(0.4) rotate(25deg);}
  100% { opacity: 1; transform: translate(-160px, -25px) scale(0.8) rotate(0deg);}
}
.animate-LA {
  animation: fade-LA 3s ease-in-out forwards;
  }
}

</style>
