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
    height: auto;
    opacity: 0;
  }
  </style>

  <style>

  /* Para pantallas más pequeñas (menos de 720px de ancho) */
@media only screen and (min-width: 600px) {
  .L-dandelions {
    width: 100px; /* Reduce el tamaño para pantallas más pequeñas */
  }
  @keyframes animate-LDanB {
    0%   { opacity: 0; transform: translate(10%, 50%) scale(1.6) rotate(-5deg);}
    30%  { opacity: 0; }
    65%  { opacity: 0; }
    100% { opacity: 1; transform: translate(70%, 150%) scale(2.2) rotate(35deg);}
  }
  .animate-LDanB {
    animation: animate-LDanB 3.5s ease-in-out forwards;
  }
  @keyframes animate-LDanB2 {
    0%   { opacity: 0; transform: translate(75%, 50%) scale(2) rotate(15deg);}
    30%  { opacity: 0; }
    65%  { opacity: 0; }
    100% { opacity: 1; transform: translate(230%, 70%) scale(3.5) rotate(-15deg);}
  }
  .animate-LDanB2 {
    animation: animate-LDanB2 3.5s ease-in-out forwards;
  }
  @keyframes animate-LDanS {
    0%   { opacity: 0; transform: translate(5%, -90%) scale(0.12) rotate(-80deg);}
    30%  { opacity: 1; }
    65%  { opacity: 1; }
    100% { opacity: 1; transform: translate(115%, 170%) scale(1) rotate(30deg);}
  }
  .animate-LDanS {
    animation: animate-LDanS 3.5s ease-in-out forwards;
  }
  @keyframes animate-LDanS2 {
    0%   { opacity: 0; transform: translate(5%, -90%) scale(0.12) rotate(-80deg);}
    30%  { opacity: 1; }
    65%  { opacity: 1; }
    100% { opacity: 1; transform: translate(25%, 110%) scale(0.9) rotate(5deg);}
  }
  .animate-LDanS2 {
    animation: animate-LDanS2 3.5s ease-in-out forwards;
  }
  @keyframes animate-LDanS3 {
    0%   { opacity: 0; transform: translate(30%, -350%) scale(0.12) rotate(-80deg);}
    30%  { opacity: 1; }
    65%  { opacity: 1; }
    100% { opacity: 1; transform: translate(30%, 130%) scale(1) rotate(50deg);}
  }
  .animate-LDanS3 {
    animation: animate-LDanS3 3.5s ease-in-out forwards;
  }
  @keyframes animate-LDanS4 {
    0%   { opacity: 0; transform: translate(-110%, -350%) scale(0.12) rotate(-80deg);}
    30%  { opacity: 1; }
    65%  { opacity: 1; }
    100% { opacity: 1; transform: translate(-110%, 90%) scale(0.8) rotate(170deg);}
  }
  .animate-LDanS4 {
    animation: animate-LDanS4 3.5s ease-in-out forwards;
  }
  @keyframes animate-LDanS5 {
    0%   { opacity: 0; transform: translate(75%, -350%) scale(0.2);}
    30%  { opacity: 0.2; }
    65%  { opacity: 0.5; }
    100% { opacity: 1; transform: translate(480%, -20%) scale(1.2);}
  }
  .animate-LDanS5 {
    animation: animate-LDanS5 3.5s ease-in-out forwards;
  }
}

