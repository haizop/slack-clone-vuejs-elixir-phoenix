import Vue from 'vue';
import Router from 'vue-router'

import Home from 'containers/Home'
import Room from 'containers/Room'
import Sidebar from 'containers/Sidebar'
import Join from 'containers/Join'
import HolochainError from 'containers/HolochainError'
import NotFound from 'components/NotFound'
import beforeEach from './beforeEach'

Vue.use(Router)

// Create the router
const router = new Router({
  mode: 'history',
  base: __dirname,
  linkActiveClass: '-active',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        sidebar: Sidebar,
      },
      meta: { requiresJoin: true },
    },
    {
      path: '/rooms/:id',
      name: 'room',
      components: {
        default: Room,
        sidebar: Sidebar,
      },
      meta: { requiresJoin: true },
    },
    {
      path: '/join',
      name: 'join',
      component: Join,
      meta: { requiresJoin: false },
    },
    {
      path: '/error',
      name: 'error',
      component: HolochainError,
      meta: { requiresJoin: false },
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound,
    },
  ],
})

/**
* Before a route is resolved we check for
* the token if the route is marked as
* requireAuth.
*/
router.beforeEach(beforeEach)

export default router
