<template>
    <div class="sweet">
        <it-button-group v-if="detailData.isLike">
            <it-button type="primary" color="#65b1ff">你已点赞</it-button>
            <it-button type="primary"  outlined>打赏</it-button>
        </it-button-group>
        <it-button-group v-else>
            <it-button type="success" color="#65b1ff" v-debounce="{ func: handleLike}">点赞</it-button>
            <it-button type="success"  outlined>打赏</it-button>
        </it-button-group>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {webLikeCreate} from "@/bag-web/service/app";
import user from '@/bag-web/pinia/user'
import {ElNotification} from 'element-plus'

export default defineComponent({
    props: {
        detailData: {
            type: Object,
            default: () => {
            }
        }
    },
    setup({detailData}) {
        const {userInfo}: { userInfo: any } = user()
        const user_id = userInfo.id;
        const handleLike = () => {
            if (!user_id) {
                ElNotification({
                    title: '点赞通知',
                    message: '你还为登录，请先登录',
                    type: 'warning',
                })
                return false;
            }
            webLikeCreate({user_id, pid: detailData.id, type: 1}).then((res: any) => {
                detailData.isLike = res
            })
        }
        return {
            handleLike
        }
    }
})
</script>
<style lang="less" scoped>
.sweet {
    margin-top: var(--bag-margin-base);
    display: flex;
    justify-content: flex-end;

}
</style>
