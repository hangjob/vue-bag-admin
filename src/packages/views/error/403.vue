<template>
	<bag-view>
		<a-result status="403" title="抱歉" sub-title="对不起，您访问的页面权限不足.">
			<template #extra>
				<a-space>
					<a-button type="primary" danger @click="hanleError">单独打开</a-button>
					<a-button type="primary" @click="hanleBack">返回首页</a-button>
				</a-space>
			</template>
		</a-result>
	</bag-view>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {useRouter} from "vue-router";

export default defineComponent({
	setup() {
		const router = useRouter()
		const hanleBack = () => {
			router.push('/home')
		}
		const hanleError = () => {
			router.push('/403')
		}
		return {
			hanleBack,
			hanleError
		}
	}
})
</script>
