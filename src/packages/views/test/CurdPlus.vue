<template>
    <div class="bag-curd">
        <div class="bag-curd-container">
            <div class="bag-curd-header">
                <div class="bag-curd-action">
                    <slot name="header-action">
                            <a-row>
                                <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                    <div class="bag-curd-header-action">
                                        
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                        <a-button type="primary">测试</a-button>
                                    </div>
                                </a-col>
                                <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                                    <div class="bag-curd-header-action">
                                        <a-space :size="20">
                                        
                                        </a-space>
                                    </div>
                                </a-col>
                            </a-row>
                    </slot>
                </div>
                <div class="bag-curd-prolate">
                
                </div>
            </div>
            <div class="bag-curd-table">
                <a-table v-bind="curdTable.$tableAttrs" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        curdTable: {
            type: Object,
            default: () => {
            },
        },
    },
    setup(props, { emit }) {
        const curdTable = props.curdTable
        return {
            curdTable,
        }
    },
})
</script>
