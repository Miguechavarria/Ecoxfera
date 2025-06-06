<!-- src/views/ConocePlantas.vue -->
<template>
  <div class="conoce-container">
    <!-- 1) Menú horizontal de nombres de planta, centrado -->
    <div class="plant-tabs">
      <button
        v-for="(plant, idx) in plants"
        :key="plant.name"
        :class="['plant-tab', { active: idx === selectedIndex }]"
        @click="selectPlant(idx)"
      >
        {{ plant.name }}
      </button>
    </div>

    <!-- 2) Título y nombre científico de la planta seleccionada -->
    <div class="plant-header">
      <h2 class="plant-name">{{ currentPlant.name }}</h2>
      <p class="plant-latin">({{ currentPlant.latin }})</p>
    </div>

    <!-- 3) Acordeones de secciones -->
    <div class="sections">
      <div
        v-for="(section, sIdx) in currentPlant.sections"
        :key="section.title"
        class="section-item"
      >
        <div class="section-title" @click="toggleSection(sIdx)">
          <span>{{ section.title }}</span>
          <span class="arrow" :class="{ open: isOpen[sIdx] }">▶</span>
        </div>
        <div v-if="isOpen[sIdx]" class="section-content">
          <p>{{ section.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'

/** 1) Definición del arreglo de plantas */
const plants = [
  {
    name: 'Albahaca',
    latin: 'Ocimum basilicum',
    sections: [
      {
        title: 'Historia',
        content:
          'La albahaca es una planta aromática originaria de Asia y África, utilizada desde la antigüedad en la cocina y la medicina tradicional.'
      },
      {
        title: 'Propiedades medicinales',
        content:
          'La albahaca tiene propiedades antiinflamatorias, antioxidantes y antimicrobianas. Se utiliza para aliviar problemas digestivos y respiratorios.'
      },
      {
        title: 'Cuidados',
        content:
          'Prefiere un suelo bien drenado y luz solar directa. Riega moderadamente y evita el exceso de humedad.'
      },
      {
        title: 'Datos curiosos',
        content:
          'La albahaca es considerada sagrada en algunas culturas, como la hindú, y se utiliza en rituales religiosos.'
      }
    ]
  },
  {
    name: 'Menta',
    latin: 'Mentha',
    sections: [
      {
        title: 'Historia',
        content:
          'La menta es una planta aromática conocida desde la antigüedad, utilizada en la cocina y la medicina por sus propiedades refrescantes.'
      },
      {
        title: 'Propiedades medicinales',
        content:
          'La menta es conocida por sus propiedades digestivas, analgésicas y antiespasmódicas. Se usa para aliviar dolores de cabeza y problemas gastrointestinales.'
      },
      {
        title: 'Cuidados',
        content:
          'Prefiere suelos húmedos y bien drenados. Crece mejor a la sombra parcial y requiere riego regular.'
      },
      {
        title: 'Datos curiosos',
        content:
          'La menta se ha utilizado en la antigüedad para embalsamar cuerpos y como símbolo de hospitalidad.'
      }
    ]
  },
  {
    name: 'Ruda',
    latin: 'Ruta graveolens',
    sections: [
      {
        title: 'Historia',
        content:
          'La ruda es una planta con una larga historia de uso en la medicina tradicional y en rituales de protección en diversas culturas.'
      },
      {
        title: 'Propiedades medicinales',
        content:
          'La ruda tiene propiedades antiespasmódicas, antiinflamatorias y digestivas. Se utiliza para aliviar dolores menstruales y problemas gastrointestinales.'
      },
      {
        title: 'Cuidados',
        content:
          'Prefiere suelos bien drenados y luz solar directa. Es resistente a la sequía, pero requiere riego moderado.'
      },
      {
        title: 'Datos curiosos',
        content:
          'En la antigüedad, la ruda se consideraba una planta mágica y se usaba para proteger contra el mal de ojo.'
      }
    ]
  },
  {
    name: 'Lavanda',
    latin: 'Lavandula',
    sections: [
      {
        title: 'Historia',
        content:
          'La lavanda es una planta aromática originaria de la región mediterránea, utilizada desde la antigüedad en la perfumería y la medicina.'
      },
      {
        title: 'Propiedades medicinales',
        content:
          'La lavanda tiene propiedades relajantes, antidepresivas y antiinflamatorias. Se utiliza para aliviar el estrés, la ansiedad y problemas de sueño.'
      },
      {
        title: 'Cuidados',
        content:
          'Prefiere suelos bien drenados y luz solar directa. Es resistente a la sequía, pero requiere riego moderado.'
      },
      {
        title: 'Datos curiosos',
        content:
          'La lavanda se ha utilizado en la antigüedad para embalsamar cuerpos y como símbolo de pureza y limpieza.'
      }
    ]
  }
]

/** 2) Índice de planta seleccionada */
const selectedIndex = ref(0)

/** 3) Computed que devuelve la planta activa */
const currentPlant = computed(() => plants[selectedIndex.value])

/** 4) Estado reactivo para saber qué acordeones están abiertos */
const isOpen = reactive([])
plants[0].sections.forEach(() => isOpen.push(false))

/** 5) Cambiar de planta y resetear acordeones */
function selectPlant(idx) {
  isOpen.length = 0
  plants[idx].sections.forEach(() => isOpen.push(false))
  selectedIndex.value = idx
}

/** 6) Alternar abierto/cerrado de cada sección */
function toggleSection(sIdx) {
  isOpen[sIdx] = !isOpen[sIdx]
}
</script>

<style scoped>
.conoce-container {
  padding: 1.5rem;
  font-family: 'Georgia', serif;
  color: #333;
}

/* --------------------------------------------------
   1) Menú horizontal de plantas (tabs), centrado
--------------------------------------------------*/
.plant-tabs {
  display: flex;
  justify-content: center;
  overflow-x: auto;
  gap: 1rem;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
}
.plant-tabs::-webkit-scrollbar {
  height: 6px;
}
.plant-tabs::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}
.plant-tabs::-webkit-scrollbar-track {
  background: transparent;
}

.plant-tab {
  flex: 0 0 auto;
  padding: 0.6rem 1.5rem;
  border-radius: 999px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  font-weight: bold;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  white-space: nowrap;
}
.plant-tab.active {
  background-color: #5c8a32;
  color: #fff;
  border-color: #5c8a32;
}

/* --------------------------------------------------
   2) Cabecera de la planta seleccionada
--------------------------------------------------*/
.plant-header {
  text-align: center;
  margin-bottom: 2.6rem;
}
.plant-name {
  font-size: 5rem;
  margin-bottom: 0.3rem;
  color: #555;
}
.plant-latin {
  font-size: 3rem;
  font-style: italic;
  color: #777;
}

/* --------------------------------------------------
   3) Acordeones de secciones
--------------------------------------------------*/
.sections {
  max-width: 800px;
  margin: 0 auto;
}

.section-item {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;
}

.section-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  padding: 0.8rem 0;
  font-size: 2rem;
  color: #555;
}

.section-title .arrow {
  display: inline-block;
  transition: transform 0.2s ease;
  margin-left: 0.5rem;
  font-size: 1.2rem;
}
.section-title .arrow.open {
  transform: rotate(90deg);
}

.section-content {
  padding: 1rem 0.5rem;
  font-size: 1.7rem;
  color: #444;
  line-height: 1.6;
}
</style>