/* Para pantallas medianas (aproximadamente entre 721px y 991px de ancho) */
@media only screen and (min-width: 720px) {
  .L-dandelions {
    width: 180px; /* Ligeramente más grande que en pantallas pequeñas */
  }
  @keyframes animate-LDanB {
    0%   { opacity: 0; transform: translate(0%, 40%) scale(2) rotate(-10deg);}
    30%  { opacity: 0; }
    65%  { opacity: 0; }
    100% { opacity: 1; transform: translate(75%, 100%) scale(1.5) rotate(40deg);}
  }
  .animate-LDanB {
    animation: animate-LDanB 3.5s ease-in-out forwards;
  }

  @keyframes animate-LDanB2 {
    0%   { opacity: 0; transform: translate(72%, 40%) scale(2.5) rotate(10deg);}
    30%  { opacity: 0; }
    65%  { opacity: 0; }
    100% { opacity: 1; transform: translate(115%, 50%) scale(2.5) rotate(-20deg);}
  }
  .animate-LDanB2 {
    animation: animate-LDanB2 3.5s ease-in-out forwards;
  }

  @keyframes animate-LDanS {
    0%   { opacity: 0; transform: translate(0%, -100%) scale(0.1) rotate(-90deg);}
    30%  { opacity: 1; }
    65%  { opacity: 1; }
    100% { opacity: 1; transform: translate(70%, 110%) scale(0.5) rotate(40deg);}
  }
  .animate-LDanS {
    animation: animate-LDanS 3.5s ease-in-out forwards;
  }

  @keyframes animate-LDanS2 {
    0%   { opacity: 0; transform: translate(0%, -100%) scale(0.1) rotate(-90deg);}
    30%  { opacity: 1; }
    65%  { opacity: 1; }
    100% { opacity: 1; transform: translate(20%, 85%) scale(0.7) rotate(10deg);}
  }
  .animate-LDanS2 {
    animation: animate-LDanS2 3.5s ease-in-out forwards;
  }


  @keyframes animate-LDanS3 {
    0%   { opacity: 0; transform: translate(260%, -400%) scale(0.1) rotate(-90deg);}
    30%  { opacity: 1; }
    65%  { opacity: 1; }
    100% { opacity: 1; transform: translate(260%, 20%) scale(0.7) rotate(60deg);}
  }
  .animate-LDanS3 {
    animation: animate-LDanS3 3.5s ease-in-out forwards;
  }

  @keyframes animate-LDanS4 {
    0%   { opacity: 0; transform: translate(110%, -400%) scale(0.1) rotate(-90deg);}
    30%  { opacity: 1; }
    65%  { opacity: 1; }
    100% { opacity: 1; transform: translate(110%, 130%) scale(0.7) rotate(180deg);}
  }
  .animate-LDanS4 {
    animation: animate-LDanS4 3.5s ease-in-out forwards;
  }

  @keyframes animate-LDanS5 {
    0%   { opacity: 0; transform: translate(80%, -400%) scale(0.2);}
    30%  { opacity: 0.2; }
    65%  { opacity: 0.5; }
    100% { opacity: 1; transform: translate(90%, -70%) scale(1.2);}
  }
  .animate-LDanS5 {
    animation: animate-LDanS5 3.5s ease-in-out forwards;
  }
}

/* Para pantallas grandes (más de 861px de ancho) */
@media only screen and (min-width: 861px) {
  .L-dandelions {
    width: 200px; /* Aumenta el tamaño para pantallas más grandes */
  }
  @keyframes animate-LDanB {
    0%   { opacity: 0; transform: translate(-5%, 35%) scale(2.1) rotate(-12deg);}
    30%  { opacity: 0; }
    65%  { opacity: 0; }
    100% { opacity: 1; transform: translate(80%, 125%) scale(1.6) rotate(42deg);}
  }
  .animate-LDanB {
    animation: animate-LDanB 3.5s ease-in-out forwards;
  }

  @keyframes animate-LDanB2 {
    0%   { opacity: 0; transform: translate(65%, 35%) scale(2.6) rotate(8deg);}
    30%  { opacity: 0; }
    65%  { opacity: 0; }
    100% { opacity: 1; transform: translate(140%, 67%) scale(2.9) rotate(-27deg);}
  }
  .animate-LDanB2 {
    animation: animate-LDanB2 3.5s ease-in-out forwards;
  }
  @keyframes animate-LDanS {
    0%   { opacity: 0; transform: translate(-5%, -110%) scale(0.09) rotate(-95deg);}
    30%  { opacity: 1; }
    65%  { opacity: 1; }
    100% { opacity: 1; transform: translate(95%, 120%) scale(0.48) rotate(38deg);}
  }
  .animate-LDanS {
    animation: animate-LDanS 3.5s ease-in-out forwards;
  }
  @keyframes animate-LDanS2 {
    0%   { opacity: 0; transform: translate(-5%, -110%) scale(0.09) rotate(-95deg);}
    30%  { opacity: 1; }
    65%  { opacity: 1; }
    100% { opacity: 1; transform: translate(30%, 80%) scale(0.68) rotate(12deg);}
  }
  .animate-LDanS2 {
    animation: animate-LDanS2 3.5s ease-in-out forwards;
  }

  @keyframes animate-LDanS3 {
    0%   { opacity: 0; transform: translate(270%, -425%) scale(0.09) rotate(-95deg);}
    30%  { opacity: 1; }
    65%  { opacity: 1; }
    100% { opacity: 1; transform: translate(280%, 72%) scale(0.68) rotate(58deg);}
  }
  .animate-LDanS3 {
    animation: animate-LDanS3 3.5s ease-in-out forwards;
  }
  @keyframes animate-LDanS4 {
    0%   { opacity: 0; transform: translate(95%, -425%) scale(0.09) rotate(-95deg);}
    30%  { opacity: 1; }
    65%  { opacity: 1; }
    100% { opacity: 1; transform: translate(145%, 145%) scale(0.68) rotate(178deg);}
  }
  .animate-LDanS4 {
    animation: animate-LDanS4 3.5s ease-in-out forwards;
  }
  @keyframes animate-LDanS5 {
    0%   { opacity: 0; transform: translate(72%, -425%) scale(0.19);}
    30%  { opacity: 0.2; }
    65%  { opacity: 0.5; }
    100% { opacity: 1; transform: translate(152%, -52%) scale(1.08);}
  }
  .animate-LDanS5 {
    animation: animate-LDanS5 3.5s ease-in-out forwards;
  }
}

