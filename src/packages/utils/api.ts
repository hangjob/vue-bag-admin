import store from '@/packages/store'

/**
 * 获取接口路经
 * @param key
 */
const getApiInstanceUrl = (key: string) => {
    const url = store.state.app?.configApp?.configAppApis[key];
    return url ? url : key;
}

export {
    getApiInstanceUrl
}
