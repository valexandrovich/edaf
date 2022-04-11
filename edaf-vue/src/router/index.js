import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ApplicationView from '../views/ApplicationView.vue'
import PublicProgram from '../views/PublicProgram.vue'
import ContactsView from '../views/ContactsView.vue'
import FairsOnline from '../views/FairsOnline.vue'
import PhysicalFairs from '../views/PhysicalFairs.vue'
import Fairs from '../views/Fairs.vue'
import Events from '../views/Events.vue'
import ProductCard from '../views/ProductCard.vue'
import Event from '../views/Event.vue'

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
        path: '/fairs',
        name: 'fairs',
        component: Fairs
    },
    {
        path: '/fairs-online',
        name: 'fairs-online',
        component: FairsOnline
    },
    {
        path: '/physical-fairs',
        name: 'physical-fairs',
        component: PhysicalFairs
    },
    {
        path: '/events',
        name: 'events',
        component: Events
    },
    {
        path: '/event',
        name: 'event',
        component: Event
    },
    {
        path: '/product',
        name: 'product',
        component: ProductCard
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router