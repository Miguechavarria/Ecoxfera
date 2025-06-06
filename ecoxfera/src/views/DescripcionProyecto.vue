<!-- src/views/DescripcionProyecto.vue -->
<template>
  <div class="descripcion-proyecto-final">
    <!-- 1. Título principal -->
    <h2 class="project-title-final fade-element" style="--delay: 0.1s">
      Descripción del proyecto
    </h2>

    <!-- 2. Párrafo lead -->
    <p class="project-lead-final fade-element" style="--delay: 0.3s">
      Un jardín que respira con la ciudad. <strong>ECOXFERA</strong> es una instalación
      inmersiva donde la naturaleza y la tecnología dialogan en tiempo real. Sensores,
      realidad aumentada y proyecciones convierten el entorno en un organismo vivo
      que reacciona al paso, al gesto, al cuidado. Cada visitante se transforma en
      coautor de una experiencia sensorial y poética que revela la huella humana
      en el paisaje.
    </p>

    <!-- 3. Bloque: El origen de Ecoxfera -->
    <div class="project-block-final fade-element" style="--delay: 0.5s">
      <h3 class="project-subtitle-final">El origen de Ecoxfera</h3>
      <p>
        <span class="dropcap-final">E</span>COXFERA brotó de una pregunta simple pero urgente:
        ¿Cómo volver a sentir la naturaleza dentro de la ciudad? No fue una idea
        repentina, sino un proceso de observación: del concreto que crece más rápido
        que los árboles, del silencio con el que ignoramos los ciclos naturales. Nació
        del deseo de transformar el espacio público en un santuario donde lo orgánico
        y lo digital se entrelacen para sembrar conciencia, emoción y futuro.
      </p>
    </div>

    <!-- 4. Bloque: ¿Cómo funciona? -->
    <div class="project-block-final fade-element" style="--delay: 0.7s">
      <h3 class="project-subtitle-final">¿Cómo funciona?</h3>
      <ul class="project-features-final">
        <li class="fade-element" style="--delay: 0.9s">
          <i class="fas fa-tachometer-alt icon-sensor"></i>
          <p>Sensores ambientales que miden temperatura, humedad y calidad del aire.</p>
        </li>
        <li class="fade-element" style="--delay: 1.1s">
          <i class="fas fa-vr-cardboard icon-ar"></i>
          <p>Experiencias de realidad aumentada que muestran capas invisibles de la ciudad.</p>
        </li>
        <li class="fade-element" style="--delay: 1.3s">
          <i class="fas fa-video icon-projection"></i>
          <p>Proyecciones interactivas que reaccionan al movimiento de los visitantes.</p>
        </li>
      </ul>
    </div>

    <!-- 5. Botón CTA -->
    <div class="cta-container-final fade-element" style="--delay: 1.5s">
      <button class="btn-cta-final">Ver maqueta y ensamble</button>
    </div>

    <!-- 6. Sección Creadores del proyecto -->
    <section class="project-creators-final fade-element" style="--delay: 1.7s">
      <h2 class="creators-title-final">Creadores del proyecto</h2>
      <div class="creators-grid-final">
        <div
          v-for="(creator, index) in creators"
          :key="index"
          class="creator-card-final fade-element"
          :style="`--delay: ${1.9 + index * 0.2}s`"
        >
          <div class="creator-photo-final">
                 <img :src="creator.photo" :alt="creator.name" /> 
          </div>
          <div class="creator-info-final">
            <p class="creator-name-final">{{ creator.name }}</p>
            <p class="creator-role-final">{{ creator.role }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import miguel from '@/assets/Miguel.jpg'
import duque from '@/assets/Duque.jpg'
import daniel from '@/assets/Daniel.jpg'
import gali from '@/assets/Gali.jpg'

const creators = ref([
  { name: 'Miguel Echavarria', role: 'Programador y Cabezera', photo: miguel },
  { name: 'Santiago Duque', role: 'Animador y Diseñador', photo: duque },
  { name: 'Daniel Olmos', role: 'Hardware y Ensamble', photo: daniel },
  { name: 'Maria Paula Galindo', role: 'Diseño Ux/Ui', photo: gali }
])
</script>

<style scoped lang="scss">
@use "sass:color";

/* ===== Variables generales ===== */
$color-primary: #333333;   /* Texto oscuro */
$color-accent: #4f7020;    /* Verde oscuro */
$bg-white: #ffffff;        /* Blanco puro */
$font-heading: 'Georgia', serif;
$font-body: 'Helvetica Neue', Arial, sans-serif;

/* ===== Animación “fade-in” general ===== */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-element {
  opacity: 0;
  animation: fadeIn 0.6s ease-out forwards;
  animation-delay: var(--delay);
}

/* ===== Contenedor principal ===== */
.descripcion-proyecto-final {
  color: $color-primary;         /* Texto oscuro */
  padding: 2rem 1rem;
}

/* ===== 1) Título principal ===== */
.project-title-final {
  font-family: $font-heading;
  font-size: 2rem;
  color: $color-primary;
  text-align: center;
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: $color-accent;
    margin: 0.5rem auto 0;
    border-radius: 2px;
  }
}

