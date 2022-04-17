<template>
    <div class="right_menu-item hidden-xs" @click="handleOfficial">
        <DribbbleOutlined class="icon-svg" />
    </div>
    <div class="right_menu-item hidden-xs" @click="handleOfficial">
        <DribbbleOutlined class="icon-svg" />
    </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const handleOfficial = () => {
            window.open('/web.html')
        }
        return {
            handleOfficial,
        }
    },
})
</script>
<style>

</style>
