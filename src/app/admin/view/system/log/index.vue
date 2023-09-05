<template>
    <n-card :segmented="{content: true,footer:true}">
        <template #header>
            <n-space>
                <n-input v-model:value="form.ip" type="text" placeholder="输入IP地址"/>
                <n-input v-model:value="form.name" type="text" placeholder="输入执行结果"/>
                <n-date-picker
                    v-model:formatted-value="form.formattedValue"
                    value-format="yyyy.MM.dd HH:mm:ss"
                    type="datetime"
                    clearable
                />
                <n-button type="tertiary">
                    <template #icon>
                        <n-icon>
                            <SearchOutline/>
                        </n-icon>
                    </template>
                    查询
                </n-button>
            </n-space>
        </template>
        <n-data-table
            :columns="columns"
            :data="data"
            :pagination="pagination"
            :single-line="false"
        />
    </n-card>
</template>

<script lang="ts">
import {h, defineComponent, ref} from "vue"
import {NTag, NButton, useMessage} from "naive-ui"
import {createColumns, treeData} from "@/app/admin/view/system/log/data.ts"

export default defineComponent({
    setup() {
        return {
            data: treeData,
            columns: createColumns({
                del: () => {
                }
            }),
            pagination: {
                pageSize: 10
            },
            form: {
                name: "",
                timestamp: ref("2007.06.30 12:08:55")
            }
        }
    }
})
</script>
