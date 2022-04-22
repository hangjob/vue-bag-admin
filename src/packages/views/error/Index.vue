<template>
    <bag-view>
        <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1">
                <template #tab>
                    <span>成功结果</span>
                </template>
                <a-result
                    status="success"
                    title="成功购买iPhone13 Pro"
                    sub-title="订单号:202188886666123455888，正在创建 需要1-5分钟，请耐心等待。"
                >
                    <template #extra>
                        <a-button key="console" danger type="primary">关闭页面</a-button>
                        <a-button key="buy" type="primary">前往商家</a-button>
                    </template>
                </a-result>
            </a-tab-pane>
            <a-tab-pane key="2">
                <template #tab>
                    <span>警告操作</span>
                </template>
                <a-result
                    status="warning"
                    title="iPhone13 Pro 中国大陆-暂时缺货"
                    sub-title="如果您仍想购买此产品，请前往官方网站下单登记，我们会48个工作日发货"
                >
                    <template #extra>
                        <a-button key="console" danger type="primary">关闭页面</a-button>
                        <a-button key="buy" type="primary">
                            <apple-outlined/>
                            前往苹果
                        </a-button>
                    </template>
                </a-result>
            </a-tab-pane>
            <a-tab-pane key="3">
                <template #tab>
                    <span>禁止提交</span>
                </template>
                <a-result
                    status="error"
                    title="禁止提交"
                    sub-title="在提交之前，请检查数据类型，如有数据不合法，请删除重试"
                >
                    <template #extra>
                        <a-button key="console" type="primary">关闭页面</a-button>
                        <a-button key="buy">重新提交</a-button>
                    </template>

                    <div class="desc">
                        <p style="font-size: 16px">
                            <strong>您提交失败，可能也有以下错误:</strong>
                        </p>
                        <p>
                            <close-circle-outlined :style="{ color: 'red' }"/>
                            您的账号可能已被冻结
                            <a>前往解冻 &gt;</a>
                        </p>
                        <p>
                            <close-circle-outlined :style="{ color: 'red' }"/>
                            您的账号没有申请资格
                            <a>申请资格 &gt;</a>
                        </p>
                    </div>
                </a-result>
            </a-tab-pane>
            <a-tab-pane key="4">
                <template #tab>
                    <span>操作完成</span>
                </template>
                <a-result title="太好了，我们已经完成了所有的操作!">
                    <template #icon>
                        <smile-twoTone/>
                    </template>
                    <template #extra>
                        <a-button type="primary">下一步</a-button>
                    </template>
                </a-result>
            </a-tab-pane>
            <a-tab-pane key="403">
                <template #tab>
                    <span>403</span>
                </template>
                <error403/>
            </a-tab-pane>
            <a-tab-pane key="404">
                <template #tab>
                    <span>404</span>
                </template>
                <error404/>
            </a-tab-pane>
            <a-tab-pane key="500">
                <template #tab>
                    <span>500</span>
                </template>
                <error500/>
            </a-tab-pane>
        </a-tabs>
    </bag-view>
</template>
<script lang="ts">
import {AndroidOutlined, AppleOutlined} from '@ant-design/icons-vue';
import {defineComponent, ref} from 'vue';
import error403 from './403.vue'
import error404 from './404.vue'
import error500 from './500.vue'

export default defineComponent({
    name:'error',
    setup() {
        return {
            activeKey: ref('1'),
        };
    },
    components: {
        AppleOutlined,
        AndroidOutlined,
        error403,
        error404,
        error500
    },
});
</script>

