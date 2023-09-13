<template>
    <n-card :bordered="false" style="height: 100%" content-style="padding:0;height:100%">
        <div class="login-set">
            <n-space>
                <n-switch :rail-style="railStyle">
                    <template #checked-icon>
                       <n-icon>
                           <LogoIonic/>
                       </n-icon>
                    </template>
                    <template #unchecked-icon>
                        <n-icon>
                            <LogoPinterest/>
                        </n-icon>
                    </template>
                </n-switch>
                <n-switch :rail-style="railStyle" @update:value="compData.handleDarkTheme" v-model:value="darkTheme" size="medium">
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
        <div class="login">
            <div class="login_bg" :class="[darkTheme ? 'black' : null]"></div>
            <div class="login-container">
                <div class="embellish left">
                    <div class="embellish-up">
                        <div class="up_2"></div>
                        <div class="up_1"></div>
                    </div>
                    <div class="embellish-down"></div>
                </div>
                <div class="embellish right">
                    <div class="embellish-up">
                        <div class="up_1"></div>
                        <div class="up_2"></div>
                    </div>
                    <div class="embellish-down"></div>
                </div>
                <div class="login-content">
                    <n-grid cols="24" :x-gap="10" :y-gap="10" item-responsive responsive="screen">
                        <n-grid-item span="0 m:0 l:12">
                            <div class="slide-left">
                                <img src="@/packages/assets/xwc.svg" alt="">
                            </div>
                        </n-grid-item>
                        <n-grid-item span="24 m:24 l:12">
                            <div class="slide-right">
                                <n-h1>欢迎您登录</n-h1>
                                <n-text depth="3">你可以直接输入您的账号和密码登录</n-text>
                                <n-form autocomplete="off" :rules="rules" ref="formRef" class="login-form" layout="vertical"
                                        :model="compData.form"
                                >
                                    <n-form-item label="你的账户" name="username">
                                        <n-input size="large" autocomplete="off" v-model:value="compData.form.username" placeholder="输入你的账户"/>
                                    </n-form-item>
                                    <n-form-item label="你的密码" name="password">
                                        <n-input size="large" type="password" autocomplete="off" v-model:value="compData.form.password"
                                                 placeholder="输入你的密码"
                                        />
                                    </n-form-item>
                                </n-form>
                                <n-space style="margin-bottom: 10px" justify="space-between">
                                    <n-checkbox v-model:checked="compData.form.rememberPas">七天记住我</n-checkbox>
                                    <n-text depth="3">忘记密码? 找回密码</n-text>
                                </n-space>
                                <n-space justify="space-between" :size="[10,15]" vertical>
                                    <n-button style="width: 100%" @click="handleLogin">登录</n-button>
                                    <n-text style="text-align: right" depth="3" @click="handleTrigger">没有账号? 注册账号</n-text>
                                </n-space>
                            </div>
                        </n-grid-item>
                    </n-grid>
                    <img class="logo hidden-xs hidden-sm" src="@/packages/assets/logo.png" alt="">
                </div>
            </div>
        </div>
    </n-card>
</template>
<script lang="ts">
import {defineComponent, ref,reactive,CSSProperties} from "vue"
import {useRouter} from "vue-router"
import appStore from "@/packages/pinia/app.ts"
export default defineComponent({
    name: "login",
    setup() {
        const router = useRouter()
        const formRef = ref()
        const trigger = ref(true)
        const app = appStore()
        const {themeName} = app.userSetting
        const compData = reactive({
            form:{},
            handleDarkTheme(value){
                app.userSetting.themeName = value ? "darkTheme" : null
            }
        })
        const rules = {
            username: [
                {required: true, message: "请输入你的用户名", trigger: "blur"},
                {min: 2, max: 30, message: "最小长度为2，最大长度30", trigger: "blur"},
            ],
            password: [{required: true, message: "输入用户名密码", trigger: "blur"}],
        }


        const handleLogin = () => {

        }

        const handleTrigger = () => {
            trigger.value = !trigger.value
        }

        return {
            handleLogin,
            compData,
            rules,
            formRef,
            handleTrigger,
            trigger,
            darkTheme: themeName !== null,
            railStyle: ({focused,checked}: {
                focused: boolean
                checked: boolean
            }) => {
                const style: CSSProperties = {}
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
        }
    },
})
</script>
<style lang="less">
.login {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    .login_bg{
        background: url("https://w.wallhaven.cc/full/jx/wallhaven-jxyowm.png") no-repeat center center;
        background-size: cover;
        filter: blur(5px) brightness(1);
        position: absolute;
        top: -8px;
        right: -8px;
        bottom: -8px;
        left: -8px;
        &.black{
            filter: blur(5px) brightness(0.75);
        }
    }

    &-container {
        width: 75%;
        height: 80%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: relative;
        .embellish{
            width: 60px;
            height: 45px;
            position: absolute;
            &.left{
                bottom: 60px;
                left: -45px;
                .embellish-up{
                    .up_2{
                        margin-right: 10px;
                    }
                }
                .embellish-down{
                    margin-left: 30px;
                }
            }
            &.right{
                right: -45px;
                top: 40px;
                .embellish-up{
                    .up_1{
                        margin-right: 10px;
                    }
                }
                .embellish-down{
                    margin-left: -30px;
                }
            }
            .embellish-up{
                display: flex;
                align-items: center;
                .up_1{
                    width: 60px;
                    height: 12px;
                    border-radius: 20px;
                    background-color: var(--n-color);
                }
                .up_2{
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;

                    background-color: var(--n-color);
                    flex-shrink: 0;
                }
            }
            .embellish-down{
                margin-top: 10px;
                width: 60px;
                height: 12px;
                border-radius: 20px;
                background-color:var(--n-color);
            }
        }
    }

    &-content {
        box-sizing: border-box;
        height: 100%;
        position: relative;
        display: flex;
        z-index: 100;
        padding: 30px;
        border-radius: 30px;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        background-color: var(--n-color);
        .logo {
            position: absolute;
            left: 25px;
            top: 25px;
            height: 25px;
            object-fit: cover;
        }

        .slide-right{
            margin-top: 10px;
        }
        .slide-left {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            img {
                width: 80%;
                object-fit: cover;
                transform: rotateY(180deg);
            }
        }
        .login-form {
            margin-top: 30px;
        }
    }
}
.login-set{
    position: fixed;
    top: 10px;
    right: 15px;
    color: #333333;
    z-index: 10;
}
</style>
