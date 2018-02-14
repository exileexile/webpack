'use strict'
import Vue from 'vue'
import Login from './Login.vue'
require('../../css/common.css')

const idx = new Vue({
  render: h => h(Login)
}).$mount('#idx');