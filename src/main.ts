import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Styles 
import './assets/css/theme.css'
import './assets/css/utilities.css'
import './assets/css/components.css'

createApp(App).use(router).mount('#app')