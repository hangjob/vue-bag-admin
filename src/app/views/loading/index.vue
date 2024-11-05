<template>
    <n-grid cols="12" y-gap="20" x-gap="20" item-responsive responsive="screen">
        <n-grid-item span="12 m:12 l:6">
            <n-card title="加载" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <n-space vertical>
                    <n-spin :show="show">
                        <n-alert title="啦啦啦" type="success">
                            一个人，一辆车，一个人走了很多的地方
                        </n-alert>
                    </n-spin>
                    <n-button @click="show = !show">
                        点击来转圈
                    </n-button>
                </n-space>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:6">
            <n-card title="骨架屏" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <n-space vertical>
                    <n-space>
                        <n-switch v-model:value="loading"/>
                        加载
                    </n-space>
                    <n-space>
                        <n-skeleton v-if="loading" :width="146" :sharp="false" size="medium"/>
                        <n-button v-else>
                            Won't you fly high
                        </n-button>
                        <n-skeleton v-if="loading" :width="132" round size="medium"/>
                        <n-button v-else round>
                            free bird, yeah
                        </n-button>
                        <n-skeleton v-if="loading" circle size="medium"/>
                        <n-button v-else circle>
                            ?
                        </n-button>
                    </n-space>
                </n-space>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:12">
            <n-card title="在局部使用进度条" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <n-loading-bar-provider
                    :to="loadingBarTargetRef"
                    container-style="position: absolute;"
                >
                    <div
                        ref="loadingBarTargetRef"
                        style="
        position: absolute;
        inset: 0;
        border-radius: var(--n-border-radius);
        overflow: hidden;
        pointer-events: none;
      "
                    />
                    <LoadingBarTrigger />
                </n-loading-bar-provider>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script>
import { useLoadingBar,NButton,NSpace } from "naive-ui";
const show = ref(false)
const loading = ref(true)
const loadingBarTargetRef = ref(false)

export default defineComponent({
    components: {
        LoadingBarTrigger: defineComponent({
            setup() {
                const loadingBar = useLoadingBar();
                return () => {
                    return h(NSpace, null, {
                        default: () => [
                            h(NButton, { onClick: () => loadingBar.start() }, () => "Start"),
                            h(NButton, { onClick: () => loadingBar.finish() }, () => "Finish")
                        ]
                    });
                };
            }
        })
    },
    setup() {
        return {
            show,
            loading,
            loadingBarTargetRef
        };
    }
});
</script>
