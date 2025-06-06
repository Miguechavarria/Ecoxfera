// src/main.ts
import './assets/main.css'                     // Tus estilos globales (limpia aquí si tenías reglas que tapaban todo)
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'                  // Importa el router (index.js)

import AOS from 'aos'
import 'aos/dist/aos.css'                      // Estilos de AOS para animaciones

import '@fortawesome/fontawesome-free/css/all.css' // FontAwesome para íconos

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')

// Inicializar AOS justo después de montar la app
app.config.globalProperties.$nextTick(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-out-quart',
    once: true
  })
})
