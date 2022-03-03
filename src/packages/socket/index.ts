import type { App } from 'vue'
import io from 'socket.io-client'


const _default = {
    install: (app: App, { connection, options }: { connection: string, options: any }) => {
        const socket = io(connection, options)
        app.config.globalProperties.$socket = socket
        app.provide('socket', socket)
    },
}


const setupSocket = (app: App, options: any) => {
    app.use(_default, options)
}


export {
    setupSocket,
}
