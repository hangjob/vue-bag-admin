<template>
    <div class="source">
        <div class="container">
            <el-row>
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
                    <div class="source-left">
                        <bag-card title="开源地址">
                            <template v-slot:body>
                                <ul>
                                    <li>
                                        <a href="">GitHub</a>
                                    </li>
                                    <li>
                                        <a href="">Gitee</a>
                                    </li>
                                    <li>
                                        <a href="">CodeForge</a>
                                    </li>
                                </ul>
                            </template>
                        </bag-card>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="16" :lg="12" :xl="12">
                    <div class="source-center"></div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                    <div class="source-right"></div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<style lang="less" scoped>
.source {
    &-left {

    }
}
</style>
