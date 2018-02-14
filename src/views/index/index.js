'use strict'
import Vue from 'vue'
import Index from './Index.vue'
require('../../css/common.css')
require('../../css/index.less')

const idx = new Vue({
  render: h => h(Index)
}).$mount('#idx');