import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import './assets/main.css'

import './assets/projects/hefadi.jpg'
import './assets/projects/linku.jpg'
import './assets/projects/qrcelia.jpg'


const app = createApp(App)

app.use(router)

app.mount('#app')

import { defineComponent } from 'vue'