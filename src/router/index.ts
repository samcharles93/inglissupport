import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// Import Routes
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog/Blog.vue'),
  },
  // {
  //   path: '/blog/create-post',
  //   name: 'CreatePost',
  //   component: CreatePost
  // },
  // {
  //   path: '/blog/edit-post',
  //   name: 'EditPost',
  //   component: EditPost
  // },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   component: Dashboard
  // },
  // {
  //   path: '/staff-login',
  //   name: 'StaffLogin',
  //   component: StaffLogin
  // },
  // {
  //   path: '/staff-signup',
  //   name: 'StaffSignup',
  //   component: StaffSignup
  // },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${ process.env.VUE_APP_TITLE } - ${ to.name?.toString() }`
  next()
})

export default router
