import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Index from './components/Index'
import Layout from './components/Layout'
import Preloader from './components/Preloader'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: Index},
        {path: "/home", component: Index}
    ]
});

const app = createApp(App)

app.use(router)

app.component('my-index', Index)
app.component('layout', Layout)
app.component('preloader', Preloader)

app.mount('#app')
