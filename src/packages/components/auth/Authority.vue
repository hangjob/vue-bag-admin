<template>
    <slot v-if="showSlot" :userPermission="permissions"></slot>
</template>
<script lang="ts">
import {computed, defineComponent} from "vue"
import appStore from "@/packages/pinia/app"

export default defineComponent({
    props: {
        permission: [String, Array]
    },
    setup(props) {
        const app = appStore()
        const permissions = app.currentRouter.meta.permission || []
        const showSlot = computed(() => {
            if (!props.permission) {
                return true
            }
            if (!permissions) {
                return false
            }
            if (Array.isArray(props.permission)) {
                return props.permission.every((item) => permissions.includes(item))
            } else {
                return permissions.includes(props.permission)
            }
        })
        return {
            showSlot,
            permissions,
        }
    }
})
</script>
