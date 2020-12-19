import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About/About.vue'
import AboutValues from '../views/About/AboutValues.vue'
import AboutServices from '../views/About/AboutServices.vue'
import Blog from '../views/Blog/Blog.vue'
import BlogPost from '../views/Blog/BlogPost.vue'
import CreatePost from '../views/Blog/CreatePost.vue'
import Contact from '../views/Contact.vue'
import PageNotFound from '../views/PageNotFound.vue'
import StaffLogin from '../views/Dashboard/StaffLogin.vue'
import StaffSignup from '../views/Dashboard/StaffSignup.vue'
import Dashboard from '../views/Dashboard/Dashboard.vue'

// Route Guards
import { auth } from '../firebase/config'

const requireAuth = (to, from, next) => {
  let user = auth.currentUser
  if (!user) {
    next({ name: 'Login' })
  } else { next() }
}

const requireNoAuth = (to, from, next) => {
  let user = auth.currentUser
  if (user) {
    next({ name: 'Dashboard' })
  } else { next() }
}

const routes = [
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
    path: '/about/values',
    name: 'AboutValues',
    component: AboutValues
  },
  {
    path: '/about/services',
    name: 'AboutServices',
    component: AboutServices
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/blog/:id',
    name: 'BlogPost',
    component: BlogPost,
    props: true
  },
  {
    path: '/blog/create-post',
    name: 'CreatePost',
    component: CreatePost,
    beforeEnter: requireAuth
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: requireAuth
  },
  {
    path: '/staff-login',
    name: 'StaffLogin',
    component: StaffLogin,
    beforeEnter: requireNoAuth
  },
  {
    path: '/staff-signup',
    name: 'StaffSignup',
    component: StaffSignup,
    beforeEnter: requireNoAuth
  },
  // Catchall
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

export default router
