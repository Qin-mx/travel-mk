import Vue from 'vue'
import Router from 'vue-router'
import HomePage from 'views/pages/HomePage'
import CityPage from 'views/pages/CityPage'
import DescPage from 'views/pages/DescPage'

Vue.use(Router)

export default new Router({
  // mode: 'history',s
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/city',
      name: 'CityPage',
      component: CityPage
    },
    {
      path: '/desc/:id',
      name: 'DescPage',
      component: DescPage
    }
  ]
})
