import { NButton, NAvatar,NProgress } from "naive-ui";
import {ref} from "vue"
const useProgress = (ctx)=>{
    const percentage = ref(0);
    const difference = ref(1)
    let speed = 20,timer=null,isStop = false;
    const cache = []
    const clearMemory = (progress,timer)=>{
        if(progress && timer){ // 手动清楚
            progress && progress.destroy();
            timer && clearInterval(timer)
        }else{
            // 自动清楚
            cache.forEach(({p,t})=>{
                setTimeout(()=>{
                    p && p.destroy()
                },500)
                t && clearInterval(t)
            })
        }
    }
    const createProgress = (to,t)=>{
        percentage.value = 0;
        difference.value = 0;
        const progress = ctx?.naive?.notification?.create({
            title: `${to.meta?.title()}-页面数据加载中...`,
            content: ()=>h(NProgress,{
                text: true,
                type: "line",
                status:"success",
                percentage:percentage.value,
                'indicator-placement':'inside',
            }),
            meta: ()=>h('span',{},`耗时:${difference.value}ms`),
            action: () => h(
                NButton,
                { text: true, type: 'primary', onClick: () => clearMemory(progress,t)},
                { default: () => "关闭" },
            ),
            onClose: () => clearMemory(progress,t)
        })
        return progress;
    }
    ctx.router.beforeEach((to, from, next) => {
        let startTime = (new Date()).getTime()
        const timer = setInterval(()=>{
            percentage.value += Math.floor(Math.random()*10+3)
            let endTime = (new Date()).getTime()
            difference.value = endTime - startTime > 0  ? endTime - startTime : 0;
            if(!isStop && percentage.value >= 99){
                percentage.value = 99;
                return
            }
            if(isStop && percentage.value >= 100){
                percentage.value = 100;
                clearMemory()
            }
        },speed)
        cache.push({p:createProgress(to,timer),t:timer})
        next()
    })
    ctx.router.afterEach((to, from) => {
        isStop = true;
    })
}

export default useProgress
