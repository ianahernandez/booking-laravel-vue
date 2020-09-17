import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)


const routes = [
    {
      path: '/',
      name: 'home',
      component: () => import("./components/pages/Home.vue")
    },
    {
      path: '/reservations',
      name: 'reservations',
      component: () => import("./components/pages/Reservations.vue")
    },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router