import { createWebHistory, createRouter } from "vue-router";

import MainPage from './modules/mainPage/MainPage.vue';
import AppFooter from './Layout/componets/AppFooter.vue';
import AppHeader from './Layout/componets/AppHeader.vue';

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
// przenosci foldery
// formatowanie
// layout z prawdziwego zdarzenia
// wywalic character card
// nazwy branch 
// nazwy comituw
// pull request 