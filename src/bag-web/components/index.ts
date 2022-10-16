import { App } from 'vue'
import Card from './Card.vue'
import Advertising from './Advertising.vue'

const setupGlobComponents = (app: App) => {
    app.component('bag-card', Card)
    app.component('bag-advertising', Advertising)
}


export {
    setupGlobComponents,
}
