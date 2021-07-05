import { createRouter, createWebHistory } from 'vue-router'

import Login from '../pages/auth/login'
import Register from '../pages/auth/register'

// auth layout
import AuthLayout from '../layouts/AuthLayout.vue'

const routes = [
    {
        path: '/',
        // component: AdminLayout,
        component: () => import( '../layouts/AdminLayout.vue'),
        meta: { requiresAuth: true },
        children: [
            // dashboard routes
            {
                path: '/',
                name: 'home',
                component: () => import('../pages/Home.vue'),
                meta: {
                    title: 'Home'
                }
            },
        ]
    },
    {
        path: '/auth',
        component: AuthLayout,
        meta: { requiresVisitor: true },
        children: [
            {
                path: 'login',
                name: 'login',
                component: Login,
                meta: {
                    title: 'Login'
                }
            },
            {
                path: 'register',
                name: 'register',
                component: Register,
                meta: {
                    title: 'Register'
                }
            },
        ]
    },

//   {
//     path: '/auth/login',
//     name: 'login',
//     component: () => import('../pages/auth/login.vue')
//   },
  {
    path: '/home',
    name: 'About',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
