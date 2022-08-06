import theme from '../../src/packages/theme/ming'
import path from 'path';
export function configCss() {
    return {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    ...theme,
                    hack:`true; @import (reference) "${path.resolve('src/packages/theme/ming.less')}";`,
                },
                javascriptEnabled: true,
            },
        }
    }
}
