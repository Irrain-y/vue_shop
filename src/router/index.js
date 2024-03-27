import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../components/LoginView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginView }
  ]
})

export default router
