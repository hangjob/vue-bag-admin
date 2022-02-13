<template>
    <nav class="nav">
        <div class="container">
            <el-row>
                <el-col :xs="24" :sm="1" :md="2" :lg="1" :xl="1">
                    <div class="nav-logo"><img src="@www/web/assets/image/logo.png" alt=""></div>
                </el-col>
                <el-col :xs="24" :sm="20" :md="18" :lg="15" :xl="15">
                    <div class="nav-menu">
                        <ul>
                            <li>
                                <div><a href="">首页</a></div>
                            </li>
                            <li>
                                <div>
                                    <a href="">绩效管理
                                        <it-icon name="arrow_drop_down" outlined />
                                    </a>
                                </div>
                                <ul class="dropdown-menu">
                                    <li><a href="">工时登记</a></li>
                                    <li><a href="">工作日志</a></li>
                                    <li><a href="">绩效列表</a></li>
                                </ul>
                            </li>
                            <li>
                                <div><a href="">博客</a></div>
                            </li>
                            <li>
                                <div><a href="">网址管理</a></div>
                            </li>
                            <li>
                                <div><a href="">统计</a></div>
                            </li>
                            <li>
                                <div><a href="">讨论</a></div>
                            </li>
                            <li>
                                <div><a href="">我的工位</a></div>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="3" :md="4" :lg="8" :xl="8">
                    <div class="nav-right">
                        <div class="nav-right-search hidden-md-and-down">
                            <div class="keyword">
                                <it-input v-model="inputValue" prefix-icon="search" />
                            </div>
                            <it-button type="primary" style="margin-left: 15px;flex-shrink: 0;">搜索</it-button>
                        </div>
                        <div class="nav-menu">
                            <ul>
                                <li>
                                    <div>
                                        <a href="">个人中心
                                            <it-icon name="arrow_drop_down" outlined />
                                        </a>
                                    </div>
                                    <ul class="dropdown-menu">
                                        <li><a href="">登录</a></li>
                                        <li><a href="">注册</a></li>
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
import { ref } from 'vue'

const inputValue = ref()
</script>
<style lang="less" scoped>
@nah: 60px;
.nav {
    background-color: var(--yh-color-white);

    &-logo {
        display: flex;
        height: @nah;
        align-items: center;
        vertical-align: top;
    }

    &-menu {
        height: @nah;
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
                    color: var(--yh-text-color-black);
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
                            color: var(--yh-text-color-primary);
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
                        color: var(--yh-text-color-primary);
                        background-color: var(--yh-color-white);
                        border-radius: 3px;
                        box-shadow: 0 20px 30px rgb(83 88 93 / 5%), 0 0 30px rgb(83 88 93 / 10%);
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
            a{
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
