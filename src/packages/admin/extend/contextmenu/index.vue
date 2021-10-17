<template>
    <div>
        <div id="contextmenu" class="contextmenu">
            <div class="menu">关闭当前</div>
            <div class="menu">关闭其他</div>
            <div class="menu">关闭所有</div>
        </div>
    </div>
</template>
<script lang="ts">
    import {defineComponent,onMounted} from 'vue'

    export default defineComponent({
        setup() {
            onMounted(()=>{
                window.onclick = function () {
                    let contextmenu:any = document.querySelector('#contextmenu');
                    contextmenu.style.display = 'none';
                }
            })
            const handleClose = ()=>{

            }
            return {
                handleClose
            }
        }
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
            &:last-child{
                margin-bottom: 5px;
            }
            &:first-child{
                margin-top: 5px;
            }
            &:hover {
                background-color: #f7f7f7;
                color: #000;
            }
        }
    }
</style>