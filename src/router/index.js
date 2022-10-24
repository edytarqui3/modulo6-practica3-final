import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/activos',
    name: 'activos',
    component: () => import(/* webpackChunkName: "activos" */ '../views/ActivosView.vue')
  },
  {
    path: '/activos/:id/editar',
    name: 'editarActivos',
    component: () => import(/* webpackChunkName: "editarActivos" */ '../views/EditarActivosView.vue')
  },
  {
    path: '/areas',
    name: 'areas',
    component: () => import(/* webpackChunkName: "areas" */ '../views/AreasView.vue')
  },
  {
    path: '/areas/:id/editar',
    name: 'editarAreas',
    component: () => import(/* webpackChunkName: "editarAreas" */ '../views/EditarAreasView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
