// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import axios from 'axios'
import 'babel-polyfill'
// import 'lib-flexible' 处理移动端

import store from './store'
import './assets/styles/reset.css' // 处理默认样式
import './assets/styles/border.css' // 处理1像素
import '../static/iconfont/iconfont.css'

Vue.prototype.axios = axios

Vue.config.productionTip = false

// fastclick模块 - 处理移动端300ms延时
FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
