<template>
    <n-space vertical>
        <n-card>
            <n-result
                status="info"
                title="信息"
                description="在这个年代，信息就是金钱，金钱就是信息。"
            >
                <template #footer>
                    <n-button>我需要信息</n-button>
                </template>
            </n-result>
        </n-card>
        <n-card>
            <n-result status="success" title="成功" description="失败的孩子">
                <template #footer>
                    <n-button>我喜欢</n-button>
                </template>
            </n-result>
        </n-card>
        <n-card>
            <n-result
                status="warning"
                title="警告"
                description="在它变成错误以前一般不会有人管它"
            >
                <template #footer>
                    <n-button>听起来有那么点悲伤，哈哈哈</n-button>
                </template>
            </n-result>
        </n-card>
        <n-card>
            <n-result
                title="如何成功"
                description="写好报告，搞乱项目，增本降效，做大蛋糕"
            >
                <template #icon>
                    <div style="width: 300px">
                        底层逻辑是打通信息屏障，创建行业新生态。顶层设计时聚焦用户感知赛道，通过差异化和颗粒度达到引爆点。交付价值是在垂直领域采取复用大发达成持久收益。抽离透传归因分析作为抓手为产品赋能，体验度量作为闭环的评判标准。亮点是载体，优势是链路。思考整个生命周期，完善逻辑考虑资源倾斜。方法论是组合拳达到平台化标准。
                    </div>
                </template>
            </n-result>
        </n-card>
        <n-card>
            <n-result status="404" title="大！大！啊" description="这么大" size="huge">
                <template #footer>
                    <n-button>哦</n-button>
                </template>
            </n-result>
        </n-card>
    </n-space>
</template>
