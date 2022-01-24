import importToCDN from 'vite-plugin-cdn-import'

export function configCDN() {
    return importToCDN({
        modules: [],
    })
}
