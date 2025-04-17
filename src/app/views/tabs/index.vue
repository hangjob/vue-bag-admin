<template>
    <n-grid cols="12" y-gap="20" x-gap="20" item-responsive responsive="screen">
        <n-grid-item span="12 m:12 l:12">
            <n-card title="标签页复用-激活菜单高亮传递rid为想要高亮的菜单id"
                    :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px"
                    content-style="padding:10px;">
                <n-space>
                    <n-switch v-model:value="$globalStore.configs.isTabCover">
                        <template #checked>
                            只打开一个详情页面，切换完后最好刷新页面
                        </template>
                        <template #unchecked>
                            打开多个详情页面，切换完后最好刷新页面
                        </template>
                    </n-switch>
                    <n-button @click="handleRouter({id:1,title:'打开详情页面传递参数1'})" type="tertiary">
                        打开详情页面传递参数1
                    </n-button>
                    <n-button @click="handleRouter({id:2,title:'打开详情页面传递参数2'})" type="primary">
                        打开详情页面传递参数2
                    </n-button>
                    <n-button @click="handleRouter({id:3,title:'打开详情页面传递参数3'})" type="info">
                        打开详情页面传递参数3
                    </n-button>
                </n-space>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:12">
            <n-card title="跳转内部路由"
                    :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px"
                    content-style="padding:10px;">
                <n-space>
                    <n-button type="success" @click="$global.router.push({name:'keep/nested'})">
                        跳转深层次菜单(推荐使用name跳转)
                    </n-button>
                    <n-button @click="$global.router.push({name:'business'})" type="warning">
                        跳转空白页面
                    </n-button>
                </n-space>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script setup>
const handleRouter = ({id, title}) => {
    $global.router.push({
        path: `/tabs/detail/${id}`,
        query: {
            rid: $globalStore.currentRouter?.meta?.id,
            title,
        }
    })
}
</script>
