<template>
	<a-layout-content class="layout-container">
		<div v-if="routerView" class="layout-container-view">
			<div class="layout-container-view-content scroll">
				<router-view v-slot="{ Component, route }">
					<keep-alive :include="caches">
						<component :is="Component"/>
					</keep-alive>
				</router-view>
			</div>
		</div>
	</a-layout-content>
</template>
<script lang="ts">
import {computed, defineComponent, ref, watch, inject, nextTick} from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from "vuex";
import {NProgress} from "@/packages/plugin/nprogress";

export default defineComponent({
	setup() {
		const store = useStore()

		const transition = ['slide-left', 'slide-right']
		const transitionName = ref(transition[0])
		const hasOpenComponentsArr = ref<Array<any>>([])

		const route = useRoute()
		const $mitt: any = inject('$mitt');

		const routerView = ref(true);

		watch(
			() => route.path,
			(newIndex, oldIndex) => {
				if (newIndex > oldIndex) {
					transitionName.value = transition[0]
				} else {
					transitionName.value = transition[1]
				}
			}
		)

		$mitt.on('reload-router-view', () => {
			if (!NProgress.status) {
				NProgress.start();
				routerView.value = false
				nextTick(() => {
					routerView.value = true
					NProgress.done()
				})
			}
		})


		/**
		 * 缓存iframe
		 */
		const componentsIframe = () => {
			const menuList = store.getters['app/menuList'];
			const iframeArr: Array<any> = []
			const getIframes = (arr: Array<any>) => {
				arr.some((o: any) => (o['iframe'] && o['iframe'] !== '') && (iframeArr.push(o)) || (getIframes(o['children'] || [])));
			}
			getIframes(menuList)

			iframeArr.forEach((item) => {
				window.__app__.component(item.path, import('@/packages/views/module/iframe/index.vue'));
			});

			hasOpenComponentsArr.value = iframeArr;
		}
		// componentsIframe(); 在考虑如何设计

		/**
		 * keep-live 缓存
		 */
		const caches = computed(() => {
			return store.getters["app/processList"].filter((item: any) => {
				return item.keepAlive === true;
			}).map((item: any) => {
				return item.path.substring(1, item.path.length).replace(/\//g, "-")
			});
		})
		return {
			caches,
			routerView,
			transitionName,
			hasOpenComponentsArr
		}
	}
})
</script>
<style lang="less" scoped>
.layout-container {
	width: 100%;
	box-sizing: border-box;
	flex: 1;
	overflow: hidden;

	&-view {
		height: 100%;
		width: 100%;
		box-sizing: border-box;

		&-content {
			overflow: hidden auto;
			position: relative;
			z-index: 100;
			height: 100%;
			padding: 10px;
			border-radius: 3px;
			box-sizing: border-box;
			//background-color: #f7f7f7;
		}
	}
}
</style>
