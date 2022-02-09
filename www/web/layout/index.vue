<template>
    <header>
        <LayoutNav/>
    </header>
    <main>
        <div>
            <section></section>
            <article></article>
        </div>
        <div>
            <aside></aside>
            <figure></figure>
        </div>
    </main>
    <footer></footer>
</template>
<script setup lang="ts">
import LayoutNav from '@www/web/layout/nav.vue'
import user from '@www/web/store/user'

const userStore = user()

const handleUpdate = () => {
    userStore.$patch((state) => {
        state.userinfo.name = '111'
    })
}
</script>
