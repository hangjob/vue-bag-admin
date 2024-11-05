<template>
    <div>
        <img class="vergas" src="@/blog/assets/bg6.png" alt="">
        <template v-for="item in comps">
            <component :is="item.components"></component>
        </template>
    </div>
</template>
<script setup>
const files = import.meta.glob(`@/blog/views/**/*.vue`, {eager: true})
const comps = [
    {title: '主页', name: 'Home'},
    {title: '特点', name: 'Trait'},
    {title: '', name: 'Viewing'},
    {title: '博文', name: 'Blog'},
    {title: '序言', name: 'Preface'},
    {title: '', name: 'Quantity'},
    {title: '下载', name: 'Download'},
    {title: '开发', name: 'Develop'},
    {title: '', name: 'EmailDwon'},
    {title: '评价', name: 'Evaluate'},
    {title: '留言', name: 'Message'},
    {title: '', name: 'Footer'},
]
comps.forEach((item) => {
    for (const key in files) {
        const module = files[key]
        if (key.indexOf(item.name) > -1) {
            item.components = module.default
        }
    }
})
</script>
<style scoped>
.vergas {
    position: fixed;
    left: 0;
    right: 0;
    height: 850px;
    width: 100%;
    object-fit: cover;
}
</style>
