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
  width: 100vw;
  height: 100vh;
}

.logo-letter {
  position: absolute;
  width: 80px;
  height: auto;
  opacity: 0;
}
</style>

<style>
/* Keyframe genérico: 0% (invisible en pos inicial), 
   20% (opacidad 1 en pos inicial), 
   50% (mantener),
   100% (posición final). */

/* LETRA E */
@keyframes fade-LE {
  0%   { opacity: 0; top: 40%; left: 15%; width: 100px; height: auto; }
  30%  { opacity: 1; width: 100px; height: auto;}
  65%  { opacity: 1; top: 40%; left: 15%; width: 100px; height: auto; }
  100% { opacity: 1; top: 10%; left:  5%; width: 100px; height: auto;}
}
.animate-LE {
  animation: fade-LE 3s ease-in-out forwards;
}

/* LETRA C */
@keyframes fade-LC {
  0%   { opacity: 0; top: 100%; left: 10%; width: 60px; height: auto;}
  30%  { opacity: 1;  width: 60px; height: auto;}
  65%  { opacity: 1; top: 30%; left: 25%; width: 60px; height: auto;}
  100% { opacity: 1; top: 9%; left: 10%; width: 60px; height: auto; }
}
.animate-LC {
  animation: fade-LC 3s ease-in-out forwards;
}

/* LETRA O */
@keyframes fade-LO {
  0%   { opacity: 0; top: 40%; left: 30%; width: 50px; height: auto;}
  30%  { opacity: 1; }
  65%  { opacity: 1; top: 40%; left: 30%; width: 50px; height: auto; }
  100% { opacity: 1; top: 12%; left: 14%;  width: 60px; height: auto;}
}
.animate-LO {
  animation: fade-LO 3s ease-in-out forwards;
}

/* LETRA X */
@keyframes fade-LX {
  0%   { opacity: 0; top: 42%; left: 36%; }
  30%  { opacity: 1; }
  65%  { opacity: 1; top: 42%; left: 36%; }
  100% { opacity: 1; top: 8%; left: 17%; }
}
.animate-LX {
  animation: fade-LX 3s ease-in-out forwards;
}

/* LETRA F */
@keyframes fade-LF {
  0%   { opacity: 0; top: 34%; left: 43%; width: 60px; height: auto; }
  30%  { opacity: 1; }
  65%  { opacity: 1; top: 34%; left: 43%; width: 60px; height: auto;}
  100% { opacity: 1; top: 3%; left: 21%; width: 60px; height: auto;}
}
.animate-LF {
  animation: fade-LF 3s ease-in-out forwards;
}

/* SEGUNDA E */
@keyframes fade-LE2 {
  0%   { opacity: 0; top: 34%; left: 48%; width: 60px; height: auto;}
  30%  { opacity: 1; }
  65%  { opacity: 1; top: 34%; left: 48%; width: 60px; height: auto;}
  100% { opacity: 1; top: 3%; left: 24%; width: 60px; height: auto;}
}
.animate-LE2 {
  animation: fade-LE2 3s ease-in-out forwards;
}

/* LETRA R */
@keyframes fade-LR {
  0%   { opacity: 0; top: 40%; left: 54%; width: 80px; height: auto;}
  30%  { opacity: 1; }
  65%  { opacity: 1; top: 40%; left: 54%; width: 80px; height: auto;}
  100% { opacity: 1; top: 6%; left: 28%; width: 60px; height: auto;}
}
.animate-LR {
  animation: fade-LR 3s ease-in-out forwards;
}

/* LETRA A */
@keyframes fade-LA {
  0%   { opacity: 0; top: 35%; left: 58%; width: 40px; height: auto;}
  30%  { opacity: 1; }
  65%  { opacity: 1; top: 35%; left: 58%; width: 40px; height: auto;}
  100% { opacity: 1; top: 6%; left: 32%; width: 75px; height: auto;}
}
.animate-LA {
  animation: fade-LA 3s ease-in-out forwards;
}
</style>
