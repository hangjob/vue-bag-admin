<template>
    <div class="login" :style="{backgroundImage: `url(${getImageFullPath(siteInfo.loginbg)})`}">
        <div class="sign-content">
            <div class="tab">
                <ul>
                    <li @click="form.active = item.name" :class="form.activeClass(item)" v-for="item in form.tabs"
                        :key="item"
                    >{{ item.name }}
                    </li>
                </ul>
            </div>
            <div class="tab-content" v-if="form.active === form.tabs[1].name">
                <div class="phone-group">
                    <div class="prefix">
                        <span>账号</span>
                    </div>
                    <div class="line-show"></div>
                    <div class="phone-input">
                        <input :class="form.usernameClass" @blur="form.handleBlurUsername" v-model="form.username"
                               type="text" placeholder="输入您的账号昵称4~16个字符"
                        >
                    </div>
                </div>
                <div class="phone-group">
                    <div class="phone-input">
                        <input :class="form.captchaClass" @blur="form.handleBlurCaptcha" v-model="form.password"
                               type="password"
                               placeholder="输入6位以上的密码"
                        >
                    </div>
                    <div class="msg-btn">
                        生成随机密码
                    </div>
                </div>
                <it-button v-debounce="{ func: form.register}" :disabled="form.loading" :loading="form.loading"
                           style="margin-top: 20px;padding-top: 10px;padding-bottom: 10px"
                           type="primary" block
                >注册/登录
                </it-button>
            </div>
            <div class="tab-content" v-if="form.active === form.tabs[0].name">
                <div class="phone-group">
                    <div class="prefix">
                        <span>账号</span>
                    </div>
                    <div class="line-show"></div>
                    <div class="phone-input">
                        <input :class="form.usernameClass" @blur="form.handleBlurUsername" v-model="form.username"
                               type="text" placeholder="输入您的账号"
                        >
                    </div>
                </div>
                <div class="phone-group">
                    <div class="phone-input">
                        <input :class="form.passwordClass" @blur="form.handleBlurPassword" v-model="form.password"
                               type="password"
                               placeholder="输入您的密码"
                        >
                    </div>
                </div>
                <it-button v-debounce="{ func: form.submit, params: {title:'登录成功'}}" :loading="form.loading"
                           style="margin-top: 20px;padding-top: 10px;padding-bottom: 10px"
                           type="primary" block
                >登录
                </it-button>
            </div>
            <div class="tab-tip">
                未注册昵称验证后自动登录，注册即代表同意
            </div>
            <div class="sign-social">
                <div class="social-title">社交帐号登录</div>
                <div class="social-group">
                    <div><span>QQ</span><i class="bag-icon-qq" style="color: #60c84d"></i></div>
                    <div><span>微信</span><i class="bag-icon-weixin" style="color: #50c8fd"></i></div>
                    <div><span>微博</span><i class="bag-icon-weibo" style="color: #fb6622"></i></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent, inject, reactive} from 'vue'
import {memberCreate, userLogin, userUserinfo} from '@/bag-web/service/app'
import {useRouter} from "vue-router";
import {ElNotification, ElMessage} from 'element-plus'
import appStore from "@/bag-web/pinia/app";
import userStore from "@/bag-web/pinia/user";

export default defineComponent({
    setup() {
        const router = useRouter()
        const user = userStore()
        const form = reactive({
            tabs: [{name: '密码登录'}, {name: '账号注册'}],
            active: '密码登录',
            usernameClass: '',
            passwordClass: '',
            captchaClass: '',
            activeClass: (item: any) => {
                return item.name === form.active ? 'active' : null
            },
            username: '',
            password: '',
            captcha: '',
            loading: false,
            handleBlurUsername: () => {
                if (form.username === '') {
                    form.usernameClass = 'error-mask'
                }
            },
            handleBlurCaptcha: () => {
                if (form.password === '') {
                    form.captchaClass = 'error-mask'
                }
            },
            handleBlurPassword: () => {
                if (form.password === '') {
                    form.passwordClass = 'error-mask'
                }
            },
            submit: ({title}: { title: string }) => {
                if (form.username && form.password) {
                    form.loading = true
                    userLogin({username: form.username, password: form.password}).then(() => {
                        ElNotification({
                            title,
                            duration: 1000,
                            type: 'success',
                            message: `${form.username} 账户登录成功`,
                        })
                        router.push('/home').then(() => {
                            userUserinfo().then((res) => {
                                user.userInfo = res
                            })
                        })
                    }).finally(() => {
                        form.loading = false
                    })
                }
            },
            register: () => {
                if (form.username && form.password) {
                    const uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
                    if (!uPattern.test(form.username)) {
                        ElMessage({
                            message: '用户名由字母，数字，下划线，减号组成',
                            type: 'warning',
                        })
                        return
                    }
                    memberCreate({username: form.username, password: form.password}).then(() => {
                        form.submit({title: '注册成功'})
                    })
                }
            },
        })
        const {getImageFullPath} = inject<any>('bagGlobal')
        const {siteInfo} = appStore()
        return {
            form,
            siteInfo,
            getImageFullPath
        }
    },
})
</script>
<style lang="less" scoped>
.login {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;

    .sign-content {
        box-sizing: border-box;
        margin: auto;
        background-color: #FFFFFF;
        border-radius: var(--bag-border-radius-base);
        width: 400px;
        position: relative;

        .tab {
            padding: 0 var(--bag-padding-base);

            ul {
                li {
                    display: inline-block;
                    height: 60px;
                    font-size: 16px;
                    line-height: 60px;
                    margin-right: 24px;
                    cursor: pointer;
                    position: relative;

                    &.active {
                        font-weight: bold;
                    }

                    &.active:before {
                        display: block;
                        position: absolute;
                        bottom: 0;
                        content: "";
                        width: 100%;
                        height: 3px;
                        background-color: #0084ff;
                    }
                }
            }
        }

        .tab-content {
            padding: 0 var(--bag-padding-base);

            .phone-group {
                display: flex;
                margin-top: 24px;
                border-bottom: 1px solid #ebebeb;
                align-items: center;
                height: 48px;
                position: relative;

                .line-show {
                    width: 1px;
                    height: 22px;
                    margin: 0 12px;
                    background: #ebebeb;
                }

                .phone-input {
                    display: flex;
                    flex: 1;

                    input {
                        width: 100%;
                        height: 48px;
                        display: inline-block;
                        outline: none;
                        flex: 1 1;
                        padding: 0;
                        overflow: hidden;
                        font-family: inherit;
                        font-size: inherit;
                        font-weight: inherit;
                        background: transparent;
                        border: none;
                        resize: none;

                        &.error-mask::placeholder {
                            color: red;
                        }
                    }
                }

                .msg-btn {
                    position: absolute;
                    top: 24px;
                    right: 0;
                    padding: 4px 0;
                    color: #175199;
                    transform: translateY(-50%);
                    cursor: pointer;
                }
            }
        }

        .tab-tip {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 12px 24px;
            color: grey;
            font-size: 13px;
            margin-top: var(--bag-margin-base);
        }

        .sign-social {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #8590a6;
            height: 60px;
            line-height: 60px;
            padding: 0 var(--bag-padding-base);

            .social-group {
                display: flex;
                align-items: center;

                div {
                    display: flex;
                    align-items: center;
                    margin-left: 10px;

                    span {
                        font-size: 16px;
                    }

                    i {
                        font-size: 16px;
                        margin-left: 5px;
                    }

                    .social-title {

                    }
                }
            }
        }
    }
}
</style>
