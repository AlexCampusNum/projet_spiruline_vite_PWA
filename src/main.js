import './assets/main.css'

import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import List from './components/SuppliersList.vue'
import Map from './components/SuppliersMap.vue'
import Supplier from './components/Supplier.vue'
import 'leaflet/dist/leaflet.css';
import { registerSW } from 'virtual:pwa-register'

if ('serviceWorker' in navigator) {
    registerSW()
}

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // {path: '/', name: 'Home', component: App},
        {path: '/list/', name: 'List', component: List},
        {path: '/map/', name: 'Map', component: Map},
        {path: '/supplier', name: 'Supplier', component: Supplier},
    ]
})

createApp(App).use(router).mount('#app')
