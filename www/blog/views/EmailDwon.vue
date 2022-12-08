<template>
    <section class="section section-container">
        <div class="section-title">
            <h1 class="wow animate__animated animate__bounce" data-wow-duration="1.0s" data-wow-delay="0.2s">不想下载？</h1>
            <p>如果您不想下载可以在下方输入您的邮箱，系统会将最新的源码发送给您...</p>
        </div>
        <div class="action">
            <el-input
                class="wow animate__animated animate__headShake" data-wow-duration="1.0s" data-wow-delay="0.2s"
                v-model="email"
                placeholder="输入你的邮箱"
                size="large"
                style="width:200px;margin-right:10px"
            />
            <el-button :loading="loading" class="wow animate__animated animate__headShake" data-wow-duration="1.0s" data-wow-delay="0.2s"
                       style="flex-shrink: 0;" v-debounce="{ func: handleSendEmail,wait:1000}" type="success" size="large"
            >发送
            </el-button>
        </div>
    </section>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue'
import {userSendEmail} from '@www/blog/service'
import {ElNotification} from 'element-plus'
import {ElMessage} from 'element-plus'
import {regular} from 'pm-utils'
import {Search} from '@element-plus/icons-vue'

export default defineComponent({
    setup() {
        const email = ref('')
        const loading = ref(false)
        let isSend = true;
        const handleSendEmail = () => {
            if (!isSend) {
                return
            }
            if (email.value) {
                if (!regular.checkEmail(email.value)) {
                    return ElNotification({
                        title: '提示',
                        message: `请输入正确的邮箱格式`,
                        type: 'error',
                    })
                }
                userSendEmail({userEmail: email.value}).then((res: any) => {
                    if (res.data.code === 1) {
                        ElNotification({
                            title: '邮件通知',
                            message: `发送成功，${email.value}`,
                            type: 'success',
                        })
                        isSend = false;
                    } else {
                        ElNotification({
                            title: '邮件通知',
                            message: `发送失败，请检查邮箱是否填写正确，${email.value}`,
                            type: 'error',
                        })
                    }
                }).catch(() => {
                    ElNotification({
                        title: '邮件通知',
                        message: `发送失败，请检查邮箱是否填写正确，${email.value}`,
                        type: 'error',
                    })
                })
            } else {
                return ElNotification({
                    title: '提示',
                    message: `你输入的到邮箱地址是空`,
                    type: 'error',
                })
            }
        }
        return {
            email,
            handleSendEmail,
            Search,
            loading
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
