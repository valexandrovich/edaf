import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ApplicationView from '../views/ApplicationView.vue'
import PublicProgram from '../views/PublicProgram.vue'
import ContactsView from '../views/ContactsView.vue'
import FairOnline from '../views/FairOnline.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/application',
        name: 'application',
        component: ApplicationView
    },
    {
        path: '/public-program',
        name: 'public-program',
        component: PublicProgram
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsView
    },
    {
        path: '/fair-online',
        name: 'fair-online',
        component: FairOnline
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router