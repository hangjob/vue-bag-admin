<template>
    <div class="login">
        <div class="login-container">
            <div class="login-content">
                <a-row :gutter="[100,16]">
                    <a-col :xs="0" :sm="0" :md="0" :lg="12" :xl="12">
                        <div class="slide-left"><img src="@/packages/assets/image/01.jpg" alt=""></div>
                    </a-col>
                    <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                        <div class="slide-right">
                            <h2>欢迎您登录</h2>
                            <p>你可以直接输入您的账号和密码登录</p>
                            <a-form autocomplete="off" :rules="rules" ref="formRef" class="login-form" layout="vertical"
                                    :model="formState"
                            >
                                <a-form-item label="你的账户" name="username">
                                    <a-input size="large" v-model:value="formState.username" placeholder="随意输入你的账户" />
                                </a-form-item>
                                <a-form-item label="你的密码" name="password">
                                    <a-input size="large" type="password" v-model:value="formState.password"
                                             placeholder="随意输入你的密码"
                                    />
                                </a-form-item>
                                <a-form-item>
                                    <div class="login-options">
                                        <a-checkbox v-model:checked="formState.rememberPas">七天记住我</a-checkbox>
                                        <span class="hover-text-underline">忘记密码? 找回密码</span>
                                    </div>
                                </a-form-item>
                                <a-form-item>
                                    <div class="login-btn">
                                        <button @click="handleLogin">登录</button>
                                    </div>
                                </a-form-item>
                            </a-form>
                            <p style="text-align: center">没有账号? 注册账号</p>
                        </div>
                    </a-col>
                </a-row>
                <img class="embe embe1" src="@/packages/assets/image/01.png" alt="">
                <img class="embe embe2 hidden-xs" src="@/packages/assets/image/01.png" alt="">
                <img class="logo hidden-xs hidden-sm" :src="configApp.webSite.logoImage" alt="">
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { inject, ref, toRaw } from 'vue'
import { useRouter } from 'vue-router'
import { defineComponent, reactive, UnwrapRef } from 'vue'
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface'
import { apiLogin } from '@/packages/service/user'
import locaStore from '@/common/utils/persistence'

interface FormState {
    username: string;
    password: string;
    rememberPas: string | boolean
}

import { aseEncrypt, aseDecrypt } from '@/common/utils/crypto'

export default defineComponent({
    name: 'login',
    setup() {
        const router = useRouter()
        const formRef = ref()
        // const appStore = app();
        const rules = {
            username: [
                { required: true, message: '请随意输入你的用户名', trigger: 'blur' },
                { min: 2, max: 30, message: '最小长度为2，最大长度30', trigger: 'blur' },
            ],
            password: [{ required: true, message: '随意输入用户名密码', trigger: 'blur' }],
        }

        const formState: UnwrapRef<FormState> = reactive({
            username: 'superadmin',
            password: '123456',
            rememberPas: false,
        })

        const encryptData = locaStore.get('encryptData')
        if (encryptData) {
            let { username, password, rememberPas } = JSON.parse(aseDecrypt(encryptData))
            formState.username = username
            formState.password = password
            formState.rememberPas = rememberPas
        }

        const handleLogin = () => {
            formRef.value
                .validate()
                .then(() => {
                    apiLogin(formState).then(() => {
                        if (formState.rememberPas) {
                            locaStore.set('encryptData', aseEncrypt(JSON.stringify(formState)), 3600 * 24 * 7)
                        }
                        router.push('/home') // 此处通过菜单节点去读取第一个，默认是跳转home
                    })
                })
                .catch((error: ValidateErrorEntity<FormState>) => {
                    console.log('error', error)
                })
        }

        return {
            handleLogin,
            formState,
            rules,
            formRef,
        }
    },
})
</script>
<style lang="less" scoped>
.login {
    width: 100%;
    height: 100%;
    background: url("/src/packages/assets/image/02.jpg") no-repeat center center;

    &-container {
        width: 75%;
        height: 80%;
        min-height: 500px;
        background-color: #fdfcfa;
        border-radius: 40px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 30px;
        box-sizing: border-box;
    }

    &-content {
        box-sizing: border-box;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .embe {
            position: absolute;
            width: 100px;
        }

        .embe1 {
            bottom: 55px;
            left: -75px;
        }

        .embe2 {
            right: -80px;
            top: 40px;
            transform: rotate(180deg);
        }

        .logo {
            position: absolute;
            left: 50px;
            top: 50px;
            height: 40px;
            object-fit: cover;
        }

        .slide-left {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;

            img {
                width: 100%;
            }
        }

        .slide-right {
            h2 {
                font-size: 30px;
                color: #333333;
            }

            p {
                color: #d2d0d1;
                font-size: 14px;
            }
        }

        .login-form {
            margin-top: 30px;
        }

        .login-options {
            display: flex;
            justify-content: space-between;
        }

        .login-input {
            &:nth-of-type(1) {
                margin-top: 80px;
            }

            margin-bottom: 20px;

            input {
                background-color: #fdeeed;
                border-radius: 10px;
                padding: 12px 10px;
                width: 80%;
                border: none;
                outline: 0;
                font-size: 16px;
            }
        }

        .login-btn {
            width: 100%;
            position: relative;
            z-index: 100;

            button {
                background-image: linear-gradient(to right, #e34c44, #f59178);
                border: none;
                color: white;
                width: 100%;
                padding: 12px 10px;
                text-align: center;
                border-radius: 30px;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                cursor: pointer;
                margin-top: 20px;
            }
        }
    }
}
</style>
