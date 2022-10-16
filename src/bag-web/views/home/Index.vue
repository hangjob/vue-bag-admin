<template>
    <div class="home">
        <div class="container">
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <Broadcast :articleAll="articleAll"/>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
                    <Toplove :articleAll="articleAll"/>
                    <HomeSection :banners="banners" @refrashData="getData" :articleAll="articleAll"/>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                    <HomeAside :banners="banners" :articleAll="articleAll"/>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script lang="ts" setup>
import HomeSection from './Section.vue'
import HomeAside from './Aside.vue'
import Broadcast from './Broadcast.vue'
import Toplove from './Toplove.vue'
import {webArticleAll, webArticlePage, webBannerAll} from '@/bag-web/service/app'
import {reactive, ref} from 'vue'

const articleAll = ref([])

const getData = (page: any) => {
    webArticlePage(page).then((res: any) => {
        articleAll.value = res
        page.callback && page.callback(res)
    })
}
const banners = ref([])
webBannerAll().then((res: any) => {
    banners.value = res
})
getData({
    pageSize: 15,
    currentPage: 1
})
</script>
