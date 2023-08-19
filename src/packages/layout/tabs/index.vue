<template>
    <n-el tag="div" class="scrollbar">
        <div  @click="handleArrowScroll('prev')" class="arrow arrow-prev">
            <n-icon size="18" color="var(--primary-color)">
                <ChevronBackOutline/>
            </n-icon>
        </div>
        <div class="tabs" ref="tabsRefs">
            <template v-if="app.tabs.length">
                <n-el @click="compData.handleActionRouter(item)" v-for="(item,idx) in app.tabs" :key="idx" tag="div" :class="['tabs-item',item.meta.id === app.currentRouter.meta.id ? 'active' : null]">
                    <component class="icon" v-if="item.meta.icon" :is="item.meta.icon"></component>
                    <span>{{item.meta.title}}</span>
                    <n-icon class="icon-close" @click.stop="compData.handleColseRouter(item)" v-if="compData.isClose(item)">
                        <CloseOutline/>
                    </n-icon>
                </n-el>
            </template>
        </div>
        <div @click="handleArrowScroll('next')" class="arrow arrow-next">
            <n-icon size="18" color="var(--primary-color)">
                <ChevronForwardOutline/>
            </n-icon>
        </div>
        <div class="arrow arrow-more">
            <n-dropdown
                :options="compData.tabsMore"
                placement="bottom-start"
                trigger="click"
                @select="compData.handleMoreSelect"
            >
                <n-icon size="18">
                    <SmileOutlined/>
                </n-icon>
            </n-dropdown>
        </div>
    </n-el>
</template>
<script lang="ts">
import {defineComponent, reactive, h, ref} from "vue"
import {ChevronBackOutline,ChevronForwardOutline,CloseOutline} from "@vicons/ionicons5"
import {SmileOutlined} from "@vicons/antd"
import appStore from "@/packages/pinia/app.ts"
import {tabsMore} from "@/packages/config/map.ts"
import {useRouter} from "vue-router"

export default defineComponent({
    components:{
        ChevronBackOutline,
        ChevronForwardOutline,
        CloseOutline,
        SmileOutlined
    },
    setup(){
        const app = appStore()
        const tabsRefs = ref<HTMLElement | null>(null)
        const router = useRouter()
        let step = 0
        const handleArrowScroll = (direction="prev")=>{
            if(direction==="next" && step === 0){
                return
            }
            direction === "next" ? step += 300 : step -= 300
            tabsRefs.value.setAttribute("style",`transform: translateX(${step}px)`)
        }
        const compData = reactive({
            tabsMore,
            isClose(){
                return app.tabs.length > 1
            },
            handleActionRouter(item){
                router.push(item.meta.path)
            },
            handleColseRouter(item){
                const idx = app.tabs.findIndex((k)=>k.meta.id===item.meta.id)
                const current = app.tabs[idx-1]
                if(current){
                    router.push(current.meta.path)
                }
                app.tabs.splice(idx, 1)
            },
            handleMoreSelect(){

            }
        })
        return {
            compData,
            app,
            tabsRefs,
            handleArrowScroll
        }
    }
})
</script>
<style lang="less" scoped>
.scrollbar{
    height: 40px;
    position: relative;
    white-space: nowrap;
    border-bottom: 1px solid var(--divider-color);
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    .arrow{
        position: relative;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        flex-shrink: 0;
        z-index: 999;
        box-sizing: border-box;
        background-color: var(--n-color);
        &.arrow-next{
            border-left: 1px solid var(--divider-color);
        }
        &.arrow-prev{
            border-right: 1px solid var(--divider-color);
        }
        &.arrow-more{
            border-left: 1px solid var(--divider-color);
        }
    }
    .tabs{
        overflow: visible;
        position: relative;
        transition: transform .5s ease-in-out;
        white-space: nowrap;
        display: flex;
        height: 40px;
        flex: 1;
        padding: 5px;
        float: left;
        box-sizing: border-box;
        width: calc(100% - 120px);
        &-item{
            cursor: pointer;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 5px;
            padding: 0 8px;
            border-radius: 3px;
            box-sizing: border-box;
            border: 1px solid var(--border-color);
            transition: all .3s;
            .icon{
                padding-right: 3px;
            }
            .icon-close{
                font-size: 0;
                transition: all .3s;
            }
            &:hover{
               .icon-close{
                   padding-left: 5px;
                   font-size: 18px;
                   &:hover{
                       color: var(--primary-color);
                   }
               }
            }
            &.active{
                &:hover{
                    .icon-close{
                        color: var(--primary-color);
                    }
                }
                border: 1px solid var(--primary-color);
            }
        }
    }
}
</style>
