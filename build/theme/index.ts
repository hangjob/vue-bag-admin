const path = require('path');
import {UserConfigExport, ConfigEnv} from 'vite';
import viteAntdTheme, {ThemeEntry, AntdThemeOptions} from 'vite-plugin-antd-theme';

const themesEntry: Array<ThemeEntry> = [
    // 默认主题
    {
        entryPath: '../../src/packages/admin/style/theme/vars.less',
        outputName: 'light',
        outputPath: '../../src/config'
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

export {
    viteAntdTheme,
    options
}