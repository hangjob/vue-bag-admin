import logo from "@/packages/assets/logo-min.png"

export default {
    whiteList: ["/login"],
    resetPath: "/login",
    menus: [],
    // 通过注入函数，让框架获取外部文件
    getViews: () => {
        return import.meta.glob("@/packages/view/**/*.vue", {eager: true})
    },
    website: {
        logo,
        title: "bag-admin"
    },
    components: {
        headerUserSet: null
    },
    apis:{}
}
