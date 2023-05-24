import { string } from 'pm-utils'

const createRoutePath = (data) => {
    const obj = {
        id: string.randomId(),
        shows: false,
        httpViewPath: '',
        order: 0,
        iframePath: null,
        keepAlive: false,
        tabHidden: false,
        tabFix: false,
        httpFilePath: '',
    }
    return Object.assign(obj, data)
}


export {
    createRoutePath,
}
