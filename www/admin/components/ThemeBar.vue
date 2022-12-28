<template>
    <div class="right_menu-item hidden-xs" @click="handleDocument">
        <InstagramOutlined class="icon-svg" />
    </div>
    <div class="right_menu-item hidden-xs" @click="handleAntDesign">
        <AntDesignOutlined class="icon-svg" />
    </div>
    <div class="right_menu-item hidden-xs" @click="handleGithub">
        <GithubOutlined class="icon-svg" />
    </div>
<!--    <div class="right_menu-item hidden-xs" @click="handleOfficial">-->
<!--        <ChromeOutlined class="icon-svg" />-->
<!--    </div>-->
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        compData: {
            type: Object,
            default: () => { },
        },
    },
    setup(props) {
        const handleOfficial = () => {
            window.open('/web.html')
        }
        const handleGithub = () => {
            window.open('https://github.com/hangjob/vue-bag-admin')
        }
        
        const handleAntDesign = () => {
            window.open('https://antdv.com/docs/vue/introduce-cn')
        }
        const handleDocument = () => {
            window.open('/index.html')
        }
        return {
            handleOfficial,
            handleGithub,
            handleAntDesign,
            handleDocument,
        }
    },
})
</script>
<style>

</style>
