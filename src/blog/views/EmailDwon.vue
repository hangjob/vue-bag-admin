<template>
    <section class="py-[50px] text-white bg-[#0000007F] flex flex-col items-center section-container">
        <h1 class="text-[50px]  font-bold text-center wow animate__animated animate__bounce" data-wow-duration="1.0s" data-wow-delay="0.2s">
            不想下载？</h1>
        <p class=" mb-10 text-center">如果您不想下载可以在下方输入您的邮箱，系统会将最新的源码发送给您...</p>
        <div class="flex justify-center items-center w-[45%]">
            <n-input
                class="wow animate__animated animate__headShake" data-wow-duration="1.0s" data-wow-delay="0.2s"
                v-model="compData.email"
                placeholder="输入你的邮箱"
                size="large"
            />
            <n-button :loading="compData.loading" class="wow animate__animated animate__headShake" data-wow-duration="1.0s"
                       data-wow-delay="0.2s"
                       style="flex-shrink: 0;"  type="success"
                       size="large"
                      @click="handleSendEmail"
            >发送
            </n-button>
        </div>
    </section>
</template>
<script setup>
const compData = reactive({
    email:'',
    loading:false
})
const handleSendEmail = ()=>{

}
</script>
