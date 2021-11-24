// @ts-ignore
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import type {App} from 'vue';

// ease 可以设置css3动画
// speed 是进度条从开始到结束的耗时
// showSpinner 转圈
NProgress.configure({ease: 'linear', speed: 500, showSpinner: false});

const NProgressPlugin = (app: App) => {
    app.use(NProgress)
}

export {
    NProgressPlugin,
    NProgress
};