import { App } from 'vue'
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
const setupPrimevue = (app:App)=>{
    app.use(PrimeVue);
}
export default setupPrimevue;
