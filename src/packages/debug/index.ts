import type { App } from 'vue'

const handleError = (app: App) => {
    const agent = navigator.userAgent.toLowerCase()
    app.config.errorHandler = (err: any, vm, info) => {
        const { message, stack } = err
        console.log(message)
        console.log(stack)
        console.log(vm)
        // post('xxxxx', {message, stack}) // 发送错误日志到服务端
    }
}

export {
    handleError,
}
