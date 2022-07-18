import Vue from 'vue'
import VueRouter from 'vue-router'
import BlogComponent from '../components/BlogComponent.vue';
import LandingPage from '../components/LandingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/blog',
    name: 'BlogComponent',
    component: BlogComponent,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router








