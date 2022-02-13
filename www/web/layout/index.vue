<template>
    <header>
        <LayoutNav/>
    </header>
    <main>
<!--        <div>-->
<!--            <section></section>-->
<!--            <article></article>-->
<!--        </div>-->
<!--        <div>-->
<!--            <aside></aside>-->
<!--            <figure></figure>-->
<!--        </div>-->
        <router-view />
    </main>
    <footer>
        <LayoutFooter/>
    </footer>
</template>
<script setup lang="ts">
import LayoutNav from '@www/web/layout/nav.vue'
import LayoutFooter from '@www/web/layout/footer.vue'
import user from '@www/web/store/user'

const userStore = user()

const handleUpdate = () => {
    userStore.$patch((state) => {
        state.userinfo.name = '111'
    })
}
</script>
