<template>
    <n-card :segmented="{content: true,footer:true}" content-style="overflow: hidden;">
        <template #header>
            Animate.css
        </template>
        <template #header-extra>
            <n-button type="success" @click="handleReset">动画重放</n-button>
        </template>
        <n-grid cols="24" item-responsive responsive="screen">
            <n-grid-item span="12 m:6 l:4" v-for="(item,idx) in list" :key="idx">
                <div class="animate-item">
                    <span :class="['animate__animated',item.class]">{{item.name}}</span>
                </div>
            </n-grid-item>
        </n-grid>
    </n-card>
</template>
<script lang="ts">
import {defineComponent,ref} from "vue"
import Animate from "./data.ts"
export default defineComponent({
    setup(){
        const list = ref([])
        const list_d = Animate.map((item)=>{
            return {
                class:"animate__" + item,
                name:item
            }
        })
        const list_s = Animate.map((item)=>{
            return {
                class:item,
                name:item
            }
        })
        const handleReset = ()=>{
            list.value = list_d
            setTimeout(()=>{
                list.value = list_s
            },8000)
        }
        handleReset()
        return {
            list,
            handleReset
        }
    }
})
</script>
<style lang="less" scoped>
.animate-item{
    text-align: center;
    border: 1px solid var(--code-color);
    margin: 10px 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    background-color: var(--inverted-color);
    border-radius: 3px;
    color:#fff;
    .animate__animated{
        animation-duration: 8s;
        animation-fill-mode: both;
    }
}
</style>
