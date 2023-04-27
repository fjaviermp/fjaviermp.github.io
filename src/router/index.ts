import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Header from '../components/Header.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    /*
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/Header.vue')
    }
    */
  ]
})

export default router