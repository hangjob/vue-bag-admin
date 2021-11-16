<template>
	<yxs-view>
		刚才建设的
		<input type="text" v-model="val">
	</yxs-view>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue'

export default defineComponent({
	name:'dsad-dsadsasda',
	setup() {
		const val = ref();
		val.value = 2222
		return {
			val
		}
	}
})
</script>