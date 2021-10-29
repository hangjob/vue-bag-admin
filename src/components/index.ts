import type {App} from 'vue';
import YxsCard from './yxs-card/index'
import YxsTable from './yxs-table/index'
import YxsModal from './yxs-modal/index'
import YxsView from './yxs-view/index'

const setupGlobComponents = (app: App) => {
    app.component('yxs-card', YxsCard)
    app.component('yxs-table', YxsTable)
    app.component('yxs-modal', YxsModal)
    app.component('yxs-view', YxsView)
}

export {
    setupGlobComponents
}