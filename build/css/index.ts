import theme from '../../src/packages/theme/ming'
export function configCss() {
    return {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    ...theme,
                },
                javascriptEnabled: true,
            },
        }
    }
}
