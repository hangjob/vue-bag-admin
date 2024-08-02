<template>
    <div class="login-warp h-full w-full">
        <div class="z-10 p-10 absolute bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md overflow-hidden">
            <n-grid item-responsive responsive="screen" :x-gap="5" cols="12">
                <n-gi span="12 m:12 l:5">2222</n-gi>
                <n-gi span="12 m:12 l:7">
                    <n-h3 class="text-[20px]">{{ $globalStore.webSite.title }}</n-h3>
                    <n-form autocomplete="off" :rules="compData.rules" ref="formRef" class="login-form"
                            layout="vertical"
                            :model="compData.form"
                    >
                        <n-form-item label="用户名" path="name">
                            <n-input :maxlength="20" autocomplete="off" v-model:value="compData.form.username"
                                     placeholder="输入你的用户名">
                            </n-input>
                        </n-form-item>
                        <n-form-item label="邮箱" path="name">
                            <n-input :maxlength="20" autocomplete="off" v-model:value="compData.form.email"
                                     placeholder="输入你的邮箱">
                            </n-input>
                        </n-form-item>
                        <n-form-item label="密码" path="name">
                            <n-input :maxlength="20" autocomplete="off" v-model:value="compData.form.password"
                                     placeholder="输入你的密码">
                            </n-input>
                        </n-form-item>
                        <n-form-item>
                            <n-button type="primary" @click="handleSubmit($global)" attr-type="submit">登录</n-button>
                        </n-form-item>
                    </n-form>
                </n-gi>
            </n-grid>
        </div>
        <div class="h-full w-full absolute bg-no-repeat blur-sm top-0 left-0 bottom-0 bg-center right-0 z-1 object-cover" :style="{backgroundImage: `url(${imageList})`}"></div>
    </div>
</template>
<script setup>
const compData = reactive({
    imgName:'bg_1.jpg',
    rules:[],
    form:{
        username:'',
        email:'',
        password:''
    }
})
const imageList = computed(() => new URL(`../../assets/${compData.imgName}`, import.meta.url).href)
const handleSubmit = ($global)=>{
    console.log($global.apis.AuthLocalRegister)
    $global.apis.AuthLocalRegister.httpPost(compData.form).then(()=>{
        console.log(11)
    })
}
</script>
<style lang="less" scoped>
.login-warp {
    &_container{

    }
}
</style>
