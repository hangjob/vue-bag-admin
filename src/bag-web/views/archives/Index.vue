<template>
    <div
        class="article"
        v-loading="loading"
        element-loading-text="数据正在加载中..."
        element-loading-background="rgba(122, 122, 122, 0.1)"
    >
        <div class="container">
            <ArticleTitle/>
            <el-row :gutter="20">
                <el-col v-for="(item,idx) in 30" :key="idx" :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                    <ItemArticle/>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import {defineComponent} from 'vue'
import ItemArticle from './ItemArticle.vue'
import ArticleTitle from './ArticleTitle.vue'
export default defineComponent({
    components:{
        ItemArticle,
        ArticleTitle
    },
    setup() {

    }
})
</script>
