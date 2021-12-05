<template>
    <yxs-view class="about">
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
