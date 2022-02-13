<template>
    <div class="home">
        <div class="container">
            <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
                    <HomeSection />
                </el-col>
                <el-col :xs="8" :sm="24" :md="24" :lg="8" :xl="8">
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script lang="ts" setup>
import HomeSection from './section.vue'
</script>
