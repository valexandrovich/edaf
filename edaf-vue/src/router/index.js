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
import ProductPartnersCard from '../views/ProductPartnersCard.vue'
import Event from '../views/Event.vue'

import RouterView from '../views/RouterView'
import { i18n } from '../plugins/i18n'

Vue.use(VueRouter)


const routes = [

    {
        path: '/',
        redirect: '/en'
       },

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
        


    // {
    //     path: '/:locale?',
    //     component: RouterView,
    //     beforeEnter: (to, from, next) => {
    //         const supportedLocales = ["en", "uk"]
    //         console.log('/:locale?');
    //         console.log(to);
    //         console.log(from);
    //         console.log(next);
    //         const {locale} = to.params
    //         console.log('locale -> ' + locale);

    //         if(supportedLocales.includes(locale)){
    //             console.log('явное указание языка');
    //             i18n.locale = locale;
    //             return next()
    //         // } else if(!locale) {
    //             // console.log('нет языка');
    //         } else {
    //             // console.log('/en' + to.fullPath);
    //             // return next('/en' +to.fullPath)
    //             return next()
    //             console.log('другой путь или нет языка' );

    //         }

            // console.log(to);
            // const p = to.params
            // console.log(p);
            // const fullPath = to.fullPath;
            // console.log(fullPath);
            // const locale = to.params.locale
            // // console.log('/:locale?');
            // // console.log(locale);
            // if (locale == 'uk') {
            //     // console.log('uk locale needed');
            //     i18n.locale = 'uk';
            // } else {
            //     // console.log('using en locale');
            //     i18n.locale = 'en';
            // }
            // // return next({path: fullPath})
            // return next()

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
                path: 'event/:id',
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
                path: 'product-partners/:id',
                name: 'product-partners',
                component: ProductPartnersCard
            },

            // {
            //     path: '*',
            //     component: HomeView,
            //     beforeEnter: (to, from, next) => {
            //         console.log('using * route');
            //         i18n.locale = 'en';
            //         return next()
            //     },
            // }

        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    // base: 'edaf2/',
    base: process.env.VUA_APP_BASE_URL,
    // oldRoutes
    routes
})

export default router