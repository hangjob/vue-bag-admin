<template>
    <n-drawer v-if="$globalStore.configs.formMode === 'drawer'" v-model:show="$globalStore.formCreate.show"
              width="700px">
        <n-drawer-content closable header-style="padding:10px;"
                          footer-style="padding:10px"
                          :title="$globalStore.formCreate.title">
            <form-create :rule="$globalStore.formCreate.rule" v-model:api="$globalStore.formCreate.fApi"
                         :option="$globalStore.formCreate.options"/>
            <template #footer>
                <n-space>
                    <n-button @click="onClose">关闭</n-button>
                    <n-button type="success" @click="handleSubmit">提交</n-button>
                </n-space>
            </template>
        </n-drawer-content>
    </n-drawer>
    <n-modal :mask-closable="false" v-else-if="$globalStore.configs.formMode === 'modal'" :block-scroll="false"
             v-model:show="$globalStore.formCreate.show">
        <n-card closable @close="onClose" :segmented="{content: true,footer:true}"
                header-style="padding:10px;"
                footer-style="padding:10px" style="height: 80vh;width: 80%; overflow-y: scroll"
                :title="$globalStore.formCreate.title" :bordered="false">
            <form-create :rule="$globalStore.formCreate.rule" v-model:api="$globalStore.formCreate.fApi"
                         :option="$globalStore.formCreate.options"/>
            <template #footer>
                <n-space justify="end">
                    <n-button @click="onClose">关闭</n-button>
                    <n-button type="success" @click="handleSubmit">提交</n-button>
                </n-space>
            </template>
        </n-card>
    </n-modal>
    <template v-else>
        <n-card :bordered="false">
            <form-create :rule="$globalStore.formCreate.rule" v-model:api="$globalStore.formCreate.fApi"
                         :option="$globalStore.formCreate.options"/>
            <template #footer>
                <n-space justify="end">
                    <n-button @click="handleResetFields">重置</n-button>
                    <n-button type="success" @click="handleSubmit">提交</n-button>
                </n-space>
            </template>
        </n-card>
    </template>
</template>

<script setup>

const onClose = () => {
    $globalStore.formCreate.show = false;
}

const handleSubmit = () => {
    $globalStore.formCreate.fApi.validate().then((valid, fail) => {
        console.log('Promise resolved: 表单验证通过');
    }).catch(() => {
        console.log('Promise rejected: 表单验证未通过');
    }).finally(() => {
        onClose()
    })
};

const handleResetFields = () => {
    $globalStore.formCreate.fApi.resetFields()
}
</script>
