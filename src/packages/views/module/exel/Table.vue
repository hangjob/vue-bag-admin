<template id="root">
    <a-table :columns="columns" size="middle" :bordered="true" :data-source="data" :locale="{emptyText:'暂无数据'}"
             :scroll="{y: windowHeight}" class="ant-table-striped"
             :rowClassName="(record, index) => (index % 2 === 1 ? 'table-striped' : null)"
    >
    </a-table>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, ref } from 'vue'

export default defineComponent({
    props: {
        data: {
            type: Array,
            default: [],
        },
        columns: {
            type: Array,
            default: [],
        },
    },
    data() {
        return {
            windowHeight: 500,
        }
    },
    mounted() {
        // console.log(this.$el.parentElement.offsetHeight) // 使用 setup 和 mounted 获取dom 同样的效果
    },
    setup() {
        const windowHeight = ref(0)
        onMounted(() => {
            const internalInstance: any = getCurrentInstance()
            if (internalInstance.ctx.$el) {
                windowHeight.value = internalInstance.ctx.$el.parentElement.offsetHeight - 150 // size 默认时，表格会大很多，撑开了外层滚动条，看起来不是很好看
            }
        })
        return {
            windowHeight,
        }
    },
})
</script>

<style scoped>
.ant-table-striped :deep(.table-striped) td {
    background-color: #fafafa;
}
</style>
