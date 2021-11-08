<template>
    <yxs-view>
        <a-spin
            wrapperClassName="spinning"
            style="height:100%;width:100%"
            :spinning="loading"
            tip="Loading..."
        >
            <iframe style="width:100%;height:99.0%" :src="url" frameborder="0"></iframe>
        </a-spin>
    </yxs-view>
</template>

<script>
export default {
    name:'iframe',
    data() {
        return {
            loading: false,
            url: '',
        }
    },

    watch: {
        $route: {
            handler({ meta }) {
                this.url = this.$store.getters['app/currentRouter'].iframe;
                this.loading = true
            },
            immediate: true,
        },
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
    & /deep/ .ant-spin-container {
        height: 100%;
        width: 100%;
    }
}
</style>