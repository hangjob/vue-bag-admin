<template>
    <yxs-view>
        <a-typography-title :level="5">账号切换</a-typography-title>
        <a-radio-group v-model:value="radioValue" button-style="solid">
            <a-radio-button value="admin">管理员</a-radio-button>
            <a-radio-button value="test">测试人员</a-radio-button>
            <a-radio-button value="client">客户使用人员</a-radio-button>
            <a-radio-button value="editor">可编辑人员</a-radio-button>
        </a-radio-group>
        <br/><br/>
        <a-typography-title :level="5">描述</a-typography-title>
        <p>当前用户的角色权限 <code>{{ roles }}</code></p>
        <br/>
        <a-space v-if="visible">
            <a-button type="primary" v-auth="['admin']">admin管理员权限</a-button>
            <a-button type="primary" v-auth="['test']">test测试人员权限</a-button>
            <a-button type="primary" v-auth="['client']">client客户使用人员权限</a-button>
            <a-button type="primary" v-auth="['editor']">editor可编辑人员权限</a-button>
        </a-space>
        <br/><br/>
        <a-typography-text type="warning">v-auth权限指令如果是button禁用则显示禁用状态，否则不渲染该标签</a-typography-text>
        <br/><br/>
        <a-space>
            <p v-auth="[pauth]">admin权限控制html标签是否展示</p>
            <a-button type="primary" danger @click="handleUpdata">测试数据更改</a-button>
        </a-space>
        <br/><br/>
    </yxs-view>
</template>
<script lang="ts">
import {computed, defineComponent, ref, watchEffect, watch} from 'vue'
import {useStore} from "vuex";
import {notification} from 'ant-design-vue';
import {apiUserinfo} from '@/packages/service/user'

export default defineComponent({
    name: 'permit',
    setup() {
        const store = useStore();
        const roles = computed(() => store.getters["user/roles"]);
        const pauth = ref('admin');
        const visible = ref(true);
        const radioValue = ref(store.getters["user/userinfo"].type)
        const handleUpdata = () => {
            if (pauth.value === 'client') {
                notification['info']({
                    message: '提示',
                    description: '如果需要更颗粒度的权限，需要用到按钮级别的权限',
                });
            }
            pauth.value = 'client';
        }

        watch([radioValue], () => {
            visible.value = false;
            apiUserinfo({type: radioValue.value}).then((res: any) => {
                store.commit('user/updateUserinfo', res)
                visible.value = true;
            })
        })

        return {
            roles,
            handleUpdata,
            pauth,
            radioValue,
            visible
        }
    }
})
</script>
