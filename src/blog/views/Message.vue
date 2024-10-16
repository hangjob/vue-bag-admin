<template>
    <section class="py-[60px] bg-[#00000033]  section-container">
        <h1 class="text-[50px] text-white font-bold text-center">与我联系</h1>
        <p class="text-white mb-10 text-center">如果您有其他的问题请在下方提交留言与我联系（博客使用类问题请加交流群或看手册文档）.</p>
        <n-grid cols="12" item-responsive responsive="screen" :x-gap="30">
            <n-grid-item class="message-input wow animate__animated animate__bounce" data-wow-duration="1.0s"
                    data-wow-delay="0.2s" span="12 m:12 l:4"
            >
                <n-input
                    v-model="compData.fromData.name"
                    placeholder="你的名字"
                    size="large"
                />
            </n-grid-item>
            <n-grid-item class="message-input wow animate__animated animate__bounce" data-wow-duration="1.4s"
                    data-wow-delay="0.2s" span="12 m:12 l:4"
            >
                <n-input
                    v-model="compData.fromData.email"
                    placeholder="你的邮箱"
                    size="large"
                />
            </n-grid-item>
            <n-grid-item class="message-input wow animate__animated animate__bounce" data-wow-duration="1.8s"
                    data-wow-delay="0.2s" span="12 m:12 l:4"
            >
                <n-input
                    v-model="compData.fromData.url"
                    placeholder="你的站点/可为空"
                    size="large"
                />
            </n-grid-item>
        </n-grid>
        <div class="flex mt-3">
            <n-input
                class="wow animate__animated animate__fadeInUp" data-wow-duration="1.0s" data-wow-delay="0.2s"
                v-model="compData.fromData.message"
                :rows="6"
                type="textarea"
                maxlength="500"
                show-word-limit
                placeholder="留言内容"
            />
        </div>
        <div class="flex justify-end mt-3">
            <n-button class="wow animate__animated animate__fadeInUp" data-wow-duration="1.4s" data-wow-delay="0.2s"
                       @click="handleSave" :icon="Edit" type="success" size="large" :disabled="compData.disabled"
            >
                {{ compData.text }}
            </n-button>
        </div>
    </section>
</template>
<script setup>
const compData = reactive({
    fromData:{
        email: '',
        name: '',
        url: '',
        message: '',
    },
    text:'提交留言',
    disabled:false
})
</script>
