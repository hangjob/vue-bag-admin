import { App } from 'vue'
import Card from './Card.vue'

const setupGlobComponents = (app: App) => {
    app.component('WebCard', Card)
}


export {
    setupGlobComponents,
}
