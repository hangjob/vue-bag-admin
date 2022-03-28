import setupInit from '@/packages/base'

import mitt from 'mitt'

const install = (app: any) => {
    app.provide('$App', app)
    app.provide('$mitt', mitt())
    setupInit(app)
}

export default install
