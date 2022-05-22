import {App} from "vue";


/**
 * 获取图片展示完整路经
 * @param app
 */
const getImageFullPath = (app: App) => {
    return function (str: string) {
        return app.config.globalProperties.configApp.httpNetwork.baseURL + str
    }
}

const setupGlobal = (app: App) => {
    app.provide('bagGlobal', {
        getImageFullPath: getImageFullPath(app)
    })
}

export default setupGlobal;
