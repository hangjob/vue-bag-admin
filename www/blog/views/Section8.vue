<template>
    <section class="section section-container">
        <div class="section-title">
            <h1>不想下载？</h1>
            <p>如果您不想下载可以在下方输入您的邮箱，系统会将最新的源码发送给您..</p>
        </div>
        <div class="action">
            <vs-input size="large"    placeholder="输入您的邮箱" v-model="value1" style="margin-right: 5px;" />
            <vs-button color="success" type="filled" icon="forward_to_inbox">发送</vs-button>
        </div>
    </section>
</template>
<script>
import {defineComponent, ref} from 'vue'
export default defineComponent({
    setup(){
        const value1 = ref('')
        return {
            value1
        }
    }
})
</script>
<style lang="less" scoped>
.section{
    padding-top: 30px;
    padding-bottom: 30px;
    background: rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
    color: #FFFFFF;

    &-title {
        text-align: center;
        margin-bottom: 40px;
        text-align: center;
        h1{
            font-size: 50px;
            font-weight: bold;
        }
    }
    .action{
        display: flex;
        justify-content: center;
        margin-top: 60px;
    }
}
</style>
