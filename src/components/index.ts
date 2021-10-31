import type {App} from 'vue';
import YxsCard from './yxs-card/index'
import YxsFormTable from './yxs-form-table/index'
import YxsModal from './yxs-modal/index'
import YxsView from './yxs-view/index'

const setupGlobComponents = (app: App) => {
    app.component('yxs-card', YxsCard)
    app.component('yxs-form-table', YxsFormTable)
    app.component('yxs-modal', YxsModal)
    app.component('yxs-view', YxsView)
}

export {
    setupGlobComponents
}