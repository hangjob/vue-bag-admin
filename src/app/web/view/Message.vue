<template>
    <section class="section section-container">
        <div class="section-title">
            <h1>与我联系</h1>
            <p>如果您有其他的问题请在下方提交留言与我联系（博客使用类问题请加交流群或看手册文档）.</p>
        </div>
        <n-grid cols="24" x-gap="10"  y-gap="30" item-responsive responsive="screen">
            <n-grid-item class="message-input wow animate__animated animate__bounce" data-wow-duration="1.0s"
                    data-wow-delay="0.2s" span="24 m:12 l:8"
            >
                <n-input
                    v-model:value="fromData.name"
                    placeholder="你的名字"
                    size="large"
                    @input="inputFromData"
                />
            </n-grid-item>
            <n-grid-item class="message-input wow animate__animated animate__bounce" data-wow-duration="1.4s"
                    data-wow-delay="0.2s" span="24 m:12 l:8"
            >
                <n-input
                    v-model:value="fromData.email"
                    placeholder="你的邮箱"
                    size="large"
                    @input="inputFromData"
                />
            </n-grid-item>
            <n-grid-item class="message-input wow animate__animated animate__bounce" data-wow-duration="1.8s"
                    data-wow-delay="0.2s" span="24 m:12 l:8"
            >
                <n-input
                    v-model:value="fromData.url"
                    placeholder="你的站点/可为空"
                    size="large"
                    @input="inputFromData"
                />
            </n-grid-item>
        </n-grid>
        <div class="action">
            <n-input
                class="wow animate__animated animate__fadeInUp" data-wow-duration="1.0s" data-wow-delay="0.2s"
                v-model:value="fromData.message"
                :rows="6"
                type="textarea"
                maxlength="500"
                show-word-limit
                placeholder="留言内容"
                @input="inputFromData"
            />
        </div>
        <div class="sbumit">
            <n-button class="wow animate__animated animate__fadeInUp" data-wow-duration="1.4s" data-wow-delay="0.2s"
                       @click="handleSave" type="success" size="large" :disabled="disabled"
            >
                <template #icon>
                    <n-icon>
                        <CreateOutline/>
                    </n-icon>
                </template>
                {{ text }}
            </n-button>
        </div>
    </section>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { webLeaveCreate } from "@/app/web/service"
import {useNotification} from "naive-ui"
function validateEmail (email) {
    // 邮箱验证正则
    let reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/
    return reg.test(email)
}
export default defineComponent({
    setup() {
        const notification = useNotification()
        const fromData = reactive({
            email: "",
            name: "",
            url: "",
            message: "",
        })
        const text = ref("提交留言")
        const disabled = ref(true)
        const handleSave = function() {
            webLeaveCreate(fromData).then((res: any) => {
                if (res.data.code === 1) {
                    notification.success({
                        title: "留言通知",
                        content: "留言成功，感谢你的提交，我会尽快反馈",
                    })
                    fromData.message = ""
                    inputFromData()
                } else {
                    notification.error({
                        title: "留言通知",
                        content: "留言失败，请检查是否正确填写",
                        type: "error",
                    })
                }
            }).catch(() => {
                notification.error({
                    title: "留言通知",
                    content: "留言失败，请检查是否正确填写",
                    type: "error",
                })
            })
        }
        const inputFromData = () => {
            if (fromData.email) {
                if (!validateEmail(fromData.email)) {
                    text.value = "邮箱格式不正确"
                } else {
                    text.value = "提交留言"
                }
            }
            disabled.value = !(fromData.email && validateEmail(fromData.email) && fromData.name && fromData.message)
        }
        return {
            fromData,
            handleSave,
            inputFromData,
            disabled,
            text,
        }
    },
})
</script>
<style lang="less" scoped>
.section {
    padding-top: 60px;
    padding-bottom: 60px;
    background: rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;

    &-title {
        text-align: center;
        margin-bottom: 40px;
        color: #FFFFFF;

        h1 {
            font-size: 50px;
            font-weight: bold;
            margin-bottom: 10px;
        }

    }

    .action {
        display: flex;
        margin-top: 10px;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .sbumit {
        display: flex;
        justify-content: end;
    }
}
</style>
<style lang="less">
.message-input {
    margin-bottom: 10px;

    > div {
        width: 100%;
    }
}
</style>
