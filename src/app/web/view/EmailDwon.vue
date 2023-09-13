<template>
    <section class="section section-container">
        <div class="section-title">
            <h1 class="wow animate__animated animate__bounce" data-wow-duration="1.0s" data-wow-delay="0.2s">
                不想下载？</h1>
            <p>如果您不想下载可以在下方输入您的邮箱，系统会将最新的源码发送给您...</p>
        </div>
        <div class="action">
            <n-input
                class="wow animate__animated animate__headShake" data-wow-duration="1.0s" data-wow-delay="0.2s"
                v-model:value="email"
                placeholder="输入你的邮箱"
                size="large"
                style="width:200px;margin-right:10px"
            />
            <n-button :loading="loading" class="wow animate__animated animate__headShake" data-wow-duration="1.0s"
                      data-wow-delay="0.2s"
                      style="flex-shrink: 0;" @click="handleSendEmail" type="success" size="large"
            >
                <template #icon>
                    <n-icon>
                        <MailUnread/>
                    </n-icon>
                </template>
                {{text}}
            </n-button>
        </div>
    </section>
</template>
<script lang="ts">
import {defineComponent, ref} from "vue"
import {userSendEmail} from "@/app/web/service"
import {useNotification} from "naive-ui"
function validateEmail (email) {
    // 邮箱验证正则
    let reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/
    return reg.test(email)
}
export default defineComponent({
    setup() {
        const email = ref("")
        const text = ref("发送")
        const loading = ref(false)
        let isSend = true
        const notification = useNotification()
        const handleSendEmail = () => {
            if (!isSend) {
                return
            }
            if (email.value) {
                if (!validateEmail(email.value)) {
                    return notification.error({
                        meta: "提示",
                        content: "请输入正确的邮箱格式",
                    })
                }
                text.value = "发送中..."
                userSendEmail({userEmail: email.value}).then((res: any) => {
                    if (res.data.code === 1) {
                        text.value = "发送成功"
                        isSend = false
                    } else {
                        text.value = "发送失败"
                    }
                }).catch(() => {
                    text.value = "发送失败"
                })
            } else {
                return notification.error({
                    meta: "提示",
                    content: "你输入的到邮箱地址是空",
                })
            }
        }
        return {
            email,
            handleSendEmail,
            loading,
            text
        }
    },
})
</script>
<style lang="less" scoped>
.section {
    padding-top: 30px;
    padding-bottom: 30px;
    background: rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
    color: #FFFFFF;

    &-title {
        text-align: center;
        margin-bottom: 40px;

        h1 {
            font-size: 50px;
            font-weight: bold;
            margin-bottom: 10px;
        }
    }

    .action {
        display: flex;
        justify-content: center;
        margin-top: 60px;
        align-items: center;
    }
}
</style>