/* ===== 2) Párrafo lead ===== */
.project-lead-final {
  font-family: $font-body;
  font-size: 1rem;
  color: $color-primary;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  text-align: justify;

  strong {
    color: $color-accent;
  }
}
.dropcap-final {
  float: left;
  font-size: 2.5rem;
  line-height: 1;
  margin-right: 0.5rem;
  font-family: $font-heading;
  color: $color-accent;
}

/* ===== 3) Bloques con subtítulos y párrafos ===== */
.project-block-final {
  max-width: 600px;
  margin: 0 auto 2rem;

  .project-subtitle-final {
    font-family: $font-heading;
    font-size: 1.5rem;
    color: $color-primary;
    margin-bottom: 0.75rem;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: -1.2rem;
      top: 0.3rem;
      width: 3px;
      height: 24px;
      background-color: $color-accent;
      border-radius: 2px;
    }
  }

  p {
    font-family: $font-body;
    font-size: 0.95rem;
    color: $color-primary;
    line-height: 1.6;
    text-align: justify;
  }
}

.project-features-final {
  list-style: none;
  padding-left: 0;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;

    i[class^="fa-"],
    i[class*="fa-"] {
      font-size: 1.3rem;
      color: $color-accent;
      margin-top: 0.2rem;
    }

    p {
      margin: 0;
      font-family: $font-body;
      font-size: 0.9rem;
      color: $color-primary;
      line-height: 1.5;
    }
  }
}

/* ===== 5) Botón CTA ===== */
.cta-container-final {
  text-align: center;
  margin: 1.5rem 0 2.5rem;

  .btn-cta-final {
    background-color: $color-accent;
    color: #fff;
    border: none;
    font-family: $font-heading;
    font-size: 0.95rem;
    padding: 0.6rem 1.2rem;
    border-radius: 50px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: color.adjust($color-accent, $lightness: -10%);
    }
  }
}

/* ===== 6) Sección “Creadores del proyecto” ===== */
.project-creators-final {
  background-color: #f9f9f4;    /* Fondo crema suave */
  padding: 2rem 1rem;
  border-radius: 0.5rem;
  margin: 0 auto;
  max-width: 700px;

  @media (min-width: 600px) {
    padding: 2.5rem 1.5rem;
  }

  .creators-title-final {
    font-family: $font-heading;
    font-size: 1.8rem;
    color: $color-primary;
    text-align: center;
    margin-bottom: 1.5rem;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 40px;
      height: 3px;
      background-color: $color-accent;
      margin: 0.5rem auto 0;
      border-radius: 2px;
    }
  }

  .creators-grid-final {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }

    .creator-card-final {
      background-color: $bg-white;
      border-radius: 0.5rem;
      padding: 1rem;
      text-align: center;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s, box-shadow 0.3s;

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
      }

      .creator-photo-final {
        width: 80px;
        height: 80px;
        margin: 0 auto 0.8rem;
        border-radius: 50%;
        background-color: #ddd; /* Placeholder gris */
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .creator-info-final {
        .creator-name-final {
          font-family: $font-heading;
          font-size: 1rem;
          color: $color-primary;
          margin-bottom: 0.3rem;
        }
        .creator-role-final {
          font-family: $font-body;
          font-size: 0.85rem;
          color: color.adjust($color-primary, $lightness: -20%);
        }
      }
    }
  }
}
</style>
