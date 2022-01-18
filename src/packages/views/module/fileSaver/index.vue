<template>
    <yxs-view>
        <div>
            <a-input-search v-model:value="action.text.value" placeholder="Hello, world!" size="large"/>
            <br/>
            <a-button type="primary" @click="action.text.handleSaveText">保存文字</a-button>
        </div>
    </yxs-view>
</template>
<script lang="ts">
import {defineComponent, reactive, ref} from 'vue'
// @ts-ignore
import {saveAs} from 'file-saver';

export default defineComponent({
    setup() {
        const action = reactive({
            text: {
                value: 'Hello, world!',
                handleSaveText: () => {
                    const blob = new Blob([action.text.value], {type: "text/plain;charset=utf-8"});
                    saveAs(blob, "hello world.txt");
                }
            }
        })
        return {
            action
        }
    }
})
</script>
<style lang="less" scoped>

</style>
