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
                    v-model="fromData.name"
                    placeholder="你的名字"
                    size="large"
                    @input="inputFromData"
                />
            </n-grid-item>
            <n-grid-item class="message-input wow animate__animated animate__bounce" data-wow-duration="1.4s"
                    data-wow-delay="0.2s" span="24 m:12 l:8"
            >
                <n-input
                    v-model="fromData.email"
                    placeholder="你的邮箱"
                    size="large"
                    @input="inputFromData"
                />
            </n-grid-item>
            <n-grid-item class="message-input wow animate__animated animate__bounce" data-wow-duration="1.8s"
                    data-wow-delay="0.2s" span="24 m:12 l:8"
            >
                <n-input
                    v-model="fromData.url"
                    placeholder="你的站点/可为空"
                    size="large"
                    @input="inputFromData"
                />
            </n-grid-item>
        </n-grid>
        <div class="action">
            <n-input
                class="wow animate__animated animate__fadeInUp" data-wow-duration="1.0s" data-wow-delay="0.2s"
                v-model="fromData.message"
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

export default defineComponent({
    setup() {
        const fromData = reactive({
            email: "",
            name: "",
            url: "",
            message: "",
        })
        const text = ref("提交留言")
        const disabled = ref(true)
        const handleSave = function() {

        }
        const inputFromData = () => {

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
