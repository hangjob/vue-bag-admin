<template>
    <div class="login-warp relative h-full w-full overflow-hidden box-border">
        <n-el tag="div"
              style="background-color: var(--base-color);"
              class="z-10 p-10 absolute max-sm:w-[85%] w-[65%] h-[75%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl overflow-hidden">
            <n-grid item-responsive responsive="screen" :x-gap="0" cols="12" class="h-full">
                <n-gi span="0 m:0 l:6">
                    <!--                    <div class="flex flex-col justify-center h-full items-center">-->
                    <!--                        <img src="@/packages/assets/xwc.svg" class="w-[90%] object-cover" alt="">-->
                    <!--                    </div>-->
                </n-gi>
                <n-gi span="12 m:12 l:6">
                    <div class="flex flex-col justify-center h-full">
                        <!--                        <n-h1 class="my-1">欢迎您登录</n-h1>-->
                        <!--                        <n-p class="my-1">你可以直接输入您的账号和密码登录</n-p>-->
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
                            <n-form-item class="mt-[-30px]">
                                <n-space class="w-full" justify="space-between">
                                    <n-checkbox v-model:checked="compData.memorization" style="margin-right: 12px">
                                        七天记住我
                                    </n-checkbox>
                                    <n-text depth="3">忘记密码? 找回密码</n-text>
                                </n-space>
                            </n-form-item>
                            <n-form-item class="mt-[-30px]">
                                <n-button class="w-full" type="primary" @click="handleSubmit($global)"
                                          attr-type="submit">登录
                                </n-button>
                            </n-form-item>
                        </n-form>
                    </div>
                </n-gi>
            </n-grid>
        </n-el>
        <div
            :class="['absolute transition-all duration-200 bg-no-repeat box-border blur-sm top-[-10px] left-[-10px] bottom-[-10px] right-[-10px] bg-center z-1 object-cover',$globalStore.configs.isDarkMode ? 'brightness-75' : null]"
            :style="{backgroundImage: `url(${imgList})`}"></div>
        <div class="absolute right-5 top-3">
            <n-space>
                <n-switch @update:value="compData.handleUpdateImg" :railStyle="compData.railStyle">
                    <template #checked-icon>
                        <LogoIonic/>
                    </template>
                    <template #unchecked-icon>
                        <LogoPinterest/>
                    </template>
                </n-switch>
                <n-switch :railStyle="compData.railStyle"
                          v-model:value="$globalStore.configs.isDarkMode">
                    <template #checked-icon>
                        <n-icon :size="14">
                            <MoonOutline/>
                        </n-icon>
                    </template>
                    <template #unchecked-icon>
                        <n-icon :size="14">
                            <SunnyOutline/>
                        </n-icon>
                    </template>
                </n-switch>
            </n-space>
        </div>
    </div>
</template>
<script setup>
import {MoonOutline, SunnyOutline, LogoPinterest, LogoIonic} from "@/packages/helpers/Icon.js"

const imgs = ["bg_1.jpg", "bg_2.jpg", "bg_3.jpg"]

const compData = reactive({
    imgName: 'bg_1.jpg',
    rules: [],
    memorization: false,
    form: {
        identifier: 'test1232',
        email: '',
        password: '123456Aa'
    },
    handleUpdateImg() {
        const idx = Math.floor(Math.random() * 2)
        compData.imgName = idx === 0 ? imgs[2] : imgs[idx]
    },
    railStyle({focused, checked}) {
        const style = {}
        if (checked) {
            style.background = "rgb(255, 255, 255,0)"
            if (focused) {
                style.boxShadow = "0 0 0 0px"
            }
        } else {
            style.background = "rgb(255, 255, 255,0)"
            if (focused) {
                style.boxShadow = "0 0 0 0px"
            }
        }
        return style
    }
})
const imgList = computed(() => new URL(`../../assets/${compData.imgName}`, import.meta.url).href)
const handleSubmit = ($global) => {
    // $global.apis.AuthLocal.url='/ceshi/url'
    // $global.apis.AuthLocal.httpPost(compData.form).then((res)=>{
    //     console.log(res)
    // })
    const method = $global.apis.AuthLocal.httpPost(compData.form)
    method.baseURL = '/api2'
    method.url = '/edit/api/url'
    method.send().then((res) => {
        console.log(res)
    })
    // console.log($global.router.push('/'))
}
</script>
