<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav >
      <div >
        <RouterLink to="/ciudad" >Ciudades</RouterLink>
        <RouterLink to="/atleta" >Atletas</RouterLink>
      </div>
    </nav>
  </header>

  <main class="app-main">
    <RouterView />
  </main>
</template>

<style scoped>
/* ===== Header profesional ===== */
.app-header {
  background: linear-gradient(145deg, #2e7d32, #81c784); /* verde oscuro → verde suave */
  color: white;
  text-align: center;
  padding: 2rem 1rem;
  border-bottom: 3px solid #1b5e20;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 0 0 16px 16px;
}

.app-header h1 {
  margin: 0;
  font-weight: 700;
  font-size: 2rem;
  letter-spacing: 0.5px;
  font-family: 'Segoe UI', sans-serif;
}

/* ===== Navbar profesional ===== */
.custom-navbar {
  background-color: #e8f5e9; /* verde muy claro */
  display: flex;
  justify-content: center;
  padding: 0.75rem 0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  border-radius: 0 0 12px 12px;
}

.custom-container {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.custom-link {
  color: #2e7d32;
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: none;
  position: relative;
  padding: 0.25rem 0.5rem;
  transition: all 0.3s ease;
}

.custom-link::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  bottom: -3px;
  left: 0;
  background-color: #2e7d32;
  transition: all 0.3s ease;
}

.custom-link:hover {
  color: #1b5e20;
}

.custom-link:hover::after {
  width: 100%;
}

/* ===== Main ===== */
.app-main {
  min-height: 80vh;
  background-color: #c2cead; /* fondo muy suave */
  padding: 2rem 1rem;
}

/* ===== Responsive ===== */
@media (max-width: 600px) {
  .custom-container {
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }

  .app-header h1 {
    font-size: 1.5rem;
  }
}
</style>
