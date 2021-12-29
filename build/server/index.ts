export function configServer() {
    return {
        host: '0.0.0.0',
        port: 8290,
        https: false,
        proxy: {
            '^/api': {
                target: 'http://127.0.0.1:7001',
                changeOrigin: true,
                rewrite: (path: any) => path.replace(/^\/api/, '')
            }
        }
    }
}
