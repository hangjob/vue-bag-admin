import html from 'vite-plugin-html'

export function configHtml(opt: any) {
    return html({
        inject: {
            injectData: {...opt.variables}
        },
        minify: true
    })
}
