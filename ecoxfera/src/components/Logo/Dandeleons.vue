<template>
  <div v-if="animState" class="L-Dandelions" :key="renderKey">
    <img
      v-for="dandelions in dandelions"
      :key="dandelions.name"
      :src="dandelions.src"
      class="L-dandelions"
      :class="dandelions.animClass"
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

  import L_DanB  from '@/assets/Dandelon_big.svg'
  import L_DanB2 from '@/assets/Dandelon_big2.svg'
  import L_DanS  from '@/assets/Dandelon_small.svg'
  import L_DanS2 from '@/assets/Dandelon_small2.svg'
  import L_DanS3 from '@/assets/Dandelon_small3.svg'
  import L_DanS4 from '@/assets/Dandelon_small4.svg'
  import L_DanS5 from '@/assets/Varius_dandeleons.svg'

  const dandelions = [
    { name: 'L_DanB',  src: L_DanB,  animClass: 'animate-LDanB'  },
    { name: 'L_DanB2', src: L_DanB2, animClass: 'animate-LDanB2' },
    { name: 'L_DanS',  src: L_DanS,  animClass: 'animate-LDanS'  },
    { name: 'L_DanS2', src: L_DanS2, animClass: 'animate-LDanS2' },
    { name: 'L_DanS3', src: L_DanS3, animClass: 'animate-LDanS3' },
    { name: 'L_DanS4', src: L_DanS4, animClass: 'animate-LDanS4' },
    { name: 'L_DanS5', src: L_DanS5, animClass: 'animate-LDanS5' }
  ]

</script>

<style scoped>

.L-Dandelions {
  position: relative;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
}
.L-dandelions {
  width: 180px;
  height: auto;
  opacity: 0;
}
</style>

<style>
@keyframes animate-LDanB {
  0%   { opacity: 0; transform: translate(0px, 400px) scale(2) rotate(-10deg);}
  30%  { opacity: 0; }
  65%  { opacity: 0; }
  100% { opacity: 1; transform: translate(100px, 480px) scale(1.5) rotate(40deg);}
}
.animate-LDanB {
  animation: animate-LDanB 3.5s ease-in-out forwards;
}

@keyframes animate-LDanB2 {
  0%   { opacity: 0; transform: translate(720px, 400px) scale(2.5) rotate(10deg);}
  30%  { opacity: 0; }
  65%  { opacity: 0; }
  100% { opacity: 1; transform: translate(210px, 260px) scale(2.5) rotate(-20deg);}
}
.animate-LDanB2 {
  animation: animate-LDanB2 3.5s ease-in-out forwards;
}

@keyframes animate-LDanS {
  0%   { opacity: 0; transform: translate(0px, -100px) scale(0.1) rotate(-90deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; }
  100% { opacity: 1; transform: translate(100px, 480px) scale(0.5) rotate(40deg);}
}
.animate-LDanS {
  animation: animate-LDanS 3.5s ease-in-out forwards;
}

@keyframes animate-LDanS2 {
  0%   { opacity: 0; transform: translate(0px, -100px) scale(0.1) rotate(-90deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; }
  100% { opacity: 1; transform: translate(50px, 380px) scale(0.7) rotate(10deg);}
}
.animate-LDanS2 {
  animation: animate-LDanS2 3.5s ease-in-out forwards;
}


@keyframes animate-LDanS3 {
  0%   { opacity: 0; transform: translate(-300px, -100px) scale(0.1) rotate(-90deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; }
  100% { opacity: 1; transform: translate(-300px, 600px) scale(0.7) rotate(10deg);}
}
.animate-LDanS3 {
  animation: animate-LDanS3 3.5s ease-in-out forwards;
}

@keyframes animate-LDanS4 {
  0%   { opacity: 0; transform: translate(-440px, -100px) scale(0.1) rotate(-90deg);}
  30%  { opacity: 1; }
  65%  { opacity: 1; }
  100% { opacity: 1; transform: translate(-440PX, 300px) scale(0.7) rotate(180deg);}
}
.animate-LDanS4 {
  animation: animate-LDanS4 3.5s ease-in-out forwards;
}

@keyframes animate-LDanS5 {
  0%   { opacity: 0; transform: translate(-440px, -100px) scale(0.2);}
  30%  { opacity: 0.2; }
  65%  { opacity: 0.5; }
  100% { opacity: 1; transform: translate(-500PX, 110px) scale(1.2);}
}
.animate-LDanS5 {
  animation: animate-LDanS5 3.5s ease-in-out forwards;
}

</style>
