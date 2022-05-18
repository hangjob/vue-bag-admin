<template>
    <div class="nav">
        <div class="container">
            <el-row>
                <el-col :xs="24" :sm="6" :md="4" :lg="4" :xl="4">
                    <div class="nav-logo"><img src="@/common/assets/image/logo3.png" alt=""></div>
                </el-col>
                <el-col :xs="24" :sm="18" :md="20" :lg="20" :xl="20">
                    <div class="nav-menu">
                        <ul>
                            <template v-for="item in menuList">
                                <li @click="handleScrollTo(item.components,$event)" v-if="item.name" :key="item.id">
                                    <div>
                                        <a href="javascript:;">{{ item.name }}</a>
                                    </div>
                                </li>
                            </template>
                        </ul>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import menuList from '@www/blog/config/menu'

function heightToTop(ele: any) {
    //ele为指定跳转到该位置的DOM节点
    let root = document.body
    let height = 0
    do {
        height += ele.offsetTop
        ele = ele.offsetParent
    } while (ele !== root)
    return height
}

export default defineComponent({
    setup() {

        const handleScrollTo = (id: string, $event: Event) => {
            if (document.getElementById(id)) {
                window.scrollTo({
                    top: heightToTop(document.getElementById(id)),
                    behavior: 'smooth',
                })
            }
        }

        return {
            menuList,
            handleScrollTo,
        }
    },
})
</script>
<style lang="less" scoped>
@nah: 60px;
.nav {
    background-color: #FFFFFF;
    position: relative;
    z-index: 1000;

    &-logo {
        display: flex;
        height: @nah;
        align-items: center;
        vertical-align: top;
        img{
            height:30px
        }
    }

    &-menu {
        display: flex;
        align-items: center;
        justify-content: end;

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
            }
        }
    }
}
</style>
