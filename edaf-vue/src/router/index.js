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
import ProductSpacesCard from '../views/ProductSpacesCard.vue'
import Event from '../views/Event.vue'
import Test from '../views/Test.vue'

import RouterView from '../views/RouterView'
import { i18n } from '../plugins/i18n'

Vue.use(VueRouter)

const routes = [

    /*
        {
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
            path: '/product/:id',
            name: 'product',
            component: ProductCard
        },
        {
            path: '/product-spaces/:id',
            name: 'product-spaces',
            component: ProductSpacesCard
        },
        {
            path: '/test/:id',
            name: 'test',
            component: Test,
            props: true
    
        }
    
        */
    {
        path: '/:locale',
        component: RouterView,
        beforeEnter: (to, from, next) => {
            const locale = to.params.locale
            const supported_locales = ['en', 'uk']
            if (!supported_locales.includes(locale)) return next('en');
            if (i18n.locale !== locale) {
                i18n.locale = locale;
            }
            return next()
        },
        children: [
            {
                path: '/',
                name: 'home',
                component: HomeView
            },
            {
                path: 'application',
                name: 'application',
                component: ApplicationView
            },
            {
                path: 'public-program',
                name: 'public-program',
                component: PublicProgram
            },
            {
                path: 'contacts',
                name: 'contacts',
                component: ContactsView
            },
            {
                path: 'fairs',
                name: 'fairs',
                component: Fairs
            },
            {
                path: 'fairs-online',
                name: 'fairs-online',
                component: FairsOnline
            },
            {
                path: 'physical-fairs',
                name: 'physical-fairs',
                component: PhysicalFairs
            },
            {
                path: 'events',
                name: 'events',
                component: Events
            },
            {
                path: 'event',
                name: 'event',
                component: Event
            },
            {
                path: 'product/:id',
                name: 'product',
                component: ProductCard
            },
            {
                path: 'product-spaces/:id',
                name: 'product-spaces',
                component: ProductSpacesCard
            },
            {
                path: '/test/:id',
                name: 'test',
                component: Test,
                props: true

            },
            {
                path: '*',
                component: HomeView,
                beforeEnter: (to, from, next) => {
                    i18n.locale = 'en';
                    return next()
                },
            }

        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    // base: 'edaf2/',
    base: process.env.VUA_APP_BASE_URL,
    routes
})

export default router