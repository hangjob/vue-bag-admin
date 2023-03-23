<template>
    <div class="regcon">
        <div class="slide-right">
            <h2>欢迎您注册</h2>
            <p>你可以直接输入您的账号和密码注册</p>
            <a-form autocomplete="off" :rules="rules" ref="formRef" class="login-form" layout="vertical"
                    :model="formState"
            >
                <a-form-item label="你的账户" name="username">
                    <a-input size="large" v-model:value="formState.username" autocomplete="off" placeholder="输入你的账户" />
                </a-form-item>
                <a-form-item label="你的密码" name="password">
                    <a-input size="large" type="password" autocomplete="off" v-model:value="formState.password"
                             placeholder="输入你的密码"
                    />
                </a-form-item>
                <a-form-item label="输入密码" name="password2">
                    <a-input size="large" type="password" autocomplete="off" v-model:value="formState.password2"
                             placeholder="在次输入你的密码"
                    />
                </a-form-item>
                <a-form-item class="hidden-xs hidden-sm hidden-md">
                    <div class="login-options">
                        <a-checkbox v-model:checked="formState.rememberPas">七天记住我</a-checkbox>
                        <span class="hover-text-underline">忘记密码? 找回密码</span>
                    </div>
                </a-form-item>
                <a-form-item>
                    <div class="login-btn">
                        <button @click="handleLogin">注册</button>
                    </div>
                </a-form-item>
            </a-form>
            <p class="register">
                <span @click="handleTrigger">已有账号? 前往登录</span>
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, UnwrapRef } from 'vue'
import { useRouter } from 'vue-router'
import locaStore from '@/common/utils/persistence'
import { aseDecrypt, aseEncrypt } from '@/common/utils/crypto'
import { apiLegister, apiLogin } from '@/packages/service/user'
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface'
import { ConfigProvider } from 'ant-design-vue'
import { utils } from 'pm-utils'

interface FormState {
    username: string;
    password: string;
    rememberPas: string | boolean
}


export default defineComponent({
    setup(props, { emit }) {
        const router = useRouter()
        const formRef = ref()
        const formState: UnwrapRef<FormState> = reactive({
            username: '',
            password: '',
            rememberPas: false,
        })
        
        let validatePass2 = async (_rule: any, value: any) => {
            if (value === '') {
                return Promise.reject('输入用户名密码')
            } else if (value !== formState.password) {
                return Promise.reject('在次输入密码有误')
            } else {
                return Promise.resolve()
            }
        }
        
        const rules = {
            username: [
                { required: true, message: '请输入你的用户名', trigger: 'blur' },
                { min: 2, max: 30, message: '最小长度为2，最大长度30', trigger: 'blur' },
            ],
            password: [{ required: true, message: '输入用户名密码', trigger: 'blur' }],
            password2: [{ required: true, validator: validatePass2, trigger: 'blur' }],
        }
        
        
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
                    apiLegister(formState).then(() => {
                        if (formState.rememberPas) {
                            locaStore.set('encryptData', aseEncrypt(JSON.stringify(formState)), 3600 * 24 * 7)
                        }
                        apiLogin(formState).then((res: any) => {
                            if (utils.dataType(res) === 'string') {
                                localStorage.setItem('token', res)
                            }
                            router.push('/home') // 此处通过菜单节点去读取第一个，默认是跳转home
                        })
                    })
                })
                .catch((error: ValidateErrorEntity<FormState>) => {
                    console.log('error', error)
                })
        }
        
        const handleTrigger = () => {
            emit('handleTrigger', true)
        }
        
        return {
            handleLogin,
            formState,
            rules,
            formRef,
            handleTrigger,
        }
    },
})
</script>
<style lang="less" scoped>
.register {

}
</style>
