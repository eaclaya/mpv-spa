import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './index.css'
import Home from './components/Home.vue'
import Pricing from './components/Pricing.vue'
import Tutorial from './components/Tutorial.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/pricing', component: Pricing },
    { path: '/tutorial', component: Tutorial },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

const app = createApp(App);
app.use(router);
app.mount('#app');
