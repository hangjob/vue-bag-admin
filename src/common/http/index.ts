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
        serialize
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
        serialize
    }
}


export {
    getHttpNetworkConfig,
    rewriteUrl,
}
