import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Index from './components/Index'

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

app.mount('#app')
