import { createApp } from 'vue'
import App from './App.vue'
import Index from './components/Index'

const app = createApp(App)

app.component('my-index', Index)

app.mount('#app')
