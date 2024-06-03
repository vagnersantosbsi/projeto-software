import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //Linha adicionada

createApp(App).use(router).mount('#app')
// Adicionou .use(router)

