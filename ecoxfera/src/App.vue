<template>
  <div class="landing-container" @click="onHeaderClick">
    <img
      class="header"
      src="@/assets/Header mobile.png"
      alt="Ecoxfera Header"
    />
    <!-- 1) Botón hamburguesa en esquina izquierda -->
    <button
      class="hamburger"
      :class="{ 'is-active': menuOpen }"
      @click="toggleMenu"
      aria-label="Abrir menú"
    >
      <span class="bar bar1"></span>
      <span class="bar bar2"></span>
      <span class="bar bar3"></span>
    </button>

    <!-- 2) Menú lateral (drawer) desde la izquierda -->
    <nav class="menu-drawer" :class="{ open: menuOpen }">
      <div class="drawer-header">
        <img class="drawer-logo" src="@/assets/Logo.png" alt="Ecoxfera Logo" />
      </div>
      <ul class="drawer-list">
        <li>

          <router-link to="/Ecoxfera" @click="toggleMenu">Inicio</router-link>
        </li>
        <li>
          <router-link to="/Ecoxfera/conoce-sus-plantas" @click="toggleMenu">
            Conoce tus plantas
          </router-link>
        </li>
        <li>
          <router-link to="/Ecoxfera/descripcion-proyecto" @click="toggleMenu">
            Descripción del proyecto
          </router-link>
        </li>
        <li>
          <router-link to="/Ecoxfera/maqueta-ensamble" @click="toggleMenu">
            Maqueta y ensamble
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- 3) Aquí se inyecta la vista actual (HomePage, ConocePlantas, etc.) -->
    <main class="main-wrapper">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
/* 0) Reset mínimo */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.landing-container {
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  cursor: pointer;
  background: url('@/assets/OIP.jpg') center/cover no-repeat fixed;
  position: relative;
}

.header {
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  object-fit: fill;
  z-index: 10;
}


/* 1) Botón hamburguesa */
.hamburger {
  position: fixed;
  top: 1.5rem;
  left: 1.5rem;
  width: 2.6rem;
  height: 2.6rem;
  background-color: #fff;
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0.4rem;
  cursor: pointer;
  z-index: 50;
}

.hamburger .bar {
  display: block;
  width: 100%;
  height: 0.2rem;
  background-color: #000;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.hamburger.is-active .bar1 {
  transform: translateY(6px) rotate(45deg);
}
.hamburger.is-active .bar2 {
  opacity: 0;
}
.hamburger.is-active .bar3 {
  transform: translateY(-6px) rotate(-45deg);
}

/* 2) Drawer/menu lateral */
.menu-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  transform: translateX(-100%);
  transition: transform 0.35s ease;
  z-index: 45;
  display: flex;
  flex-direction: column;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  overflow: hidden;
}
.menu-drawer.open {
  transform: translateX(0);
}

.drawer-header {
  margin-top: 3rem;
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eee;
  background-color: #fafafa;
}
.drawer-logo {
  max-width: 180px;
  height: auto;
}

.drawer-list {
  list-style: none;
  padding: 1rem 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.drawer-list a {
  display: block;            /* Hace que cada enlace sea un bloque completo */
  width: 100%;               /* Asegura que ocupe todo el ancho del menú */
  padding: 0.5rem 1.2rem;     
  font-family: 'Georgia', serif;
  font-size: 1.8rem;
  line-height: 1.4;          /* Espacio vertical entre líneas */
  word-break: break-word;    /* Permite salto amigable */
  white-space: normal;       /* Para que pueda envolver texto en varias líneas */
  color: #333;
  text-decoration: none;
}
.drawer-list a:hover {
  background-color: #f0f0f0;
  color: #008000;
}


/* 3) Espacio donde cada “vista” renderizará su contenido */
.main-wrapper {
  margin-top: 0; 
  padding-top: 80px;
  min-height: calc(100vh-80px);
}
</style>
