import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from '../views/JobsView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/experiencia',
      name: 'jobs',
      component: JobsView
    },
    {
      path: '/proyectos',
      name: 'projects',
      component: ProjectsView
    },
  ]
})

export default router
