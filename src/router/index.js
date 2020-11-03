import moment from 'moment';
import { createRouter, createWebHistory } from 'vue-router';
import login from '../pages/login.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
   
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "login" */ '../pages/dashboard'),
    beforeEnter: (to, from, next) => { 
      if(localStorage.getItem('access_token')){
        let {token, expiration} = JSON.parse(localStorage.getItem('access_token'));
        //TODO: Check for token expiration
        let expirationTime = moment(expiration);
        let currentTime = moment();
        let diff = expirationTime.diff(currentTime, 'hours');
        console.log(diff);
        if(diff < 0){
          localStorage.removeItem('access_token');
          next({
            name: "login"
          })
        }else{
          if(token){
            next();
          }

        }
      }else{
        next({
          name: "login"
        })
      }
    },
    // meta: {
    //   requiresAuth: true
    // },
    children : [
      {
        path: '',
        name: '',
        component: () => import('../pages/dashboard/overview'),
        children : [
          {
            path: '/list-election',
            name: 'list-election',
            component: () => import('../pages/detailedPage/listElection')
          }
        ],
      },
      {
        path: 'election',
        name: 'election',
        component: () => import('../pages/dashboard/election'),

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

//navigation guard
// router.beforeEach((to,from,next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)){
//     if(!credentials){
//       next({
//         name: "login"
//       })
//     }else{
//       next();
//     }
//   }else{
//     next();
//   }
// });

export default router
