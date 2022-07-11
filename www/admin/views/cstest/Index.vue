<template>
    <bag-curd-table :tableCurd="tableCurd"></bag-curd-table>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue'
import tableHock from "@/packages/hook/table";
import columns from "./columns";

export default defineComponent({
    setup() {
        const formCreate = ref()
        const formEdit = ref()
        const {tableCurd} = tableHock()
        tableCurd.apiPrefix = '/web/website'
        tableCurd.create.refForm = formCreate;
        tableCurd.edit.refForm = formEdit;
        tableCurd.all.handle();
        tableCurd.columns = columns.filter((item) => item.visible !== false)
        return {
            tableCurd,
            formCreate,
            formEdit,
            columns: columns.filter((item) => item.visible !== false)
        }
    }
})
</script>
