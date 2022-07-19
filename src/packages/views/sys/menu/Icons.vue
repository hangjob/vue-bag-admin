<template>
    <div class="item-icons">
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane v-for="item in icons" :key="item.key" :tab="item.name">
                <a-row>
                    <a-col class="item" :xs="12" :sm="8" :md="4" :lg="3" :xl="1" v-for="(icon,idx) in item.icons">
                        <div class="item-icon">
                            <component :is="icon" :key="idx" @click="handleSelected(icon)"></component>
                        </div>
                    </a-col>
                </a-row>
            </a-tab-pane>
        </a-tabs>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import icons from './icons'

export default defineComponent({
    props: {
        icon: {
            type: String,
            defalut: '',
        },
    },
    setup(props, { emit }) {
        const handleSelected = (icon: string) => {
            emit('affirm', icon)
            emit('update:icon', icon)
        }
        return {
            handleSelected,
            icons,
            activeKey: ref(1),
        }
    },
})
</script>
<style lang="less" scoped>
.item-icons {
    .item {
        text-align: center;
        padding: 10px 0;
        cursor: pointer;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        &-icon {
            border: 1px solid #ddd;
            width: 45px;
            border-radius: 3px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 45px;

            :deep(i) {
                font-size: 16px;
                color: #333333;
            }
        }
    }
}
</style>
