import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactsView from '../views/ContactsView.vue'
import ApplicationView from '../views/ApplicationView.vue'
import PublicProgramView from '../views/PublicProgramView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsView
    },
    {
        path: '/application',
        name: 'application',
        component: ApplicationView
    },
    {
        path: '/public-program',
        name: 'public-program',
        component: PublicProgramView
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router