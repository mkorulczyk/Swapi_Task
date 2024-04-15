import { createWebHistory, createRouter } from "vue-router";

import MainPage from './modules/mainPage/MainPage.vue';
import AppFooter from './layouts/componets/AppFooter.vue';
import AppHeader from './layouts/componets/AppHeader.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainPage

    },
    {
        path: '/About',
        name: 'About',
        component: AppFooter
    },
    {
        path: '/Character',
        name: 'Character',
        component: AppHeader
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;