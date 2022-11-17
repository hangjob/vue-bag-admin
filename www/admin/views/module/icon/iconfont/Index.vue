<template>
	<bag-view class="icons">
		<a-tabs v-model:activeKey="activeKey">
			<a-tab-pane key="2" tab="日常图标库" force-render>
				<a-row :gutter="[15,20]">
					<a-col :xs="24" :sm="8" :md="8" :lg="6" :xl="3" v-for="item,idx in rcIcons" :key="idx">
						<div class="icons-item" @click="handleToClipboard(item)">
							<i :class="item"></i>
							<span>{{ filterPrefix(item) }}</span>
						</div>
					</a-col>
				</a-row>
			</a-tab-pane>
			<a-tab-pane key="1" tab="管理图标库">
				<a-row :gutter="[15,20]">
					<a-col :xs="24" :sm="8" :md="8" :lg="6" :xl="3" v-for="item,idx in cgIcons" :key="idx">
						<div class="icons-item" @click="handleToClipboard(item)">
							<i :class="item"></i>
							<span>{{ filterPrefix(item) }}</span>
						</div>
					</a-col>
				</a-row>
			</a-tab-pane>
			<a-tab-pane key="3" tab="服饰图标" force-render>
				<a-row :gutter="[15,20]">
					<a-col :xs="24" :sm="8" :md="8" :lg="6" :xl="3" v-for="item,idx in fsIcons" :key="idx">
						<div class="icons-item" @click="handleToClipboard(item)">
							<i :class="item"></i>
							<span class="text-overflow">{{ filterPrefix(item) }}</span>
						</div>
					</a-col>
				</a-row>
			</a-tab-pane>
			<a-tab-pane key="4" tab="系统管理图标" force-render>
				<a-row :gutter="[15,20]">
					<a-col :xs="24" :sm="8" :md="8" :lg="6" :xl="3" v-for="item,idx in xtIcons" :key="idx">
						<div class="icons-item" @click="handleToClipboard(item)">
							<i :class="item"></i>
							<span class="text-overflow">{{ filterPrefix(item) }}</span>
						</div>
					</a-col>
				</a-row>
			</a-tab-pane>
			<a-tab-pane key="5" tab="生活类图标" force-render>
				<a-row :gutter="[15,20]">
					<a-col :xs="24" :sm="8" :md="8" :lg="6" :xl="3" v-for="item,idx in shlIcons" :key="idx">
						<div class="icons-item" @click="handleToClipboard(item)">
							<i :class="item"></i>
							<span class="text-overflow">{{ filterPrefix(item) }}</span>
						</div>
					</a-col>
				</a-row>
			</a-tab-pane>
			<a-tab-pane key="6" tab="天气图标" force-render>
				<a-row :gutter="[15,20]">
					<a-col :xs="24" :sm="8" :md="8" :lg="6" :xl="3" v-for="item,idx in tqIcons" :key="idx">
						<div class="icons-item" @click="handleToClipboard(item)">
							<i :class="item"></i>
							<span class="text-overflow">{{ filterPrefix(item) }}</span>
						</div>
					</a-col>
				</a-row>
			</a-tab-pane>
		</a-tabs>

	</bag-view>
</template>
<script lang="ts">
import {defineComponent, h, ref} from 'vue'
import cgIcons from '@/packages/assets/icon/iconfont/cg-icons';
import rcIcons from '@/packages/assets/icon/iconfont/rc-icons';
import xtIcons from '@/packages/assets/icon/iconfont/xt-icons';
import fsIcons from '@/packages/assets/icon/iconfont/fs-icons';
import tqIcons from '@/packages/assets/icon/iconfont/tq-icons';
import shlIcons from '@/packages/assets/icon/iconfont/shl-icons';

import {toClipboard} from '@soerenmartius/vue3-clipboard'
import {notification} from 'ant-design-vue';

import {toHump} from '@/packages/utils/utils'

export default defineComponent({
	name: 'module-icon-iconfont',
	setup() {

		const activeKey = ref('1')

		const filterPrefix = (item: string) => {
			return item.split('bag-iconfont-')[1];
		}

		const handleToClipboard = (str: string) => {
			toClipboard(`<${toHump(str)}/>`).then((res: any) => {
				let html:Array<any> = [];
				html.push(h('i', {class: str, style: {marginRight: '10px', color: '#52c41a'}},));
				html.push(h('span', {}, `html使用：<i class="${str}"></i>`));
				html.push(h('p', {}, `组件使用：${res.text}`));
				notification['success']({
					message: '复制提示',
					description: h('div', {}, html)
				});
			}).catch((err) => {
				console.log(err)
			})
		}

		return {
			cgIcons,
			rcIcons,
			xtIcons,
			tqIcons,
			fsIcons,
			shlIcons,
			activeKey,
			filterPrefix,
			handleToClipboard
		}
	}
})
</script>
<style lang="less" scoped>
.icons {
	.action {
		margin-bottom: 20px;
	}

	&-item {
		padding: 12px 10px;
		transition: all 0.3s;
		border-radius: 5px;
		background-color: #f0f2f5;
		cursor: pointer;
		display: flex;
		align-items: center;

		span {
			margin-left: 10px;
		}

		&:hover {
			background-color: #ffd43b;
			color: rgba(255, 255, 255, 0.9);

			i {
				font-size: 20px;
			}
		}
	}
}
</style>
