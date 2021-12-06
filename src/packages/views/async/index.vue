<template>
    <yxs-view class="about">
        <p>这里是http网络异步组件，请先打开服务</p>
        <testComponent/>
    </yxs-view>
</template>
<script lang="ts">
import {defineComponent, defineAsyncComponent} from 'vue'
import {apiAppComponents} from '@/packages/service/app'

const testComponent = defineAsyncComponent(() =>
    new Promise((resolve, reject) => {
        apiAppComponents().then((res: any) => {
            // @ts-ignore
            resolve({template: res})
        })
    })
)
export default defineComponent({
    components: {
        testComponent
    },
    setup() {

    }
})
</script>
