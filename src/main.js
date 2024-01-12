import { registerPlugins } from '@/plugins'
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import { createApp } from 'vue'



const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

registerPlugins(app)

app.mount('#app')
