import WindiCSS from 'vite-plugin-windicss'
import path from "path";

const {dirname, join, resolve} = require('path');

export function configWindiCSS() {
    return WindiCSS({
        config: path.resolve(process.cwd(), 'windi.config.ts'),
        root: dirname(__dirname),
    })
}
