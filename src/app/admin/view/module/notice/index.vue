<template>
    <n-grid :x-gap="12" :y-gap="8" cols="24" item-responsive responsive="screen">
        <n-grid-item span="24 m:12 l:12">
            <n-card title="警示信息 Alert">
                <n-alert title="Default 类型" type="default" closable>
                    默认提示的文案
                </n-alert>
                <n-alert title="Info 类型" type="info" closable>
                    消息提示的文案
                </n-alert>
                <n-alert title="Success 类型" type="success" closable>
                    成功提示的文案
                </n-alert>
                <n-alert title="Warning 类型" type="warning" closable>
                    警告提示的文案
                </n-alert>
                <n-alert title="Error 类型" type="error" closable>
                    错误提示的文案
                </n-alert>
            </n-card>
        </n-grid-item>
        <n-grid-item span="24 m:12 l:12">
           <n-card title="警示信息 Alert">
               <n-alert title="Info 类型" type="info">
                   Gee it's good to be back home
               </n-alert>
               <n-alert title="Success 类型" type="success">
                   Leave it till tomorrow to unpack my case
               </n-alert>
               <n-alert title="Warning 类型" type="warning">
                   Honey disconnect the phone
               </n-alert>
               <n-alert title="Error 类型" type="error">
                   I'm back in the U.S.S.R.
               </n-alert>
           </n-card>
        </n-grid-item>
        <n-grid-item span="24 m:12 l:12">
            <n-card>
                <n-space>
                    <n-button @click="info">
                        信息（Hover不消失）
                    </n-button>
                    <n-button @click="error">
                        错误
                    </n-button>
                    <n-button @click="warning">
                        警告
                    </n-button>
                    <n-button @click="success">
                        成功
                    </n-button>
                    <n-button @click="loading">
                        加载中
                    </n-button>
                    <n-button @click="handleClick">
                        No Party For Cao Dong
                    </n-button>
                </n-space>
            </n-card>
        </n-grid-item>
        <n-grid-item span="24 m:12 l:12">
            <n-card>
                <n-space>
                    <n-button @click="notify('info')">
                        信息
                    </n-button>
                    <n-button @click="notify('success')">
                        成功
                    </n-button>
                    <n-button @click="notify('warning')">
                        警告
                    </n-button>
                    <n-button @click="notify('error')">
                        错误
                    </n-button>
                </n-space>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script lang="ts">
import { defineComponent,h } from "vue"
import { useMessage,NAlert,MessageRenderMessage,useNotification, NotificationType } from "naive-ui"
const renderMessage: MessageRenderMessage = (props) => {
    const { type } = props
    return h(
        NAlert,
        {
            closable: props.closable,
            onClose: props.onClose,
            type: type === "loading" ? "default" : type,
            title: "你看你手上拿的是什么啊",
            style: {
                boxShadow: "var(--n-box-shadow)",
                maxWidth: "calc(100vw - 32px)",
                width: "480px"
            }
        },
        {
            default: () => props.content
        }
    )
}
export default defineComponent({
    setup () {
        const message = useMessage()
        const { error } = useMessage()
        const notification = useNotification()
        function handleClick () {
            error("那东西我们早就不屑啦，哈哈哈", {
                render: renderMessage,
                closable: true
            })
        }
        return {
            handleClick,
            info () {
                message.info(
                    "I don't know why nobody told you how to unfold your love",
                    {
                        keepAliveOnHover: true
                    }
                )
            },
            error () {
                message.error("Once upon a time you dressed so fine")
            },
            warning () {
                message.warning("How many roads must a man walk down")
            },
            success () {
                message.success(
                    "'Cause you walked hand in hand With another man in my place"
                )
            },
            loading () {
                message.loading(
                    "If I were you, I will realize that I love you more than any other guy"
                )
            },
            notify (type: NotificationType) {
                notification[type]({
                    content: "说点啥呢",
                    meta: "想不出来",
                    duration: 2500,
                    keepAliveOnHover: true
                })
            }
        }
    }
})
</script>
<style scoped>
.n-alert:not(:last-child) {
    margin-bottom: 12px;
}
</style>
