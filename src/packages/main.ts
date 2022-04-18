import {createApp} from 'vue'
import App from './App.vue'
import install from "@/packages/install";
const app = createApp(App)
app.use(install).mount('#app')
window.__app__ = app;
