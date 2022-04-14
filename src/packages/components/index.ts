import type { App } from 'vue'
import YxsCard from './card/Index'
import YxsView from './view/Index'
import YxsFormTable from './form-table/Index'
import YxsModal from './modal/Index'
import YxsIconfont from './iconfont/Index'
import YxsUploadImage from './upload/UploadImage.vue'
// import MdEditor from './editor/MdEditor.vue'

const setupGlobComponents = (app: App) => {
    app.component('yxs-card', YxsCard)
    app.component('yxs-form-table', YxsFormTable)
    app.component('yxs-modal', YxsModal)
    app.component('yxs-view', YxsView)
    app.component('yxs-iconfont', YxsIconfont)
    app.component('yxs-upload-image', YxsUploadImage)
    // app.component('MdEditor', MdEditor)
}

export {
    setupGlobComponents,
}
