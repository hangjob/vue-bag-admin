import {post} from "@/packages/http/request.ts"
import apiMap from "@/app/admin/api/apiMap.ts"

const member = () => {
    return post(apiMap.member)
}
export {
    member,
}
