<template>
	<yxs-form-table>
		<div class="table-action">
			<div class="table-action-btn">
				<a-space :size="20">
					<a-button type="primary" size="middle">刷新</a-button>
					<a-button class="yxs-button-color-green" size="middle" @click="visible = true,activeKey = '1'">新增
					</a-button>
					<a-button type="primary" danger size="middle">删除</a-button>
				</a-space>
			</div>
			<div class="table-action-search hidden-xs">
				<a-input-search
					v-model:value="value"
					placeholder="输入关键词搜索"
					enter-button
				/>
			</div>
		</div>
		<a-table rowKey="id" :columns="columns" size="middle" :bordered="true" :data-source="data"
				 :row-selection="rowSelection" @expand="expand">
			<template #icon="{ record }">
				<component :is="record.icon"></component>
			</template>
			<template #action="{ record }">
				<a-space>
					<a-button type="primary" size="small">编辑</a-button>
					<a-button type="primary" danger size="small">删除</a-button>
				</a-space>
			</template>
		</a-table>
	</yxs-form-table>
	<yxs-modal v-model:visible="visible" title="新增" width="1000px" @ok="handleOk">
		<add ref="add" :treeData="data"/>
	</yxs-modal>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue';
import add from './menu/add.vue'
import edit from './menu/edit.vue'
import {apiFindAll} from '@/packages/service/app'
import {toTree} from '@/packages/utils/utils'

const formatter = (item: any) => {
	return item.text === true ? '是' : '否'
}
const columns = [
	{
		title: '名称',
		dataIndex: 'name',
		key: 'name',
		align: 'center',
		ellipsis: true
	},
	{
		title: '图标',
		dataIndex: 'icon',
		key: 'icon',
		width: 80,
		align: 'center',
		ellipsis: true,
		slots: {customRender: 'icon'},
	},
	{
		title: '类型',
		dataIndex: 'type',
		key: 'type',
		ellipsis: true,
		align: 'center',
	},
	{
		title: '节点路由',
		dataIndex: 'path',
		key: 'path',
		ellipsis: true,
		align: 'center',
	},
	{
		title: '文件路径',
		dataIndex: 'filePath',
		key: 'filePath',
		ellipsis: true,
		align: 'center',
	},
	{
		title: 'iframe',
		dataIndex: 'iframePath',
		key: 'iframePath',
		ellipsis: true,
		align: 'center',
	},
	{
		title: '外链',
		dataIndex: 'httpViewPath',
		key: 'httpViewPath',
		ellipsis: true,
		align: 'center',
	},
	{
		title: '路由缓存',
		dataIndex: 'keepAlive',
		key: 'keepAlive',
		align: 'center',
		ellipsis: true,
		width: 90,
		customRender: (item: any) => {
			return formatter(item)
		}
	},
	{
		title: 'Tab切换',
		dataIndex: 'tabHidden',
		key: 'tabHidden',
		align: 'center',
		ellipsis: true,
		width: 90,
		customRender: (item: any) => {
			return formatter(item)
		}
	},
	{
		title: '固定菜单',
		dataIndex: 'tabFix',
		key: 'tabFix',
		align: 'center',
		ellipsis: true,
		width: 90,
		customRender: (item: any) => {
			return formatter(item)
		}
	},
	{
		title: '是否显示',
		dataIndex: 'shows',
		key: 'shows',
		align: 'center',
		width: 90,
		customRender: (item: any) => {
			return formatter(item)
		}
	},
	{
		title: '更新时间',
		dataIndex: 'updateTime',
		key: 'updateTime',
		align: 'center',
		ellipsis: true,
		width: 200
	},
	{
		title: '操作',
		key: 'action',
		align: 'center',
		slots: {customRender: 'action'},
	}
];
const rowSelection = {
	onChange: (selectedRowKeys: (string | number)[], selectedRows: any) => {
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
	onSelect: (record: any, selected: boolean, selectedRows: any) => {
		console.log(record, selected, selectedRows);
	},
	onSelectAll: (selected: boolean, selectedRows: any, changeRows: any) => {
		console.log(selected, selectedRows, changeRows);
	},
};
const columns2 = JSON.parse(JSON.stringify(columns))
export default defineComponent({
	name: 'sys-menu',
	components: {
		add, edit
	},
	setup() {
		const value = ref('')
		const data = ref();
		const add = ref();
		const visible = ref(false);
		const activeKey = ref('1');
		const handleOk = () => {
			add.value.onSubmit().then(() => {
				visible.value = false;
			}).catch((error: any) => {
				console.log(error)
			})
		}

		apiFindAll().then(res => {
			data.value = toTree(res);
			console.log(data.value)
		})

		const expand = (expanded: boolean, record: any) => {

		}

		return {
			data,
			add,
			columns,
			columns2,
			rowSelection,
			value,
			visible,
			activeKey,
			handleOk,
			expand,
		};
	},
});
</script>
<style lang="less" scoped>
.table-action {
	padding: 15px;
	display: flex;
	justify-content: space-between;
}
</style>

