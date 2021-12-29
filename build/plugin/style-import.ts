import styleImport from 'vite-plugin-style-import' //按需加载模块

export function configStyleImport() {
    return styleImport({
        libs: [
            {
                libraryName: 'vxe-table',
                esModule: true,
                resolveComponent: (name) => `vxe-table/es/${name}`,
                resolveStyle: (name) => `vxe-table/es/${name}/style.css`
            }
        ]
    })
}
