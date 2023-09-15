<template>
    <n-card :segmented="{content: true,footer:true}" header-style="padding:10px" footer-style="padding:10px"
            content-style="">
        <template #header>
            <n-grid y-gap="20" x-gap="10" cols="24" item-responsive responsive="screen">
                <n-grid-item span="24 m:12 l:6">
                    <n-input-group>
                        <n-button>搜索</n-button>
                        <n-input  />
                        <n-button type="primary" ghost>
                            <n-icon>
                                <SearchOutline/>
                            </n-icon>
                        </n-button>
                    </n-input-group>
                </n-grid-item>
                <n-grid-item  span="24 m:12 l:6">
                    <n-input-group>
                        <n-input readonly :value="compData.color"/>
                        <n-color-picker ghost style="width: 100px" :show-alpha="false" v-model:value="compData.color">
                            <template #label>
                                图标颜色
                            </template>
                        </n-color-picker>
                    </n-input-group>
                </n-grid-item>
                <n-grid-item  span="24 m:12 l:6">
                    <n-input-group>
                        <n-button>图标大小</n-button>
                        <n-input-number style="width: 100%"  v-model:value="compData.size"  />
                    </n-input-group>
                </n-grid-item>
            </n-grid>
        </template>
        <div class="icons">
            <n-grid y-gap="20" x-gap="0" cols="24" item-responsive responsive="screen">
                <n-grid-item  v-for="(item,idx) in icons" :key="idx" span="12 m:4 l:3 xl:2">
                    <div class="icons-item">
                        <div class="icons-item_content">
                            <n-icon class="icon" :color="compData.color" :size="compData.size">
                                <component :is="item"></component>
                            </n-icon>
                            <span @click="compData.copy(item)" class="copy">复制</span>
                        </div>
                    </div>
                </n-grid-item>
            </n-grid>
        </div>
    </n-card>
</template>

<script lang="ts">
import {defineComponent, reactive,ref} from "vue"
import {icons} from "@/packages/config/icon.ts"
import {clipboardCopy} from "@/packages/utils/utils.ts"
import { useMessage } from "naive-ui"
export default defineComponent({
    setup () {
        const message = useMessage()
        const compData = reactive({
            color:"#18A058",
            size:24,
            copy(icon){
                clipboardCopy(icon.name).then(()=>{
                    message.success(`已复制，${icon.name}`)
                })
            }
        })
        return {
            compData,
            icons,
        }
    }
})
</script>
<style lang="less" scoped>
:deep(.n-color-picker-trigger .n-color-picker-trigger__fill){
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.icons{
    &-item{
        width: 100%;
        text-align: center;
        padding: 0 10px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        &_content{
            padding: 20px 10px;
            border: 1px solid var(--code-color);
            box-sizing: border-box;
        }
        .icon{
            transition: top 0.3s;
            position: relative;
            top: 0;
        }
        &:hover{
            .icon{
                top: -10px;
            }
            .copy{
                bottom: 0;
            }
        }
        .copy{
            position: absolute;
            bottom: -30px;
            height: 30px;
            left: 10px;
            right: 10px;
            line-height: 30px;
            background-color: var(--n-color-target);
            transition: bottom 0.3s;
            color: var(--n-color);
        }
    }
}
</style>
