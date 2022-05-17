<template>
    <section class="section section-container">
        <div class="section-title">
            <h1>不想下载？</h1>
            <p>如果您不想下载可以在下方输入您的邮箱，系统会将最新的源码发送给您...</p>
        </div>
        <div class="action">
            <vs-input size="large" color="rgb(103, 194, 58)" placeholder="输入您的邮箱" v-model="email"
                      style="margin-right: 5px;"
            />
            <vs-button @click="handleSendEmail" color="success" type="filled" icon="forward_to_inbox">发送</vs-button>
        </div>
    </section>
</template>
<script>
import { defineComponent, ref } from 'vue'
import { userSendEmail } from '@www/blog/service'
import { ElNotification } from 'element-plus'
import { ElMessage } from 'element-plus'
import isEmail from '@/bag-utils/regular/isEmail'

export default defineComponent({
    setup() {
        const email = ref('')

        const handleSendEmail = () => {
            if (email.value) {
                if (!isEmail(email.value)) {
                    return ElMessage.error('请输入正确的邮箱格式')
                }
                userSendEmail({ userEmail: email.value }).then((res) => {
                    if (res.data.code === 1) {
                        ElNotification({
                            title: '邮件通知',
                            message: `发送成功，${email.value}`,
                            type: 'success',
                        })
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
                ElMessage.error('请输入邮箱')
            }
        }
        return {
            email,
            handleSendEmail,
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
    }
}
</style>
