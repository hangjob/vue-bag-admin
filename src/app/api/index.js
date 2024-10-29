import {httpPost} from "@/packages/http/request.js";
import {encrypt, nanoid} from "@/packages/helpers/index.js";
import {key, iv} from "@/app/config/index.js"

const http = (url, params, config = {}) => {

    return httpPost(url, params, {
        headers: {
            'sing': encrypt(JSON.stringify({name: 'bag', random: nanoid()}), iv, key)
        },
        ...config
    })
}

const UserRegister = (params = {}) => {
    return http('/user-register', params)
}

const UserLogin = (params = {}) => {
    return http('/user-login', params)
}


export {
    UserRegister,
    UserLogin
}
