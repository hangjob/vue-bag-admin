import type {App} from 'vue';
import YxsCard from './yxs-card/index'

const setupGlobComponents = (app: App) => {
    app.component('yxs-card', YxsCard)
}

export {
    setupGlobComponents
}