import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueSocketio from 'vue-socket.io'
import socket from 'socket.io-client'

import http from './http'

Vue.use(VueAxios, axios)
Vue.use(VueSocketio, 'http://socketserver.com:1923')
