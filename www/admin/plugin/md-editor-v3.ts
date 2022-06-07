import { App } from 'vue'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

const setupGlobComponents = (app: App) => {
    app.component('md-editor', MdEditor)
}
export default setupGlobComponents
