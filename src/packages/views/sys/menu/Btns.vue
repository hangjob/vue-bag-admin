<template>
    <a-drawer
        title="设置菜单页按钮"
        placement="right"
        v-model:visible="radio.visible"
        width="25%"
        class="auth"
    >
        <div class="auth-body">
            <a-select
                v-model:value="radio.value"
                mode="tags"
                style="width: 100%"
                placeholder="Tags Mode"
                @change="handleChange"
                @deselect="handleDeselect"
            >
                <a-select-option v-for="item in radio.items" :value="item.value" :label="item.name">
                    {{ item.name }}
                </a-select-option>
            </a-select>
        </div>
        <div class="auth-action">
            <a-button type="primary" @click="handleSubmit">提交</a-button>
        </div>
    </a-drawer>
</template>
<script lang="ts">
import {computed, defineComponent, nextTick, reactive, ref, watch} from 'vue'

export default defineComponent({
    setup(props, context) {
        const radio = reactive({
            items: [{name: '刷新', value: 'refresh', state: false}, {name: '新增', value: 'created', state: false},
                {name: '删除', value: 'delete', state: false}, {name: '数据导出', value: 'export', state: false}
            ],
            value: [],
            visible: false
        })
        const handleSubmit = () => {
            console.log(radio)
        }

        const handleChange = (value) => {
            radio.items.forEach((item) => {
                item.state = !!(value.find((todo) => todo === item.value))
            })
        }
        const handleOpen = (show, record) => {
            radio.visible = true
        }
        const handleDeselect = (value) => {
            console.log(value)
        }
        return {
            handleSubmit,
            handleOpen,
            radio,
            handleChange,
            handleDeselect
        }
    },
})
</script>
<style lang="less" scoped>
.auth {
    &-body {
        padding: 20px;
    }

    &-action {
        position: absolute;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: right;
        left: 0;
        background-color: #fff;
        border-radius: 0 0 4px 4px;
    }
}
</style>
