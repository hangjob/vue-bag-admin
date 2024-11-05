<template>
    <div class="login-warp relative h-full w-full overflow-hidden box-border">
        <n-el tag="div"
              style="background-color: var(--base-color);"
              class="z-10 p-10 absolute max-sm:w-[85%] w-[65%] h-[75%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl overflow-hidden">
            <n-grid item-responsive responsive="screen" :x-gap="0" cols="12" class="h-full">
                <n-gi span="0 m:0 l:6">
                    <div class="flex flex-col justify-center h-full items-center">
                        <img src="@/packages/assets/xwc.svg" class="w-[90%] object-cover" alt="">
                    </div>
                    <div class="absolute top-5 left-5">
                        <img src="@/packages/assets/logo-streamer.png" class="w-[80px] object-cover" alt="">
                    </div>
                </n-gi>
                <n-gi span="12 m:12 l:6">
                    <div v-if="compData.panel === 'login'"
                         class="flex flex-col justify-center h-full animate__animated">
                        欢迎您登录
                        <n-h1 class="my-1">Vue-Bag-Admin</n-h1>
                        <n-p class="my-1 text-slate-400 mb-10">你可以直接输入您的账号和密码登录</n-p>
                        <n-form autocomplete="off" :rules="compData.rules" ref="formLoginRef" class="login-form"
                                layout="vertical"
                                :model="compData.login"
                        >
                            <n-form-item label="用户名" path="username">
                                <n-input :maxlength="20" autocomplete="off" v-model:value="compData.login.username"
                                         placeholder="输入你的用户名">
                                </n-input>
                            </n-form-item>
                            <n-form-item label="密码" path="password">
                                <n-input :maxlength="20" type="password" autocomplete="off" v-model:value="compData.login.password"
                                         placeholder="输入你的密码">
                                </n-input>
                            </n-form-item>
                            <n-form-item class="mt-[-30px]">
                                <n-space class="w-full" justify="space-between">
                                    <n-checkbox v-model:checked="compData.login.memorization"
                                                style="margin-right: 12px">
                                        七天记住我
                                    </n-checkbox>
                                    <n-text depth="3" class="cursor-pointer" @click="handlePanelCut('forget')">忘记密码?
                                        <n-text class="cursor-pointer" @click.stop="handlePanelCut('register')">
                                            没有账号
                                        </n-text>
                                    </n-text>
                                </n-space>
                            </n-form-item>
                            <n-form-item class="mt-[-30px]">
                                <n-button  :loading="compData.loginLoading" class="w-full" type="primary" @click="handleLogin"
                                          attr-type="submit">登录
                                </n-button>
                            </n-form-item>
                        </n-form>
                    </div>
                    <div v-if="compData.panel === 'register'"
                         class="flex flex-col justify-center h-full animate__animated animate__bounce">
                        <n-h1 class="my-1">注册账号</n-h1>
                        <n-p class="my-1 text-slate-400 mb-10">你可以直接输入您的账号和密码登录</n-p>
                        <n-form autocomplete="off" :rules="compData.rules" ref="formRegisterRef" class="login-form"
                                layout="vertical"
                                :model="compData.register"
                        >
                            <n-form-item label="用户名" path="username">
                                <n-input :maxlength="20" autocomplete="off" v-model:value="compData.register.username"
                                         placeholder="输入你的用户名">
                                </n-input>
                            </n-form-item>
                            <n-form-item label="手机号" path="phone">
                                <n-input :maxlength="20" autocomplete="off" v-model:value="compData.register.phone"
                                         placeholder="输入你手机号">
                                </n-input>
                            </n-form-item>
                            <n-form-item label="验证码" path="code">
                                <n-input :maxlength="20" autocomplete="off" v-model:value="compData.register.code"
                                         placeholder="输入你的验证码">
                                </n-input>
                            </n-form-item>
                            <n-form-item label="密码" path="password">
                                <n-input :maxlength="20" type="password" autocomplete="off" v-model:value="compData.register.password"
                                         placeholder="输入你的密码">
                                </n-input>
                            </n-form-item>
                            <n-form-item class="mt-[-30px]">
                                <n-space class="w-full" justify="space-between">
                                    <n-text style="margin-right: 12px">
                                        已有账号，前往登录
                                    </n-text>
                                    <n-tag type="info" @click.stop="handlePanelCut('login')" class="cursor-pointer">
                                        前往登录
                                    </n-tag>
                                </n-space>
                            </n-form-item>
                            <n-form-item class="mt-[-30px]">
                                <n-button class="w-full" type="primary" @click="handleRegister"
                                          attr-type="submit">注册
                                </n-button>
                            </n-form-item>
                        </n-form>
                    </div>
                    <div v-if="compData.panel === 'forget'"
                         class="flex flex-col justify-center h-full animate__animated animate__shakeX">
                        <n-h1 class="my-1">忘记密码</n-h1>
                        <n-p class="my-1 text-slate-400 mb-10">你可以直接输入您的账号和密码登录</n-p>
                        <n-form autocomplete="off" :rules="compData.rules" ref="formForgetRef" class="login-form"
                                layout="vertical"
                                :model="compData.forget"
                        >
                            <n-form-item label="手机号" path="phone">
                                <n-input :maxlength="20" autocomplete="off" v-model:value="compData.forget.phone"
                                         placeholder="输入你手机号">
                                </n-input>
                            </n-form-item>
                            <n-form-item label="验证码" path="code">
                                <n-input :maxlength="20" autocomplete="off" v-model:value="compData.forget.code"
                                         placeholder="输入你的验证码">
                                </n-input>
                            </n-form-item>
                            <n-form-item label="新密码" path="password">
                                <n-input :maxlength="20" autocomplete="off" type="password" v-model:value="compData.forget.password"
                                         placeholder="输入你的密码">
                                </n-input>
                            </n-form-item>
                            <n-form-item class="mt-[-30px]">
                                <n-space class="w-full" justify="space-between">
                                    <n-text style="margin-right: 12px">
                                        知道密码，前往登录
                                    </n-text>
                                    <n-tag type="info" @click.stop="handlePanelCut('login')" class="cursor-pointer">
                                        前往登录
                                    </n-tag>
                                </n-space>
                            </n-form-item>
                            <n-form-item class="mt-[-30px]">
                                <n-button class="w-full" type="primary" @click="handleForget"
                                          attr-type="submit">重置密码
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
import {LogoIonic, LogoPinterest, MoonOutline, SunnyOutline} from "@/packages/helpers/Icon.js"
import {UserLogin, UserRegister} from "@/app/api"
import {getCrypto} from "@/packages/helpers/index.js";

