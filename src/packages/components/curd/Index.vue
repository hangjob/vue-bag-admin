<template>
    <div class="bag-curd">
        <div class="bag-curd-container">
            <div class="bag-card-header">
                <slot name="action">
                    <div class="bag-card-header-action">
                        <a-space :size="20">
                            <a-button type="primary" size="middle" :loading="tableCurd.loading"
                                      @click="tableCurd.refreshTable"
                            >
                                刷新
                            </a-button>
                            <a-button class="bag-button-color-green" size="middle"
                                      @click="tableCurd.create.visible = true"
                            >新增
                            </a-button>
                            <a-button type="primary" danger size="middle" @click="tableCurd.deletes.submit">删除
                            </a-button>
                        </a-space>
                    </div>
                </slot>
                <slot name="search">

                </slot>
            </div>
            <div class="bag-card-body"></div>
            <div class="bag-card-footer"></div>
        </div>
    </div>
</template>
<script lang="ts">
/**
 * 该组件一键Curd
 */
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    name: 'bag-curd-table',
    setup() {
        const tableCurd = reactive({
            loading: false,
            refreshTable: () => {
            },
            create: {
                visible: true,
            },
            deletes: {
                submit: () => {
                },
            },
        })
        return {
            tableCurd,
        }
    },
})
</script>
<style lang="less" scoped>
.bag-curd {
    background-color: #ffffff;
    min-height: 100%;
    border-radius: 3px;

    &-container {

    }

    &-header {

    }

    &-body {

    }
}
</style>
