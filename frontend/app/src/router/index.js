import Vue from 'vue';
import VueRouter from 'vue-router';
import AllGifs from '../views/AllGifs.vue';
import PostGif from '../views/PostGif.vue';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import Admin from '../views/Admin.vue';
import AdminComment from '../views/AdminComment.vue';
import AdminUser from '../views/AdminUser.vue';
import Gif from '../views/Gif.vue';
import ModifCom from '../views/ModifCom.vue';
import ModifGif from '../views/ModifGif.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/allgifs'
  },
  {
    path: '/allgifs',
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
  },
  {
    path: '/admin/',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/comment',
    name: 'AdminComment',
    component: AdminComment
  },
  {
    path: '/admin/user',
    name: 'AdminUser',
    component: AdminUser
  },
  {
    path: '/gif/:id',
    name: 'Gif',
    component: Gif
  },
  {
    path: '/com/:id',
    name: 'ModifCom',
    component: ModifCom
  },
  {
    path: '/gif/modif/:id',
    name: 'ModifGif',
    component: ModifGif
  }
]

const router = new VueRouter({
  routes
})

export default router
