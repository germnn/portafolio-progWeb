import { createRouter, createWebHistory } from 'vue-router'
import UsuarioRandomView from '../views/UsuarioRandomView.vue'
import ListaUsuarioView from '../views/ListaUsuariosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'usuarioRandom',
      component: UsuarioRandomView
    },
    {
      path: '/ListaUsuarios',
      name: 'listaUsuarios',
      component: ListaUsuarioView
    }
  ]
})

export default router