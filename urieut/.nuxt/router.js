import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0700467c = () => interopDefault(import('../pages/location.vue' /* webpackChunkName: "pages/location" */))
const _22d184ac = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _a0a03fa8 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _f88e0436 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _5030ac24 = () => interopDefault(import('../pages/locations/jeju.vue' /* webpackChunkName: "pages/locations/jeju" */))
const _088619d9 = () => interopDefault(import('../pages/locations/seogwipo.vue' /* webpackChunkName: "pages/locations/seogwipo" */))
const _5929e195 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/location",
    component: _0700467c,
    name: "location"
  }, {
    path: "/login",
    component: _22d184ac,
    name: "login"
  }, {
    path: "/profile",
    component: _a0a03fa8,
    name: "profile"
  }, {
    path: "/signup",
    component: _f88e0436,
    name: "signup"
  }, {
    path: "/locations/jeju",
    component: _5030ac24,
    name: "locations-jeju"
  }, {
    path: "/locations/seogwipo",
    component: _088619d9,
    name: "locations-seogwipo"
  }, {
    path: "/",
    component: _5929e195,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
