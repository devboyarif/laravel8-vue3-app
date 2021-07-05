import { createRouter, createWebHistory } from 'vue-router'

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
                component: () => import('../pages/About.vue'),
                meta: {
                    title: 'Home'
                }
            },
        ]
    },
    // authentication
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('../pages/auth/login.vue')
  },
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
