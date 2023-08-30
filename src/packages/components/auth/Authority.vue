<template>
    <slot v-if="showSlot" :userPermission="permission"></slot>
</template>
<script lang="ts">
import {computed, defineComponent} from "vue"
import appStore from "@/packages/pinia/app";

export default defineComponent({
    props: {
        permission: [String, Array]
    },
    setup(props) {
        const app = appStore()
        const showSlot = computed(() => {
            if (!props.permission) {
                return true;
            }
            const permission = app.userInfo.permission
            if (!permission) {
                return false
            }
            if (Array.isArray(props.permission)) {
                return props.permission.every((item) => permission.includes(item))
            } else {
                return permission.includes(props.permission)
            }
        })
        return {
            showSlot
        }
    }
})
</script>
