export function configServer() {
    return {
        host: '0.0.0.0',
        port: 8291,
        https: false,
        proxy: {
            '^/api': {
                target: 'http://127.0.0.1:8001',
                changeOrigin: true,
                rewrite: (path: any) => path.replace(/^\/api/, '')
            },
            '^/papi': {
                target: 'http://127.0.0.1:1099',
                changeOrigin: true,
                rewrite: (path: any) => path.replace(/^\/papi/, '')
            },
        }
    }
}
