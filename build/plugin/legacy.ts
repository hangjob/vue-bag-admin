import legacy from '@vitejs/plugin-legacy' // 兼容ie

export function configLegacy() {
    return legacy({
        targets: ['defaults', 'not IE 11']
    })
}
