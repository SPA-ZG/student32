import { createRouter, createWebHistory } from 'vue-router'
import ExercisesView from "../views/ExercisesView.vue"
import DietView from "../views/DietView.vue"
import NotFoundPage from "../views/NotFoundPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'exercises',
      component: ExercisesView
    },
    {
      path: '/exercises/:name?',
      name: 'exercises-id',
      component: ExercisesView
    },
    {
      path: '/diet',
      name: 'diet',
      component: DietView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundPage
    },
  ]
})

export default router;
