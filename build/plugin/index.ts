import type { Plugin } from 'vite'
import { vue } from './vue'
import { vueJsx } from './vue-jsx'
import { configStyleImport } from './style-import'
import { configViteCompression } from './compression'
import { configHtml } from './html'
import { configViteComponents } from './components'
import { configWindiCSS } from './windicss'
import { visualizer } from 'rollup-plugin-visualizer'

export default function createVitePlugins({ variables }: { variables: any }) {
    const opt = { variables: variables }
    const vitePlugins: (Plugin | Plugin[])[] = [
        vue(),
        vueJsx(),
        configStyleImport(),
        configViteCompression(),
        configViteComponents(),
        configWindiCSS(),
        visualizer({  filename: 'report.html' }),
    ]
    vitePlugins.push(configHtml(opt))
    return vitePlugins
}
