const loadScript = (src: string) => {
    return new Promise((resolve: any, reject: any) => {
        let script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = src
        script.id = src
        if (document.getElementById(src)) {
            return resolve()
        }
        document.body.appendChild(script)
        script.onload = () => {
            resolve()
        }
        script.onerror = () => {
            reject()
        }
    })
}


export default loadScript;
