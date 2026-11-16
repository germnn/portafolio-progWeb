import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '@/views/InicioView.vue'
import DetalleView from '@/views/DetalleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Inicio",
      component: InicioView 
    },
    {
      path: "/detalle",
      name: "Detalle",
      component: DetalleView
    }
  ],
})

export default router
