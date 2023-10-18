import {post} from "@/packages/http/request.ts"
import apiMap from "@/packages/api/apiMap.ts"
import {resetApiInstanceUrl} from "@/packages/global"

const login = () => {
    return post(resetApiInstanceUrl(apiMap.login))
}
const menus = () => {
    return post(resetApiInstanceUrl(apiMap.menus))
}

const userInfo = ()=>{
    return post(resetApiInstanceUrl(apiMap.userInfo))
}

export {
    login,
    menus,
    userInfo
}
