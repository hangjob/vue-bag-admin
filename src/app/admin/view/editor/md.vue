<template>
    <n-card style="height: 100%" :segmented="{content: true,footer:true}" header-style="padding:10px" content-style="padding:0;" footer-style="padding:10px">
        <template #header>
            Markdown
        </template>
        <template #header-extra>
            <n-button strong secondary type="primary" @click=handleClick>MavonEditor</n-button>
        </template>
        <mavonEditor class="mavonEditor" style="height: 100%"/>
    </n-card>
</template>
<script lang="ts">
import {defineComponent} from "vue"
import { mavonEditor } from "mavon-editor"
import "mavon-editor/dist/css/index.css"
export default defineComponent({
    components:{
        mavonEditor
    },
    setup(){
        const handleClick =()=>{
            window.open("https://www.npmjs.com/package/mavon-editor/v/next")
        }
        return {
            handleClick
        }
    }
})
</script>
<style lang="less">
.mavonEditor{

}
.markdown-body{
    box-shadow:none !important;
}
</style>
