<template>
    <div class="layout">
        <div class="container">
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="6">
                    <section class="left-nav">
                        <div class="navItem">
                            <router-link :class="[route.path === item.url ? 'active' : null]" :to="item.url"
                                         v-for="(item,idx) in navs" :key="idx"
                            >
                                {{ item.name }}
                            </router-link>
                        </div>
                    </section>
                </el-col>
                <el-col :xs="24" :sm="24" :md="16" :lg="18" :xl="18">
                    <router-view></router-view>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {ref} from "vue";
import {useRouter, useRoute} from 'vue-router';

const route = useRoute();

const navs = ref([
    {name: '关于我们', url: '/more/about'},
    {name: '用户协议', url: '/more/agreement'},
    {name: '帮助中心', url: '/more/help'},
    {name: '意见反馈', url: '/more/feedback'},
    {name: '加入我们', url: '/join'},
    {name: '免责声明', url: '/more/duty'}
])
</script>
<style lang="less" scoped>
.layout {
    margin-top: 20px;

    .left-nav {
        position: relative;
        width: 100%;
        background-color: rgb(255, 255, 255);
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 20px;

        .navItem {
            transition: all 0s ease 0s;
            color: rgb(51, 51, 51);
            font-size: 14px;
            display: block;
            line-height: 52px;
            font-weight: 500;
            text-align: left;
            cursor: pointer;
            border-radius: 3px;

            a {
                width: 100%;
                height: 100%;
                padding: 0px 30px;
                display: block;
                color: rgb(51, 51, 51);
                position: relative;

                &.active {
                    &::before {
                        content: '';
                        position: absolute;
                        left: 0px;
                        top: 10px;
                        height: 32px;
                        width: 2px;
                        border-right: 3px solid #ffeb3b85;
                    }
                }

                &:hover {
                    background-color: #ffeb3b
                }
            }
        }
    }
}
</style>
