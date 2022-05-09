<template>
    <section class="section section-container">
        <div class="section-title">
            <h1>与我联系</h1>
            <p>如果您有其他的问题请在下方提交留言与我联系（博客使用类问题请加交流群或看手册文档）.</p>
        </div>
        <div class="action">
            <vs-input size="large" color="rgb(233, 102, 86)" label-placeholder="RGB: rgb(233, 102, 86)" placeholder="你的名字" v-model="value1" />
            <vs-input size="large" color="rgb(233, 102, 86)" label-placeholder="RGB: rgb(233, 102, 86)"  placeholder="你的邮件" v-model="value1" />
            <vs-input size="large" color="rgb(233, 102, 86)" label-placeholder="RGB: rgb(233, 102, 86)"  placeholder="主题" v-model="value1" />
        </div>
        <div class="action">
            <vs-textarea style="background-color: #fff" label="留言内容" height="200px" />
        </div>
        <div class="sbumit">
            <vs-button color="success" size="large" type="filled" icon="drive_file_rename_outline">提交留言</vs-button>
        </div>
    </section>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return {
            value1: '',
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
        }

    }
    .action {
        display: flex;
        margin-top: 10px;
        justify-content: space-between;
    }
    .sbumit{
        display: flex;
        justify-content: end;
    }
}
</style>
