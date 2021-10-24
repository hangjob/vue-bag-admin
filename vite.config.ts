import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
const path = require('path');
import viteAntdTheme, { ThemeEntry, AntdThemeOptions } from 'vite-plugin-antd-theme';

const themesEntry: Array<ThemeEntry> = [
    // 暗黑主题
    {
        entryPath: './node_modules/ant-design-vue/lib/style/themes/dark.less',
        outputName: 'dark',
        outputPath: './src/config'
    },
    // 默认主题
    {
        entryPath: path.join(__dirname, 'src/packages/admin/style/theme/vars.less'),
        outputName: 'light',
        outputPath: './src/config'
    },
    // 紧凑主题
    {
        entryPath: './node_modules/ant-design-vue/lib/style/themes/compact.less',
        outputName: 'compact',
        outputPath: './src/config'
    }
];

const options: AntdThemeOptions = {
    themesEntry,
    // 是否提取全部变量，默认false，优先级低于设置themeVariables
    allVariables: true,
    // 以下是antd-theme-generator配置项
    antDir: path.join(__dirname, './node_modules/ant-design-vue'),
    stylesDir: path.join(__dirname, './src'), // all files with .less extension will be processed
    varFile: path.join(__dirname, 'src/packages/admin/style/theme/vars.less'), // default path is Ant Design default.less file
    themeVariables: [],
    outputFilePath: path.join(__dirname, './public/static/color.less'), // if provided, file will be created with generated less/styles
    customColorRegexArray: [/^fade\(.*\)$/] // An array of regex codes to match your custom color variable values so that code can identify that it's a valid color. Make sure your regex does not adds false positives.
};

export default defineConfig({
    plugins: [vue(), vueJsx(),viteAntdTheme(options)],
    resolve: {
        alias: {
            // 如果报错__dirname找不到，需要安装node,执行yarn add @types/node --save-dev
            "@": path.resolve(__dirname, "src"),
            "comps": path.resolve(__dirname, "src/components"),
            '~': path.resolve(__dirname, "node_modules")
        }
    },
    server: {
        port: 3001,
    },
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            }
        },
    },
    build: {
        rollupOptions: {
            input: {
                web: path.resolve(__dirname, 'index.html'), // 把页面放在外面，路径简短 防止src/packages/web/index.html ，建议vite把key(web、admin)可也阔以映射成页面路径，就避免这个问题
                admin: path.resolve(__dirname, 'admin.html')
            },
        },
    }
})