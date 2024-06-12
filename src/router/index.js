import { createRouter, createWebHistory } from 'vue-router'
import AllHeroes from '../views/Pages/AllHeroesView.vue'
import Rizal from '../views/Pages/RizalView.vue'
import Home from '../views/Pages/HomeView.vue'
import About from '../views/Pages/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/allHereos',
      name: 'all',
      component: AllHeroes
    },
    {
      path: '/JoseRizal',
      name: 'jose_rizal',
      component: Rizal
    }
  ]
})

export default router
