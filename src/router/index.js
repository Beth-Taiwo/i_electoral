import { createRouter, createWebHistory } from 'vue-router'
import login from '../pages/login.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../pages/dashboard'),
    children : [
      {
        path: '',
        name: '',
        component: () => import('../pages/dashboard/overview'),
      },
      {
        path: 'election',
        name: 'election',
        component: () => import('../pages/dashboard/election'),
        children: [
          {
            path: 'election-detail',
            name: 'election-detail',
            component: () =>import('../components/electionDetails'),
          }
        ]
      },
      {
        path: 'positions',
        name: 'positions',
        component: () => import('../pages/dashboard/positions')
      },
      {
        path: 'candidates',
        name: 'candidates',
        component: () => import('../pages/dashboard/candidates')
      },
      {
        path: 'voters',
        name: 'voters',
        component: () => import('../pages/dashboard/voters')
      },
      {
        path: 'results',
        name: 'results',
        component: () => import('../pages/dashboard/results')
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('../pages/dashboard/setting')
      }
    ]
  },
  {
    path: '/voter-login',
    name: 'voterLogin',
    component: () => import('../voters/pages/login')
  },
  {
    path: '/voter-dash',
    name: 'voter-dash',
    component: () => import('../voters/pages/dashboard'),
    children : [
      {
        path: '',
        name: '',
        component: () => import('../voters/pages/dashboard/overview'),
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
