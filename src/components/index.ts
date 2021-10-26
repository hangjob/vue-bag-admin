import type {App} from 'vue';
import YxsCard from './yxs-card/index'

const setupGlobComponents = (app: App) => {
    app.component('YxsCard', YxsCard)
}

export {
    setupGlobComponents
}