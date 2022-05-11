import Vue from 'vue'
import Vuex from 'vuex'

import { events } from './events.module.js'
import { products } from './products.module'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        events,
        products
    }
})