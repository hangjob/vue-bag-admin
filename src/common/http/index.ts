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
        serialize,
        asuse
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
        serialize,
        asuse
    }
}


export {
    getHttpNetworkConfig,
    rewriteUrl,
}
