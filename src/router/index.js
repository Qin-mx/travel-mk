import Vue from 'vue'
import Router from 'vue-router'
import HomePage from 'views/pages/HomePage'
import CityPage from 'views/pages/CityPage'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