/* Para pantallas extra grandes (más de 1200px de ancho) - Puedes ajustar aún más si es necesario */
@media only screen and (min-width: 1024px) {
  .L-dandelions {
    width: 240px; /* Aumenta aún más para pantallas muy grandes */
  }
  /* Ajusta las animaciones si lo consideras necesario para pantallas muy grandes */
  @keyframes animate-LDanB {
    0%   { opacity: 0; transform: translate(-15%, 30%) scale(2.3) rotate(-15deg);}
    30%  { opacity: 0; }
    65%  { opacity: 0; }
    100% { opacity: 1; transform: translate(20%, 60%) scale(1) rotate(45deg);}
  }
  .animate-LDanB {
    animation: animate-LDanB 3.5s ease-in-out forwards;
  }
  @keyframes animate-LDanB2 {
    0%   { opacity: 0; transform: translate(60%, -30%) scale(2.8) rotate(5deg);}
    30%  { opacity: 0; }
    65%  { opacity: 0; }
    100% { opacity: 1; transform: translate(60%, 30%) scale(2) rotate(-25deg);}
  }
  .animate-LDanB2 {
    animation: animate-LDanB2 3.5s ease-in-out forwards;
  }
  @keyframes animate-LDanS {
    0%   { opacity: 0; transform: translate(220%, -120%) scale(0.08) rotate(-100deg);}
    30%  { opacity: 1; }
    65%  { opacity: 1; }
    100% { opacity: 1; transform: translate(220%, 30%) scale(0.3) rotate(40deg);}
  }
  .animate-LDanS {
    animation: animate-LDanS 3.5s ease-in-out forwards;
  }
  @keyframes animate-LDanS2 {
    0%   { opacity: 0; transform: translate(-10%, -120%) scale(0.08) rotate(-100deg);}
    30%  { opacity: 1; }
    65%  { opacity: 1; }
    100% { opacity: 1; transform: translate(150%, 40%) scale(0.75) rotate(15deg);}
  }
  .animate-LDanS2 {
    animation: animate-LDanS2 3.5s ease-in-out forwards;
  }
  @keyframes animate-LDanS3 {
    0%   { opacity: 0; transform: translate(120%, -450%) scale(0.08) rotate(-100deg);}
    30%  { opacity: 1; }
    65%  { opacity: 1; }
    100% { opacity: 1; transform: translate(120%, 30%) scale(0.55) rotate(70deg);}
  }
  .animate-LDanS3 {
    animation: animate-LDanS3 3.5s ease-in-out forwards;
  }
  @keyframes animate-LDanS4 {
    0%   { opacity: 0; transform: translate(80%, -450%) scale(0.08) rotate(-100deg);}
    30%  { opacity: 1; }
    65%  { opacity: 1; }
    100% { opacity: 1; transform: translate(-80%, 0%) scale(1.2) rotate(160deg);}
  }
  .animate-LDanS4 {
    animation: animate-LDanS4 3.5s ease-in-out forwards;
  }
  @keyframes animate-LDanS5 {
    0%   { opacity: 0; transform: translate(70%, -450%) scale(0.17);}
    30%  { opacity: 0.2; }
    65%  { opacity: 0.5; }
    100% { opacity: 1; transform: translate(-70%, -5%) scale(1);}
  }
  .animate-LDanS5 {
    animation: animate-LDanS5 3.5s ease-in-out forwards;
  }
}
  </style>
