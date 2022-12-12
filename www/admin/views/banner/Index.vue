<template>
    <bag-curd-table :createForm="createForm" :editForm="editForm" :tableCurd="tableCurd">
        <template #searchTime="{formState,item}">
            <a-date-picker valueFormat="YYYY-MM-DD" v-model:value="formState[item.name]" />
        </template>
    </bag-curd-table>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import curdTableHock, { initTableHock } from '@/packages/hook/table'
import columns from './columns'
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
dayjs.locale('zh-cn');
export default defineComponent({
    setup() {
        const { tableCurd } = curdTableHock()
        const form = reactive(initTableHock({
            columns, tableCurd, options: {
                apiPrefix: '/web/banner',
            },
        }))
        tableCurd.create.width = '600px'
        tableCurd.edit.width = '65%'
        form.formItem.forEach((item) => {
            if (item.key === 'type') {
                setTimeout(() => {
                    const list = ref([{ name: '类型1', value: 0 }, { name: '类型2', value: 2 }])
                    item.formData.options.push(...list.value)
                }, 2000)
            }
        })
        return {
            tableCurd,
            editForm: {...form},
            createForm: {...form},
        }
    },
})
</script>
