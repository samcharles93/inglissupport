import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { auth } from './firebase/config'
import store from './store'

// Styles 
import './assets/css/theme.css'
import './assets/css/utilities.css'
import './assets/css/components.css'

let app

auth.onAuthStateChanged(() => {
    app = createApp(App).use(store).use(router).mount('#app')
})