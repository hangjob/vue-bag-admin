import {get} from "@/packages/http/request.ts"
import apiMap from "@/app/admin/api/apiMap.ts"

const token = ()=>{
    return get(apiMap.gsc.token)
}

const sentence = (url,params,config)=>{
    return get(apiMap.gsc.sentence,params,config)
}

export {
    token,
    sentence
}
