import {post} from "@/packages/http/request.ts"
import apiMap from "@/app/admin/api/apiMap.ts"

const member = () => {
    return post(apiMap.member)
}
const role = ()=>{
    return post(apiMap.role)
}

const branch = ()=>{
    return post(apiMap.branch)
}
export {
    member,
    role,
    branch
}
