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
                            <a-form class="login-form" :layout="formState.layout" :model="formState">
                                <a-form-item label="你的账户">
                                    <a-input size="large" v-model:value="formState.username" placeholder="输入你的账户"/>
                                </a-form-item>
                                <a-form-item label="你的密码">
                                    <a-input size="large" v-model:value="formState.password" placeholder="输入你的密码"/>
                                </a-form-item>
                                <a-form-item>
                                    <div class="login-options">
                                        <a-checkbox-group v-model:value="formState.password">
                                            <a-checkbox value="1" name="type">记住我</a-checkbox>
                                        </a-checkbox-group>
                                        <span>忘记密码? 找回密码</span>
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
                <img class="embe embe2" src="@/packages/assets/image/01.png" alt="">
                <img class="logo hidden-xs hidden-sm" src="@/packages/assets/image/yanghang.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {inject, ref} from 'vue'
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import locaStore from '@/packages/utils/persistence'
import {computed, defineComponent, reactive, UnwrapRef} from 'vue';

interface FormState {
    layout: 'horizontal' | 'vertical' | 'inline';
    username: string;
    password: string;
}

export default defineComponent({
    name: 'login',
    setup() {
        const pas = ref('');
        const store = useStore()
        const router = useRouter();

        const handleLogin = () => {
            if (formState.password) {
                locaStore.set('token', formState.password, 3600 * 12);
                store.commit('user/updateToken');
                router.push('/home')
            }
        }

        const formState: UnwrapRef<FormState> = reactive({
            layout: 'vertical',
            username: '',
            password: '',
        });
        return {
            handleLogin,
            pas,
            formState,
        }
    }
})
</script>
<style lang="less" scoped>
.login {
    width: 100%;
    height: 100%;
    background: url("../../assets/image/02.jpg") no-repeat center center;
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
        .embe1{
            bottom: 55px;
            left: -75px;
        }
        .embe2{
            right: -80px;
            top: 40px;
            transform: rotate(180deg);
        }
        .logo{
            position: absolute;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            left: 50px;
            top: 50px;
        }

        .slide-left {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            img{
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

        .login-options{
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
