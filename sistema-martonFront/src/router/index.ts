import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ciudad',
      name: 'ciudad',
      component: () => import('../views/CiudadForm.vue'),
    },
    {
      path: '/atleta',
      name: 'atleta',
      component: () => import('../views/AtletaForm.vue'),
    },
    {
    path: '/',
    name: '/app.vue',
    component: () => import('../App.vue'),
    },
  ],
})

export default router
