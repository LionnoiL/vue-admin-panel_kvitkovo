import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView'

const routes = [
  {
    path: '/',
    name: 'about',
    component: AboutView
  },
  {
    path: '/colors',
    name: 'colors',
    component: () => import('../views/ColorsPage.vue')
  },
  {
    path: '/sizes',
    name: 'sizes',
    component: () => import('../views/SizesPage.vue')
  },
  {
    path: '/types',
    name: 'types',
    component: () => import('../views/TypesPage.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
