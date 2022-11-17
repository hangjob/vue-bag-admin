import appPinia from '@/packages/pinia/app'

/**
 * 获取接口路经-接口覆盖
 * @param key
 */
const getApiInstanceUrl = (key: string) => {
    const appStore = appPinia()
    const url = appStore.configAppApis[key];
    return url ? url : key;
}

export {
    getApiInstanceUrl
}
