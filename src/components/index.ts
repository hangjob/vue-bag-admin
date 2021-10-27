import type {App} from 'vue';
import YxsCard from './yxs-card/index'
import YxsTable from './yxs-table/index'

const setupGlobComponents = (app: App) => {
    app.component('yxs-card', YxsCard)
    app.component('yxs-table', YxsTable)
}

export {
    setupGlobComponents
}