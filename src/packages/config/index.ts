import {RouterComponent} from "@/packages/type"

export default {
    whiteList: ["/login"],
    resetPath: "/login",
    menus:[],
    getComponent: (filePath) => {
        const files: Record<string, RouterComponent> = import.meta.glob("/src/packages/view/**/*.vue", {eager: true})
        console.log(files)
    }
}
