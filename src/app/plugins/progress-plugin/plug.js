import {NButton, NAvatar, NProgress,NNotificationProvider} from "naive-ui";
import {ref,h} from "vue"

const useProgress = (ctx) => {
    let speed = 20;
    const caches = {};
    const clearMemory = (progress, timer) => {
        if (progress && timer) { // 手动清楚
            progress && progress.destroy();
            timer && clearInterval(timer)
        } else {
            // 自动清楚
            cache.forEach(({p, t}) => {
                setTimeout(() => {
                    p && p.destroy()
                }, 1200)
                t && clearInterval(t)
            })
        }
    }

    function hanledNotification(notification) {
        notification && notification.destroy()
    }

    const createProgress = (to, cach) => {
        cach.percentageNumber.value = 0;
        cach.differenceNumber.value = 0;
        const notification = ctx?.naive?.notification?.create({
            title: `${ctx.helpers.formatTitle(ctx, to.meta)}-页面数据加载中...`,
            content: () => h(NProgress, {
                text: true,
                type: "line",
                status: "success",
                percentage: cach.percentageNumber.value,
                'indicator-placement': 'inside',
                lacement:'bottom-right'
            }),
            lacement:'bottom-right',
            meta: () => h('span', {}, `耗时:${cach.differenceNumber.value}ms`),
            action: () => h(
                NButton,
                {
                    text: true, type: 'primary', onClick: () => hanledNotification(notification)
                },
                {default: () => "关闭"},
            ),
            onClose: () => hanledNotification(notification),
        })
        return notification
    }
    ctx.router.beforeEach((to, from, next) => {
        to.nanoid = ctx.helpers.nanoid()
        let cach = caches[to.nanoid] = {};

        cach.startTime = (new Date()).getTime();
        cach.percentageNumber = ref(0)
        cach.differenceNumber = ref(0)

        cach.beforeAnimationFrame = window.requestAnimationFrame(function fn() {
            cach.percentageNumber.value += Math.floor(Math.random() * 10 + 5)
            let endTime = (new Date()).getTime()
            cach.differenceNumber.value = endTime - cach.startTime > 0 ? endTime - cach.startTime : 0;
            cach.beforeAnimationFrame = window.requestAnimationFrame(fn)
        })
        cach.progress = createProgress(to, cach)
        next()
    })
    ctx.router.afterEach((to, from) => {
        let cach = caches[to.nanoid];
        if (cach) {
            const animationFrame = window.requestAnimationFrame(function fn() {
                if (cach.percentageNumber.value >= 100) {
                    cach.percentageNumber.value = 100;
                    setTimeout(() => {
                        cach.progress && cach.progress.destroy()
                    }, 500)
                    window.cancelAnimationFrame(animationFrame)
                    window.cancelAnimationFrame(cach.beforeAnimationFrame)
                    return
                }
                window.requestAnimationFrame(fn)
            })
        }
    })
}

export default useProgress
