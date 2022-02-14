import { App } from 'vue'
import Card from './Card.vue'
import Advertising from './Advertising.vue'

const setupGlobComponents = (app: App) => {
    app.component('WebCard', Card)
    app.component('Advertising', Advertising)
}


export {
    setupGlobComponents,
}
