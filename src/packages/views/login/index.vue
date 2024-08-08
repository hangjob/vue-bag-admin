<template>
    <div class="login-warp h-full w-full">
        <div
            class="z-10 p-10 absolute bg-white w-[65%] h-[75%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl overflow-hidden">
            <n-grid item-responsive responsive="screen" :x-gap="5" cols="12" class="h-full">
                <n-gi span="12 m:12 l:6">
                    <div class="flex flex-col justify-center h-full items-center">
                        <!--                        <img src="@/packages/assets/xwc.svg" class="w-[80%] object-cover" alt="">-->
                    </div>
                </n-gi>
                <n-gi span="12 m:12 l:6">
                    <div class="flex flex-col justify-center h-full">
                        <n-h1 class="my-1">欢迎您登录-品茗科技</n-h1>
                        <n-p class="my-1">你可以直接输入您的账号和密码登录</n-p>
                        <n-h3 class="text-[20px]">{{ $globalStore.webSite.title }}</n-h3>
                        <n-form autocomplete="off" :rules="compData.rules" ref="formRef" class="login-form"
                                layout="vertical"
                                :model="compData.form"
                        >
<!--                            <n-form-item label="用户名" path="name">-->
<!--                                <n-input :maxlength="20" autocomplete="off" v-model:value="compData.form.username"-->
<!--                                         placeholder="输入你的用户名">-->
<!--                                </n-input>-->
<!--                            </n-form-item>-->
<!--                            <n-form-item label="邮箱" path="name">-->
<!--                                <n-input :maxlength="20" autocomplete="off" v-model:value="compData.form.email"-->
<!--                                         placeholder="输入你的邮箱">-->
<!--                                </n-input>-->
<!--                            </n-form-item>-->
<!--                            <n-form-item label="密码" path="name">-->
<!--                                <n-input :maxlength="20" autocomplete="off" v-model:value="compData.form.password"-->
<!--                                         placeholder="输入你的密码">-->
<!--                                </n-input>-->
<!--                            </n-form-item>-->
<!--                            <n-form-item class="mt-[-30px]">-->
<!--                                <n-space class="w-full" justify="space-between">-->
<!--                                    <n-checkbox v-model:checked="compData.memorization" style="margin-right: 12px">-->
<!--                                        七天记住我-->
<!--                                    </n-checkbox>-->
<!--                                    <n-text depth="3">忘记密码? 找回密码</n-text>-->
<!--                                </n-space>-->
<!--                            </n-form-item>-->
                            <n-form-item>
                                <n-button class="w-full" type="primary" @click="handleSubmit($global)"
                                          attr-type="submit">登录
                                </n-button>
                            </n-form-item>
                        </n-form>
                    </div>
                </n-gi>
            </n-grid>
        </div>
        <div
            class="h-full w-full absolute bg-no-repeat blur-sm top-0 left-0 bottom-0 bg-center right-0 z-1 object-cover"
            :style="{backgroundImage: `url(${imageList})`}"></div>
    </div>
</template>
<script setup>
const compData = reactive({
    imgName: 'bg_1.jpg',
    rules: [],
    memorization: false,
    form: {
        identifier: 'test1232',
        // email: '',
        password: '123456Aa'
    }
})
const imageList = computed(() => new URL(`../../assets/${compData.imgName}`, import.meta.url).href)
const handleSubmit = ($global) => {
    console.log($global.apis.AuthLocalRegister)
    // $global.apis.AuthLocalRegister.httpPost(compData.form).then(() => {
    //     console.log(11)
    // })
    // $global.apis.AuthLocal.url += '/ssss/ss'
    // $global.apis.AuthLocal.httpPost(compData.form).then(() => {
    //     console.log(11)
    // })
    // $global.apis.Menus.url += '/1'
}
</script>
<style lang="less" scoped>
.login-warp {
    &_container {

    }
}
</style>