const imgs = ["bg_1.jpg", "bg_2.jpg", "bg_3.jpg"]
const compData = reactive({
    panel: 'login',
    imgName: 'bg_1.jpg',
    rules: {
        username: [
            {
                required: true,
                message: '请输入用户名',
                trigger: ['input', 'blur']
            },
        ],
        password: [
            {
                required: true,
                message: '请输入密码',
                trigger: ['input', 'blur']
            },
        ],
        phone: [
            {
                required: true,
                message: '请输入手机号',
                trigger: ['input', 'blur']
            },
        ],
        code: [
            {
                required: true,
                message: '请输入验证码',
                trigger: ['input', 'blur']
            },
        ],
    },
    login: {
        username: 'admin',
        phone: '',
        password: '123456',
        memorization: false
    },
    loginLoading: false,
    register: {
        username: '',
        phone: '',
        code: '',
        password: ''
    },
    forget: {
        username: '',
        phone: '',
        password: ''
    },
    handleUpdateImg() {
        const idx = Math.floor(Math.random() * 2)
        compData.imgName = idx === 0 ? imgs[2] : imgs[idx]
    },
    railStyle({focused, checked}) {
        return {
            background: "rgba(255, 255, 255,0)",
            boxShadow: "0 0 0 0px"
        }
    }
})
const login = $global.helpers.lscache.get('login')
if (login) {
    compData.login = login
}
const imgList = computed(() => new URL(`../../assets/${compData.imgName}`, import.meta.url).href)
const formLoginRef = ref();
const formRegisterRef = ref();
const formForgetRef = ref();
const handleForget = (ctx) => {
    const method = UserRegister(compData[compData.panel])
    method.send()
    // $global.apis.AuthLocal.url='/ceshi/url'
    // $global.apis.AuthLocal.httpPost(compData.form).then((res)=>{
    //     console.log(res)
    // })
    // const method = ctx.apis.AuthLocal.httpPost(compData.form)
    // method.baseURL = '/api2'
    // method.url = '/edit/api/url'
    // method.send().then((res) => {
    //     console.log(res)
    // })
    // console.log($global.router.push('/'))
}

const handleRegister = (e) => {
    e.preventDefault()
    formRegisterRef.value?.validate((errors) => {
        if (!errors) {
            const method = UserRegister(compData[compData.panel])
            method.send().then((res) => {
                $global.naive.message.success('注册成功')
                compData.panel = 'login'
            })
        }
    })
}

const handleLogin = (e) => {
    e.preventDefault()
    formLoginRef.value?.validate((errors) => {
        if (!errors) {
            const method = UserLogin(compData[compData.panel])
            compData.loginLoading = true
            method.send().then((res) => {
                if (compData.login.memorization) {
                    $global.helpers.lscache.set('login', compData.login)
                } else {
                    $global.helpers.lscache.remove('login')
                }
                $global.naive.message.success('登录成功')
                $global.helpers.lscache.set('token', res.data.token)
                $global.router.push('/')
            }).finally(()=>{
                compData.loginLoading = false
            })
        }
    })
}

const handlePanelCut = (str) => {
    compData.panel = str;
}
</script>
