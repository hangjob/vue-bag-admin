<template>
    <bag-view>
        <a-result status="500" title="500" sub-title="对不起，服务器出问题了.">
            <template #extra>
				<a-button type="primary" danger @click="hanleError">单独打开</a-button>
                <a-button type="primary">返回首页</a-button>
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
			router.push('/500')
		}
		return {
			hanleBack,
			hanleError
		}
	}
})
</script>
