import {httpPost} from "@/packages/http/request.js";

const UserRegister = (params={})=>{
    return httpPost('/user-register',params)
}

const UserLogin = (params={})=>{
    return httpPost('/user-login',params)
}



export {
    UserRegister,
    UserLogin
}
