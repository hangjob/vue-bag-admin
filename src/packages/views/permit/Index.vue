<template>
    <bag-view>
        <a-typography-title :level="5">账号切换</a-typography-title>
        <a-radio-group v-model:value="radioValue" button-style="solid">
            <a-radio-button value="admin">管理员</a-radio-button>
            <a-radio-button value="test">测试人员</a-radio-button>
            <a-radio-button value="client">客户使用人员</a-radio-button>
            <a-radio-button value="editor">可编辑人员</a-radio-button>
        </a-radio-group>
        <br /><br />
        <a-typography-title :level="5">描述</a-typography-title>
        <p>当前用户的角色权限 <code>{{ roles }}</code></p>
        <br />
        <a-space v-if="visible">
            <a-button type="primary" v-auth="['admin']">admin管理员权限</a-button>
            <a-button type="primary" v-auth="['view']">view查看人员权限</a-button>
            <a-button type="primary" v-auth="['test']">test测试人员权限</a-button>
            <a-button type="primary" v-auth="['client']">client客户使用人员权限</a-button>
            <a-button type="primary" v-auth="['editor']">editor可编辑人员权限</a-button>
        </a-space>
        <br /><br />
        <a-typography-text type="warning">v-auth权限指令如果是button禁用则显示禁用状态，否则不渲染该标签</a-typography-text>
        <br /><br />
        <a-space>
            <p v-auth="[pauth]">admin权限控制html标签是否展示</p>
            <a-button type="primary" danger @click="handleUpdata">测试数据更改</a-button>
        </a-space>
        <br /><br />
        <a-space v-if="visible">
            <p v-auth="['admin']">admin测试不是button元素</p><br />
            <p v-auth="['test']">test测试不是button元素</p><br />
            <p v-auth="['editor']">editor测试不是button元素</p><br />
            <p v-auth="['client']">client测试不是button元素</p><br />
        </a-space>
    </bag-view>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watchEffect, watch } from 'vue'
import { notification } from 'ant-design-vue'
import { toClipboard } from '@soerenmartius/vue3-clipboard'
import userPinia from '@/packages/pinia/user'

export default defineComponent({
    name: 'permit',
    setup() {
        const userStore = userPinia()
        const roles = computed(() => userStore.userInfo.roles)
        const pauth = ref('admin')
        const visible = ref(true)
        const radioValue = ref(userStore.userInfo.type)
        const handleUpdata = () => {
            if (pauth.value === 'client') {
                notification['info']({
                    message: '提示',
                    description: '如果需要更颗粒度的权限，需要用到按钮级别的权限',
                })
            }
            pauth.value = 'client'
        }

        watch([radioValue], () => {
            const obj: any = {}
            if (radioValue.value === 'admin') {
                obj.username = 'admin'
                obj.password = '123456'
                obj.name = '管理员'
            }
            if (radioValue.value === 'test') {
                obj.username = '海洋花'
                obj.password = '123456'
                obj.name = '测试员'
            }
            if (radioValue.value === 'client') {
                obj.username = '大鲸鱼'
                obj.password = '123456'
                obj.name = '查看员'
            }
            if (radioValue.value === 'editor') {
                obj.username = '海洋花'
                obj.password = '123456'
                obj.name = '编辑员'
            }
            toClipboard(`账号：${obj.username}，密码：${obj.password}`).then(() => {
                notification['success']({
                    message: `已复制：${obj.name}账号`,
                    duration: 10,
                    description: `账号：${obj.username}，密码：${obj.password}`,
                })
            })
        })

        return {
            roles,
            handleUpdata,
            pauth,
            radioValue,
            visible,
        }
    },
})
</script>
