import { createRouter, createWebHistory } from 'vue-router'

// IMPORTA aquí los componentes que serán “páginas”
import HomePage              from '@/views/HomePage.vue'
import ConocePlantas         from '@/views/ConocePlantas.vue'
import DescripcionProyecto   from '@/views/DescripcionProyecto.vue'
import Maqueta               from '@/views/Maqueta.vue'

const routes = [
  {
    path: '/EcoXfera',
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
  // rutas no definidas redirijen al Home:
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),  // Usa history “normal” (sin hash); si quieres hash-style, usa createWebHashHistory()
  routes
})

export default router
