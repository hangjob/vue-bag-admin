// import install from '@/packages/install'
// import framework from '@/packages/framework'
import 'default-passive-events'
// @ts-ignore
import Framework from '../../lib/index.es.js'
import '../../lib/style.css'
import '../../mock'
console.log('%c 此页面不需要后端服务，用的是mock数据', 'color:#ffacac;')
new Framework()
