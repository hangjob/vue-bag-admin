<template>
	<yxs-view>
		<h1>当前用户权限：{{ roles }}</h1>
		<br/>
		<a-button type="primary" v-auth="['zbdl']">zbdl招标代理有权限</a-button>
		<br> <br>
		<a-button type="primary" v-auth="['zj']">zj专家没有权限</a-button>
		<br> <br>
		<a-button type="primary" v-auth="['jgr']">jgr监管人有权限</a-button>
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