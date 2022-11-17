<template>
    <bag-view>
        <a-spin
            wrapperClassName="spinning"
            style="height:100%;width:100%"
            :spinning="loading"
            tip="Loading..."
        >
            <iframe style="width:100%;height:99.0%" :src="url" frameborder="0"></iframe>
        </a-spin>
    </bag-view>
</template>

<script>
import appPinia from '@/packages/pinia/app'

export default {
    name: 'iframeView',
    data() {
        return {
            loading: false,
            url: '',
        }
    },

    watch: {
        $route: {
            handler({ meta }) {
                const appStore = appPinia()
                this.url = appStore.currentRouter.iframePath
                this.loading = true
            },
            immediate: true,
        },
    },
    created() {

    },
    mounted() {
        const iframe = this.$el.querySelector('iframe')
        this.loading = true

        iframe.onload = () => {
            this.loading = false
        }
    },
}
</script>
<style lang="less" scoped>
.spinning {
    height: 100%;
    width: 100%;

    :deep(.ant-spin-container) {
        height: 100%;
        width: 100%;
    }
}
</style>
