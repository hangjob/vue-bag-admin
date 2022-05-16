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

export default defineComponent({
    setup() {
        const email = ref('')
        const handleSendEmail = () => {
            userSendEmail()
        }
        return {
            email,
            handleSendEmail
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
