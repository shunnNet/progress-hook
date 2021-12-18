import { createApp } from 'vue'
import App from './App.vue'
import emitter from './emitter.js'

const app = createApp(App)

app.use(emitter).mount('#app')
