<template>
    <n-grid cols="12" y-gap="20" x-gap="20" item-responsive responsive="screen">
        <n-grid-item span="12 m:12 l:6">
            <n-card title="信息"
                    :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px"
                    content-style="padding:10px;">
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
        </n-grid-item>
        <n-grid-item span="12 m:12 l:6">
            <n-card title="我喜欢"
                    :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px"
                    content-style="padding:10px;">
                <n-result status="success" title="成功" description="失败的孩子">
                    <template #footer>
                        <n-button>我喜欢</n-button>
                    </template>
                </n-result>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:12">
            <n-card title="警告"
                    :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px"
                    content-style="padding:10px;">
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
        </n-grid-item>
        <n-grid-item span="12 m:12 l:6">
            <n-card title="403"
                    :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px"
                    content-style="padding:10px;">
                <n-result
                    status="403"
                    title="403 禁止访问"
                    description="总有些门是对你关闭的"
                >
                    <template #footer>
                        <n-button>放轻松</n-button>
                    </template>
                </n-result>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:6">
            <n-card title="418"
                    :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px"
                    content-style="padding:10px;">
                <n-result status="418" title="418 我是个杯具" description="一切尽在不言中">
                    <template #footer>
                        <n-button>接受真相就是这么简单</n-button>
                    </template>
                </n-result>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:12">
            <n-card title="如何成功"
                    :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px"
                    content-style="padding:10px;">
                <n-result
                    title="如何成功"
                    description="写好报告，搞乱项目，增本降效，做大蛋糕"
                >
                    <template #icon>
                        <code>
                            曾梦想仗剑走天涯
                            看一看世界的繁华
                            年少的心总有些轻狂
                            如今你四海为家
                            曾让你心疼的姑娘
                            如今已悄然无踪影
                            爱情总让你渴望又感到烦恼
                        </code>
                    </template>
                </n-result>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:12">
            <n-card title="这么大"
                    :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px"
                    content-style="padding:10px;">
                <n-result status="404" title="大！大！啊" description="这么大" size="huge">
                    <template #footer>
                        <n-button>哦</n-button>
                    </template>
                </n-result>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script setup>
</script>
