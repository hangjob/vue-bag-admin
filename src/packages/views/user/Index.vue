<template>
    <div class="user">
        <a-row :gutter="[16,16]">
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="10" :xxl="7">
                <div class="user-info">
                    <img v-if="userInfo.userhead" class="userhead" :src="getImageFullPath(userInfo.userhead)" alt="">
                    <img v-else class="userhead" src="@/packages/assets/image/yanghang.jpg" alt="">
                    <a-typography-title :level="4">{{ userInfo.username }}</a-typography-title>
                    <a-typography-text>{{ userInfo.describe }}</a-typography-text>
                    <a-button @click="compData.handleFollowMe" style="margin-top:10px" type="primary" shape="round">
                        <SmileOutlined />
                        Follow me
                    </a-button>
                    <ul>
                        <li>
                            <UserOutlined />
                            <span>{{ userInfo.job }}</span>
                        </li>
                        <li>
                            <HeartOutlined />
                            <span>{{ userInfo.birthday }}</span>
                        </li>
                        <li>
                            <BankOutlined />
                            <span>{{ userInfo.company }}</span>
                        </li>
                        <li>
                            <RocketOutlined />
                            <span>{{ userInfo.address }}</span>
                        </li>
                        <li>
                            <ShareAltOutlined />
                            <span>{{ userInfo.software }}</span>
                        </li>
                    </ul>
                    <div class="tag">
                        <a-typography-title :level="5">标签</a-typography-title>
                        <a-tag color="pink">不想工作</a-tag>
                        <a-tag color="red">唱歌不好听</a-tag>
                        <a-tag color="orange">只想躺平</a-tag>
                        <a-tag color="green">会弹一首故乡</a-tag>
                        <a-tag color="cyan">喜欢看看外面的世界</a-tag>
                        <a-tag color="blue">新时代农民工</a-tag>
                    </div>
                </div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="14" :xxl="17">
                <div class="user-tabs">
                    <a-tabs v-model:activeKey="compData.tabActive">
                        <a-tab-pane key="1" tab="基本信息">
                            <BaseInfo />
                        </a-tab-pane>
                        <a-tab-pane key="2" tab="账号绑定" force-render>
                            <Account />
                        </a-tab-pane>
                        <a-tab-pane key="3" tab="操作日志">
                            <Logs />
                        </a-tab-pane>
                    </a-tabs>
                </div>
            </a-col>
        </a-row>
    </div>
</template>
<script lang="ts">
import { defineComponent, inject, reactive, ref, h } from 'vue'
import BaseInfo from './BaseInfo.vue'
import Logs from './Logs.vue'
import Account from './Account.vue'
import { notification, Button } from 'ant-design-vue'
import { SmileOutlined } from '@ant-design/icons-vue'
import userPinia from '@/packages/pinia/user'

export default defineComponent({
    components: {
        BaseInfo,
        Logs,
        Account,
    },
    setup() {
        const userStore = userPinia()
        const userInfo = userStore.userInfo
        const { getImageFullPath } = inject<any>('bagGlobal')
        const compData = reactive({
            tabActive: "1",
            handleFollowMe() {
                const key = `open${Date.now()}`
                notification['success']({
                    message: '你是要去跟我点赞嘛',
                    description: 'Are you going to like me? If so, please click and remember to like me',
                    icon: h(SmileOutlined, { style: 'color: #108ee9' }),
                    btn: h(
                        Button,
                        {
                            type: 'primary',
                            size: 'small',
                            onClick: () => {
                                notification.close(key)
                                window.open('https://github.com/hangjob/vue-bag-admin')
                            },
                        },
                        '点我吧',
                    ),
                    key,
                })
            },
        })
        return {
            userInfo,
            compData,
            getImageFullPath,
        }
    },
})
</script>
<style lang="less" scoped>
.user {
    &-info {
        border: 1px solid #dddddd;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        text-align: center;
        flex: 1;
        border-radius: 6px;
        background-color: #ffffff;

        .userhead {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }

        ul {
            display: flex;
            flex: 1;
            padding: 10px;
            flex-direction: column;
            text-align: left;
            width: 100%;

            li {
                margin-bottom: 10px;
            }

            span {
                margin-left: 10px;
            }
        }

        .tag {
            flex-direction: column;
            width: 100%;
            text-align: left;

            span {
                margin-top: 10px;
            }
        }
    }

    &-tabs {
        border: 1px solid #dddddd;
        display: flex;
        flex-direction: column;
        padding: 20px;
        flex: 1;
        border-radius: 6px;
        background-color: #ffffff;
    }
}
</style>
