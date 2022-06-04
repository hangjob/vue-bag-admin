import {post} from "@/bag-web/install";

const webLinksAll = () => {
    return post('/web/links/all')
}

const webLinksCreate = (params: object) => {
    return post('/web/links/create',params)
}

export {
    webLinksAll,
    webLinksCreate
}
