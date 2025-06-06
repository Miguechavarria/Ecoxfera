// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Importa aquí tus vistas (asegúrate que los nombres coincidan exactamente)
import HomePage            from '@/views/HomePage.vue'
import ConocePlantas       from '@/views/ConocePlantas.vue'
import DescripcionProyecto from '@/views/DescripcionProyecto.vue'
import Maqueta             from '@/views/Maqueta.vue'

// Definimos claramente una ruta “/” que apunte a HomePage (o redirija a /Ecoxfera)
const routes = [
  {
    path: '/',
    redirect: '/Ecoxfera' // Redirigimos “/” a “/Ecoxfera”
  },
  {
    path: '/Ecoxfera',
    name: 'home',
    component: HomePage
  },
  {
    path: '/Ecoxfera/conoce-sus-plantas',
    name: 'conoce-sus-plantas',
    component: ConocePlantas
  },
  {
    path: '/Ecoxfera/descripcion-proyecto',
    name: 'descripcion-proyecto',
    component: DescripcionProyecto
  },
  {
    path: '/Ecoxfera/maqueta',
    name: 'maqueta',
    component: Maqueta
  },
  // Cualquier otra URL no definida, redirigir a /Ecoxfera
  {
    path: '/:pathMatch(.*)*',
    redirect: '/Ecoxfera'
  }
]

const router = createRouter({
  history: createWebHistory(), 
  routes
})

export default router
