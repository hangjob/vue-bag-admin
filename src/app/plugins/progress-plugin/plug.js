import {NButton, NAvatar, NProgress, NNotificationProvider} from "naive-ui";
import {ref, h} from "vue"

const useProgress = (ctx) => {
    const caches = {};

    const destroyNotification = (notification) => {
        notification && notification.destroy()
    }

    const createNotification = (to, cache) => {
        cache.percentageNumber.value = 0;
        cache.differenceNumber.value = 0;
        const notification = ctx?.naive?.notification?.create({
            title: `${ctx.helpers.formatTitle(ctx, to.meta)}-页面数据加载中...`,
            content: () => h(NProgress, {
                text: true,
                type: "line",
                status: "success",
                percentage: cache.percentageNumber.value,
                'indicator-placement': 'inside',
                lacement: 'bottom-right'
            }),
            lacement: 'bottom-right',
            meta: () => h('span', {}, `耗时:${cache.differenceNumber.value}ms`),
            action: () => h(
                NButton,
                {
                    text: true, type: 'primary', onClick: () => destroyNotification(notification)
                },
                {default: () => "关闭"},
            ),
            onClose: () => destroyNotification(notification),
        })
        return notification
    }

    ctx.router.beforeEach((to, from, next) => {
        to.nanoid = ctx.helpers.nanoid()
        let cache = caches[to.nanoid] = {};
        cache.startTime = (new Date()).getTime();
        cache.percentageNumber = ref(0)
        cache.differenceNumber = ref(0)
        cache.notification = createNotification(to, cache)
        cache.beforeAnimationFrame = window.requestAnimationFrame(function fn() {
            cache.percentageNumber.value += Math.floor(Math.random() * 10 + 5)
            let endTime = (new Date()).getTime()
            cache.differenceNumber.value = endTime - cache.startTime > 0 ? endTime - cache.startTime : 0;
            cache.beforeAnimationFrame = window.requestAnimationFrame(fn)
        })
        next()
    })
    ctx.router.afterEach((to, from) => {
        let cache = caches[to.nanoid];
        if (cache) {
            const animationFrame = window.requestAnimationFrame(function fn() {
                if (cache.percentageNumber.value >= 100) {
                    cache.percentageNumber.value = 100;
                    setTimeout(() => {
                        destroyNotification(cache.notification)
                    }, 200)
                    window.cancelAnimationFrame(animationFrame)
                    window.cancelAnimationFrame(cache.beforeAnimationFrame)
                    return
                }
                window.requestAnimationFrame(fn)
            })
        }
    })
}

export default useProgress
