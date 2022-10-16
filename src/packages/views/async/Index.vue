<template>
    <bag-view class="about">
        <p>这里是http网络异步组件，请先打开服务</p>
        <br/>
        <libraryComponent/>
    </bag-view>
</template>
<script lang="ts">
import {defineComponent, defineAsyncComponent} from 'vue'
import {apiAppLibrary} from '@/packages/service/app'

const libraryComponent = defineAsyncComponent(() =>
    new Promise((resolve, reject) => {
        apiAppLibrary().then((res: any) => {
            // @ts-ignore
            resolve({template: res})
        })
    })
)
export default defineComponent({
    components: {
        libraryComponent
    },
    setup() {

    }
})
</script>
