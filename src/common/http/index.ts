// 包装url
const rewriteUrl = (url: string) => {
    return url
}

const getHttpNetworkConfig = (httpNetwork: any) => {
    const {
        baseURL,
        requestTimeout,
        headers,
        retry,
        retryDelay,
        successCode,
        messageDuration,
        filterUrlToken,
        whiteList,
        resetPath,
    } = httpNetwork
    return {
        baseURL,
        timeout: requestTimeout,
        headers,
        retry,
        retryDelay,
        successCode,
        messageDuration,
        filterUrlToken,
        whiteList,
        resetPath,
    }
}


export {
    getHttpNetworkConfig,
    rewriteUrl,
}
