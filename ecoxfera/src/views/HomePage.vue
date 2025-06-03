<!-- src/views/HomePage.vue -->
<template>
  <div class="landing-container" @click="onHeaderClick">
    <!-- 1) Header (para reiniciar animación al hacer clic) -->
    <img
      class="header"
      src="@/assets/Header mobile.png"
      alt="Ecoxfera Header"
    />

    <!-- 2) Animaciones de LogoLetters y Dandeleons -->
    <LogoLetters :animState="animState" />
    <Dandeleons   :animState="animState" />

    <!-- 3) Bloque de descripción diagonal + párrafos + manchas -->
    <section class="description">
      <hr class="top-line" />

      <div class="title-flex">
        <p class="word w1">Un</p>
        <p class="word w2">universo</p>
        <p class="word w3">donde florece</p>
        <p class="word w4">la conciencia</p>
      </div>

      <div class="paragraphs">
        <p>
          En algún rincón del tiempo, donde la naturaleza y la imaginación se
          entrelazan, nace Ecoxfera: un universo sensorial creado para recantar
          nuestra relación con el planeta.
        </p>
        <p>
          Aquí, las plantas no son solo seres vivos, son maestras silenciosas.
          Con cada brote, nos enseñan a esperar; con cada raíz, nos recuerdan la
          importancia de estar conectados. En Ecoxfera, creamos experiencias donde
          el arte, la tecnología y la educación se unen para que niñas, niños,
          jóvenes y adultos descubran que cuidar el medio ambiente puede ser tan
          poético como urgente.
        </p>
        <p>
          Nos inspiran los latidos de la tierra, los susurros del viento y los
          secretos que guardan las hojas. A través de instalaciones interactivas,
          talleres y espacios vivos, invitamos a sentir, explorar y aprender.
          Porque solo cuidamos lo que conocemos, y solo protegemos aquello que amamos.
        </p>
      </div>

      <img
        src="@/assets/logo/mancha_1.svg"
        alt="mancha izquierda"
        class="stain left"
      />
      <img
        src="@/assets/logo/mancha_2.svg"
        alt="mancha derecha"
        class="stain right"
      />
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import LogoLetters from '@/components/Logo/LogoLetters.vue'
import Dandeleons   from '@/components/Logo/Dandeleons.vue'

// 1) Estado para disparar las animaciones
const animState = ref(false)

// 2) Al montar la página, iniciamos animState = true para que arranquen automáticamente
onMounted(() => {
  animState.value = true
})

// 3) Al hacer clic sobre el header, invertimos animState para “remontar” la animación
const onHeaderClick = () => {
  animState.value = !animState.value
}
</script>

<style scoped>
/* ---------- Fondo y Container de la Home ---------- */
.landing-container {
  width: 100%;
  min-height: 100vh;
  overflow: hidden; /* Para que al animar no aparezca scroll prematuro */
  cursor: pointer;
  background: url('@/assets/OIP.jpg') center/cover no-repeat;
  position: relative;
}

/* ---------- Header (para reiniciar la animación) ---------- */
.header {
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  object-fit: fill;
  z-index: 10;
}

/* ---------- Línea negra superior ---------- */
.top-line {
  border: none;
  height: 2px;
  background-color: #000;
  width: 100%;
  margin-bottom: 1.5rem;
}

/* ---------- Sección de descripción ---------- */
.description {
  position: relative;
  max-width: 900px;
  margin: 40px auto; /* Ajusta el margen superior para que no choque con el header */
  padding: 2rem 1rem;
  font-family: 'Georgia', serif;
  color: #333;
  /* No ponemos min-height: deja que el contenido decida el alto */
}

/* 1.1) Contenedor FLEX para las 4 palabras */
.title-flex {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;
}

/* 1.2) Estilos comunes a cada palabra */
.word {
  font-weight: bold;
  color: #555;
  font-size: 2rem;
  position: relative;
  white-space: nowrap;
  margin-bottom: 10px;
}

/* 1.3) Transformaciones para escalonar diagonal */
.w1 {
  transform: translate(280%, 0%);
}
.w2 {
  transform: translate(130%, 20%);
}
.w3 {
  transform: translate(150%, 40%);
}
.w4 {
  transform: translate(270%, 60%);
}

@media (max-width: 600px) {
  .word {
    font-size: 1.5rem;
  }
  .w2 {
    transform: translate(10%, 15%);
  }
  .w3 {
    transform: translate(25%, 30%);
  }
  .w4 {
    transform: translate(40%, 45%);
  }
}

/* 1.5) Párrafos explicativos */
.paragraphs {
  font-size: 1.3rem;
  line-height: 1.6;
  text-align: justify;
  color: #444;
}

.paragraphs p {
  margin-bottom: 1.5rem;
}
.paragraphs p:last-child {
  margin-bottom: 0;
}

/* ---------- Manchas decorativas ---------- */
.stain {
  position: absolute;
  width: 350px;
  opacity: 0.4;
  z-index: 1; 
}

.stain.left {
  bottom: -5%;
  left: -20%;
}

.stain.right {
  bottom: 5%;
  right: -20%;
  transform: scaleX(-1);
}
</style>
