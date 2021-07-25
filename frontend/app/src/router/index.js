import Vue from 'vue'
import VueRouter from 'vue-router'
import AllGifs from '../views/AllGifs.vue'
import PostGif from '../views/PostGif.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AllGifs',
    component: AllGifs
  },
  {
    path: '/postgif',
    name: 'PostGif',
    component: PostGif
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
]

const router = new VueRouter({
  routes
})

export default router
