import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/Login.vue'
import VueCookies from 'vue-cookies'


const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/board',
    name: 'board',
    component: () => import(/* webpackChunkName: "board" */ '../views/Board.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && to.name !== 'register' && VueCookies.get('accessToken') === null) {
    // If the user is not logged in and is trying to access a protected route,
    // redirect them to the login page
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
