import {post} from "@/packages/http/request.ts"
import apiMap from "@/packages/api/apiMap.ts"

const login = () => {
    return post(apiMap.login)
}
const menus = () => {
    return post(apiMap.menus)
}

const userInfo = ()=>{
    return post(apiMap.userInfo)
}

export {
    login,
    menus,
    userInfo
}
