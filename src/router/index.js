import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import sourceData from '@/data.json'

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/protected', name: 'Protected', component: () => import('@/views/Protected.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue'),
    props: route => ({ ...route.params, id: parseInt(route.params.id) }),
    beforeEnter(to) {
      const exists = sourceData.destinations.find(
        destination => destination.id === parseInt(to.params.id)
      )
      if (!exists) return {
        name: 'NotFound',
        // allows keeping the URL while rendering a different page
        params: { pathMatch: to.path.split('/').slice(1) },
        query: to.query,
        hash: to.hash,
      }
    },
  },
  {
    path: '/destination/:id/:slug/:experienceSlug',
    name: 'experience.show',
    component: () => import('@/views/ExperienceShow.vue'),
    props: route => ({ ...route.params, id: parseInt(route.params.id) })
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise(resolve => {
      // if you want to add 
      setTimeout(() => resolve({ top: 0 }), 1000);
    })
  }
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !window.user) {
    return { name: 'Login' }
  }
})


export default router