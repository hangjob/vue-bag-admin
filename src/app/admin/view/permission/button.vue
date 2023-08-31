<template>
    <n-card :segmented="{content: true,footer:true}" footer-style="padding:10px" content-style="padding:0px">
        <template #header>
            按钮权限
        </template>
        <template #header-extra>
            <Authority>
                <template #default="{userPermission}">
                    当前页面权限{{userPermission}}
                </template>
            </Authority>
        </template>
        <n-card :bordered="false">
            <n-space>
                <Authority :permission="['sys:permission:admin']">
                    <n-button type="primary">
                        sys级别，permission页面，拥有admin的角色 [sys:permission:admin]
                    </n-button>
                </Authority>
                <Authority :permission="['sys:permission:web']">
                    <n-button type="info">
                        sys级别，permission页面，拥有web的角色 [sys:permission:web]
                    </n-button>
                </Authority>
            </n-space>
            <br/>
            <n-space>
                <Authority>
                    <template #default="{userPermission}">
                        <n-button type="success">
                            插槽自定义{{userPermission}}
                        </n-button>
                    </template>
                </Authority>
            </n-space>
        </n-card>
        <template #footer>
            按钮权限、数据权限、页面权限，可以更加细粒度到接口级别的权限，它需要跟后端返回的数据紧密结合
        </template>
    </n-card>
</template>
<script setup>
import Authority from "@/packages/components/auth/Authority.vue"
</script>

