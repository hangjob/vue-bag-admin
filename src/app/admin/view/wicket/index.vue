<template>
    <n-card :segmented="{content: true,footer:true}" footer-style="padding:10px">
        <template #header>
            窗口通信
        </template>
        <div>
            <n-space vertical>
                <div>
                    <n-button @click="compData.handleClickRefresh">
                        只打开一个打开新窗口
                    </n-button>
                </div>
                <div>
                    <n-space>
                        <n-input style="width: 100%" v-model:value="compData.value" type="text" placeholder="需要发送的消息" />
                        <n-button @click="compData.handleClickNoRefresh">
                            只打开一个打开新窗口无刷新
                        </n-button>
                    </n-space>
                </div>
            </n-space>
        </div>
    </n-card>
</template>
<script lang="ts">
import {defineComponent, reactive} from "vue"
export default defineComponent({
    setup(){
        const channel = new BroadcastChannel("wicket")
        const compData = reactive({
            value:"发送消息"+new Date(),
            handleClickRefresh(){
                window.open("/","wicket")
            },
            handleClickNoRefresh(){
                const wicket = localStorage.getItem("wicket")
                if(wicket){
                    channel.postMessage(compData.value)
                }else{
                    compData.handleClickRefresh()
                    localStorage.setItem("wicket","1")
                }
            }
        })
        return {
            compData
        }
    }
})
</script>
