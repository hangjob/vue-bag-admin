<template>
	<a-layout style="height: 100%">
		<Slider/>
		<a-layout class="layout" :class="$store.state.app.collapsed ? 'layout-is-collapse' : null">
			<HeaderTop/>
			<HeaderProcess/>
			<LayoutContainer/>
			<div class="layout-footer">
				Yxs Admin ©2021
				<a-typography-link href="//www.vipbic.com">www.vipbic.com</a-typography-link>
			</div>
		</a-layout>
	</a-layout>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import Slider from './slider.vue'
import HeaderTop from './headerTop.vue'
import HeaderProcess from './headerProcess.vue'
import LayoutContainer from './layoutContainer.vue'

export default defineComponent({
	components: {
		Slider,
		HeaderTop,
		HeaderProcess,
		LayoutContainer
	}
});
</script>
<style lang="less" scoped>
.layout {
	display: flex;
	flex-direction: column;
	height: 100%;
	margin-left: 250px;

	&-footer {
		padding: 8px 0;
		text-align: center;
		background-color: #ffffff;
		font-size: 12px;
	}
}

.layout-is-collapse {
	margin-left: 80px;
}
</style>
