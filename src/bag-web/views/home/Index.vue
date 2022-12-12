<template>
    <div class="home">
        <div class="container">
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <Broadcast :articleAll="compData.list" />
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
                    <Toplove :articleAll="compData.list" />
                    <HomeSection :banners="compData.banners" @refrashData="compData.webArticlePage"
                                 :articleAll="compData.list"
                    />
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                    <HomeAside :banners="compData.banners" :articleAll="compData.list" />
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
import { webArticlePage, webBannerAll } from '@/bag-web/service/app'
import { reactive, ref } from 'vue'

const compData = reactive({
    list: [],
    banners: [],
    webBannerAll() {
        webBannerAll().then((res: any) => {
            this.banners = res
        })
    },
    webArticlePage(page: any) {
        webArticlePage(page).then((res: any) => {
            this.list = res.rows
            page.callback && page.callback(res)
        })
    },
})

compData.webBannerAll()
compData.webArticlePage({
    pageSize: 15,
    currentPage: 1,
})
</script>
