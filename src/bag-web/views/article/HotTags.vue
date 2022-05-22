<template>
    <div class="HotTags">
        <div class="HotTags-head">
            <h4>热门标签</h4>
        </div>
        <div class="tags">
            <a href="" :style="{backgroundColor:colors[idx].color}" v-for="(item,idx) in keywords" :key="item.id">{{item.name}}</a>
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue'
import {webAntistopAll} from "@/bag-web/service/app";
import colors from '@/bag-web/utils/colors'
export default defineComponent({
    setup() {
        const keywords =  ref([]);
        webAntistopAll().then((res:any)=>{
            keywords.value = res;
        })

        return {
            keywords,
            colors
        }
    }
})
</script>
<style lang="less" scoped>
.HotTags {
    background-color: var(--bag-color-white);
    padding: 15px 15px 5px 15px;
    margin-top: 20px;
    &-head {

    }

    .tags {
        margin-top: 10px;
        a {
            color: #fff;
            margin: 0 10px 10px 0;
            font-size: 13px;
            padding: 3px 8px;
            border-radius: 3px;
            opacity: .75;
            background-color: #ff6464;
            cursor: pointer;
            display: inline-block;
            text-decoration: none;
        }
    }
}
</style>
