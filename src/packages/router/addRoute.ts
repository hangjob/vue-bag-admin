import {Component, App} from "vue";

interface FileType {
    [key: string]: Component
}

const views: Record<string, FileType> = import.meta.globEager("/src/packages/views/**/*.vue")




const setAddRoute = (app: App) => {
    const {routers} = app.config.globalProperties.$plugin;
    console.log(views);
    routers.filter((item: any) => item.filePath).map((item: any) => {
        console.log(item);
        // router.addRoute('admin', {})
    })
}
export {
    setAddRoute
}