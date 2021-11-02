import type {App} from 'vue';
import YxsCard from './yxs-card'
import YxsFormTable from './yxs-form-table'
import YxsModal from './yxs-modal'
import YxsView from './yxs-view'

const setupGlobComponents = (app: App) => {
    app.component('yxs-card', YxsCard)
    app.component('yxs-form-table', YxsFormTable)
    app.component('yxs-modal', YxsModal)
    app.component('yxs-view', YxsView)
}

export {
    setupGlobComponents
}