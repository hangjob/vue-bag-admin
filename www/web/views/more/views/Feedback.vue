<template>
    <div class="feedback">
        <bag-card style="margin-top:0" :title="route.meta.title">
            <template v-slot:body>
                <div class="qq">
                    <i class="bag-icon-qq"></i>
                    <p>正在跳转QQ中...</p>
                </div>
            </template>
        </bag-card>
        <iframe id="qq_iframe" style="display:none;" class="qq_iframe" src=""></iframe>
    </div>
</template>
<script lang="ts" setup>
import {useRouter, useRoute} from 'vue-router';
import {nextTick} from "vue";

const route = useRoute();
nextTick(() => {
    setTimeout(function () {
        const src = "tencent://message/?uin=470193837&Site=&menu=yes";
        const qq_iframe: HTMLIFrameElement = document.getElementById('qq_iframe') as HTMLIFrameElement;
        qq_iframe.src = "tencent://message/?uin=" + src + "&Site=&menu=yes"
    }, 300)
})
</script>
<style lang="less" scoped>
.feedback {
    .qq {
        text-align: center;

        i {
            font-size: 60px;
            color: #00e5fe;
        }

        p {
            color: #525252;
        }
    }
}
</style>
