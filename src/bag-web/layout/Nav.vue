<template>
    <nav class="nav">
        <div class="container">
            <el-row>
                <el-col :xs="24" :sm="1" :md="2" :lg="2" :xl="2">
                    <router-link to="/home" class="nav-logo">
                        <img @error="errorChange" ref="logoDom" :src="getImageFullPath(siteInfo.logo)"
                             :alt="siteInfo.name"
                        >
                    </router-link>
                </el-col>
                <el-col :xs="24" :sm="20" :md="18" :lg="14" :xl="14">
                    <div class="nav-menu">
                        <ul>
                            <li v-for="item in menuList" :key="item.id">
                                <div>
                                    <a href="javascript:;" @click="handleToPath(item)">{{ item.name }}
                                        <el-icon v-if="item.children && item.children.length">
                                            <CaretBottom/>
                                        </el-icon>
                                    </a>
                                </div>
                                <ul class="dropdown-menu" v-if="item.children && item.children.length">
                                    <li v-for="todo in item.children">
                                        <a @click="handleToPath(todo)" href="javascript:;">{{ todo.name }}</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="3" :md="4" :lg="8" :xl="8">
                    <div class="nav-right">
                        <div class="nav-right-search hidden-md-and-down">
                            <div class="keyword">
                                <it-input v-model="inputValue" prefix-icon="search"/>
                            </div>
                            <it-button type="primary" style="margin-left: 15px;flex-shrink: 0;">搜索</it-button>
                        </div>
                        <div class="nav-menu">
                            <ul>
                                <li>
                                    <div>
                                        <a href="">{{ userInfo.username ? userInfo.username : '个人中心' }}
                                            <el-icon>
                                                <CaretBottom/>
                                            </el-icon>
                                        </a>
                                    </div>
                                    <ul class="dropdown-menu">
                                        <template v-if="userInfo.username">
                                            <li><a @click="handleLogout" href="javascript:;">退出</a></li>
                                        </template>
                                        <template v-else>
                                            <li>
                                                <router-link to="/login">登录</router-link>
                                            </li>
                                            <li><a href="">注册</a></li>
                                        </template>
                                        <li><a target="_blank" href="/admin.html">后台管理</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
    </nav>
</template>
<script setup lang="ts">
import {inject, ref} from 'vue'
import {webChannelAll, userLogout} from '@/bag-web/service/app'
import {toTree} from '@/packages/utils/utils'
import appStore from '@/bag-web/pinia/app'
import logo from '@/common/assets/image/logo3.png'
import userStore from "@/bag-web/pinia/user";
import {useRoute, useRouter} from 'vue-router'
import {utils} from "pm-utils";

const {configApp} = <any>inject('$configAppOptions')

const {getImageFullPath} = inject<any>('bagGlobal')
const {resetPath} = configApp?.httpNetwork
const {siteInfo} = appStore()
const store = userStore()
const userInfo = store.userInfo;
const inputValue = ref()
const logoDom = ref();
const menuList = ref([])
webChannelAll().then((res: any) => {
    menuList.value = toTree(res)
})
const errorChange = () => {
    logoDom.value.src = logo
}
const router = useRouter()
const route = useRoute();
const handleLogout = () => {
    userLogout().then(() => {
        router.push(resetPath).then(() => {
            store.userInfo = {}
        })
    })
}

const handleToPath = (item: any) => {
    const {url} = item;
    if (utils.checkURL(url)) {
        window.open(url)
    } else if (url.indexOf('.html') > -1) {
        window.location.href = window.location.origin + url;
    } else {
        router.push(url)
    }
}

</script>
<style lang="less" scoped>
@nah: 60px;
.nav {
    background-color: var(--bag-color-white);

    &-logo {
        display: flex;
        height: @nah;
        align-items: center;
        vertical-align: top;

        img {
            max-height: 70%;
        }
    }

    &-menu {
        display: flex;
        align-items: center;

        ul {
            li {
                display: inline-block;
                position: relative;

                &:hover {
                    ul {
                        display: block;
                    }
                }

                a {
                    color: var(--bag-text-color-black);
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }

                div {
                    a {
                        padding: 0 20px;
                        height: @nah;
                        line-height: 1;
                        vertical-align: top;

                        &:hover {
                            color: var(--bag-text-color-primary);
                        }
                    }
                }

                ul {
                    display: none;

                    &.dropdown-menu {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        z-index: 1000;
                        min-width: 160px;
                        list-style: none;
                        color: var(--bag-text-color-primary);
                        background-color: var(--bag-color-white);
                        border-radius: 3px;
                        box-shadow: 0 2px 2px rgb(255, 255, 255, 0.9), 0 0 2px rgb(255, 255, 255, 0.9);
                        background-clip: padding-box;

                        li {
                            display: block;

                            a {
                                padding: 8px 20px;

                                &:hover {
                                    color: #262626;
                                    background-color: #f5f5f5;
                                }
                            }
                        }
                    }
                }

            }
        }
    }

    &-right {
        display: flex;
        justify-content: end;

        &-search {
            height: @nah;
            display: flex;
            align-items: center;
            flex: 1;

            .keyword {
                flex: 1;
            }
        }

        .nav-menu {
            flex-shrink: 0;

            a {
                padding-right: 0;
            }

            ul li ul.dropdown-menu {
                right: 0;
                left: unset;
                padding-right: 0;
            }
        }
    }

    &-user {

    }
}
</style>
