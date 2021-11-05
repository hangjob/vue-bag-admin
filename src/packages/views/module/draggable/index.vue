<template>
    <yxs-view>
        <a-row>
            <a-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6" :xxl="4">
                <Draggable axis="x">
                    <div>Bound to parent</div>
                </Draggable>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6" :xxl="4">
                <Draggable axis="y">
                    <div>Bound to parent</div>
                </Draggable>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6" :xxl="4">
                <Draggable :defaultPosition="{x: 0, y: 0}">
                    <div>Bound to parent</div>
                </Draggable>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6" :xxl="4">
                <Draggable bounds="body">
                    <div>Bound to parent</div>
                </Draggable>
            </a-col>
        </a-row>
    </yxs-view>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({

    setup() {

    }
});
</script>