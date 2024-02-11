import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createRouter,createWebHashHistory } from 'vue-router'

import LoginComponent from '../src/components/LoginComponent.vue'
import SignupComponent from '../src/components/SignupComponent.vue'
const routes = [
  {"path":"/login","component":LoginComponent},
  {"path":"/signup","component":SignupComponent},
  
]
const router = createRouter({routes:routes,history: createWebHashHistory()})
loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
