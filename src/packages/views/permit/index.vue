<template>
	<yxs-view>
		<a-typography-title :level="5">账号切换</a-typography-title>
		<a-radio-group button-style="solid">
			<a-radio-button value="amin">管理员</a-radio-button>
			<a-radio-button value="test">测试人员</a-radio-button>
			<a-radio-button value="client">客户使用人员</a-radio-button>
			<a-radio-button value="editor">可编辑人员</a-radio-button>
		</a-radio-group>
		<br/><br/>
		<a-typography-title :level="5">描述</a-typography-title>
		<p>当前用户的角色权限 <code>{{roles}}</code></p>
		<br/>
		<a-space>
			<p v-auth="['11']">大大</p>
			<a-button type="primary" v-auth="['admin']">管理员权限</a-button>
			<a-button type="primary" v-auth="['test']">测试人员权限</a-button>
			<a-button type="primary" v-auth="['client']">客户使用人员权限</a-button>
			<a-button type="primary" v-auth="['editor']">可编辑人员权限</a-button>
		</a-space>
		<br/><br/>
		<p>如果需要更颗粒度的权限，需要用到按钮级别的权限</p>
	</yxs-view>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {useStore} from "vuex";

export default defineComponent({
	name: 'permit',
	setup() {
		const store = useStore();
		const roles = store.getters["user/roles"];
		return {
			roles
		}
	}
})
</script>