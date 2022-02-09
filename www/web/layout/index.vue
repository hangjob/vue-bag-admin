<template>
    <header></header>
    <nav></nav>
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
import user from '@www/web/store/user'

const userStore = user()

const handleUpdate = () => {
    userStore.$patch((state) => {
        state.userinfo.name = '111'
    })
}
</script>
