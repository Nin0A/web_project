import { createRouter, createWebHistory } from 'vue-router'
import MapPage from '../views/MapPage.vue'
import App from '../App.vue'

const routes = [
  { path: '/', component: App },
  { path: '/map', component: MapPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router