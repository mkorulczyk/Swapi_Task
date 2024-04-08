import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

import main from '../layouts/main.vue'; 

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta:{ 
            layout: main
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router