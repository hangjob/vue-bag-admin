<template>
    <div class="author" v-if="detailData.member">
        <div class="author-head"
             :style="{backgroundImage:`url(${getImageFullPath(detailData.image)})`}"
        ></div>
        <div class="author-avatar">
            <a href="">{{ getStrFirst(detailData.member.username) }}</a>
        </div>
        <div class="author-basic">
            <h5>{{ detailData.member.username }}</h5>
            <p>{{ detailData.member.describe ? detailData.member.describe : '这家伙很懒，什么也没写！' }}</p>
        </div>
        <div class="author-mess">
            <div class="item">
                <h6>文章</h6>
                <p>{{ detailData.article_count }}</p>
            </div>
            <div class="item">
                <h6>声望</h6>
                <p>{{ reputation(detailData.article_count) }}</p>
            </div>
            <div class="item">
                <h6>注册时间</h6>
                <p>{{ dayjs(detailData.member.createTime).format('YYYY年MM月DD日') }}</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {defineComponent, inject, toRefs} from 'vue'
import dayjs from 'dayjs';

const props = defineProps({
    detailData: [Object],
})

const reputation = (number: number) => {
    if (number <= 5) {
        return number * 20
    } else if (number <= 10) {
        return number * 30
    } else if (number <= 15) {
        return number * 40
    } else if (number <= 20) {
        return number * 50
    } else {
        return number * 80
    }
}

const getStrFirst = (str: string) => {
    return str.substring(0, 1)
}

const {getImageFullPath} = inject<any>('bagGlobal')

const {
    detailData
} = toRefs(props)

</script>
<style lang="less" scoped>
.author {
    background-color: var(--bag-color-white);
    border-radius: var(--bag-border-radius-base);
    padding-bottom: var(--bag-padding-base);

    &-head {
        background-position: 0 50%;
        background-size: cover;
        border-bottom: 1px solid #e1e8ed;
        border-radius: 4px 4px 0 0;
        height: 100px;
        width: 100%;
        transition: all .3s;
    }

    &-avatar {
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            background-color: #e5a0bd;
            border-radius: 50%;
            width: 80px;
            height: 80px;
            margin-top: -40px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            font-size: 28px;
            color: #ffffff;
            overflow: hidden;
            transition: all .3s;
        }
    }

    &-basic {
        clear: both;
        text-align: center;
        width: 100%;
        margin: 10px 0 10px 0;

        h5 {
            font-size: 18px;
            color: #333333;
            font-weight: bold;
        }

        p {
            line-height: 20px;
            color: #777777;
        }
    }

    &-mess {
        display: flex;
        justify-content: space-around;

        .item {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            min-width: 100px;

            h6 {
                color: #777;
                margin-bottom: 5px;
            }

            p {
                font-weight: bold;
                color: #333333;
            }
        }
    }
}
</style>
