<template>
    <div>
        <div id="contextmenu" class="contextmenu">
            <div class="menu" v-for="(item,idx) in items" :key="idx" @click="handleCallback(item)">{{ item.name }}</div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const items = ref<Array<any>>([])

        const handleCallback = (item: any) => {
            item.callback && item.callback(item)
        }

        return {
            handleCallback,
            items,
        }
    },
})
</script>
<style lang="less" scoped>
.contextmenu {
    box-shadow: 0 2px 12px #0000001a;
    width: 160px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    z-index: 999;

    .menu {
        display: flex;
        align-items: center;
        height: 35px;
        font-size: 13px;
        cursor: pointer;
        padding: 0 15px;
        color: #666;
        position: relative;

        &:last-child {
            margin-bottom: 5px;
        }

        &:first-child {
            margin-top: 5px;
        }

        &:hover {
            background-color: #f7f7f7;
            color: #000;
        }
    }
}
</style>
