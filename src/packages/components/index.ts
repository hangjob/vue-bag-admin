import type { App } from 'vue'
import card from './card/Index'
import formTable from './form-table/Index'
import modal from './modal/Index'
import view from './view/Index'
import iconfont from './iconfont/Index'
import uploadImage from './upload/UploadImage.vue'
import curdTable from './curd/Index.vue'
import curdCreate from './curd/Create.vue'
import curdEdit from './curd/Edit.vue'
// import MdEditor from './editor/MdEditor.vue'

const setupGlobComponents = (app: App) => {
    app.component('bag-card', card)
    app.component('bag-form-table', formTable)
    app.component('bag-curd-table', curdTable)
    app.component('bag-curd-create', curdCreate)
    app.component('bag-curd-edit', curdEdit)
    app.component('bag-modal', modal)
    app.component('bag-view', view)
    app.component('bag-iconfont', iconfont)
    app.component('bag-upload-image', uploadImage)
    // app.component('MdEditor', MdEditor)
}

export {
    setupGlobComponents,
}
