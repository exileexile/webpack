'use strict'
import Vue from 'vue'
import Contact from './Contact.vue'
require('../../css/common.css')

const idx = new Vue({
  render: h => h(Contact)
}).$mount('#idx');