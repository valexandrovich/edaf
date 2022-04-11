import Vue from 'vue'
import Vuex from 'vuex'

import { events } from './events.module.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        events
    }
})