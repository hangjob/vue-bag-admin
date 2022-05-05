<template>
    <div class="nav">
        <div class="container">
            <el-row>
                <el-col :xs="24" :sm="6" :md="4" :lg="4" :xl="4">
                    <div class="nav-logo"><img src="@/bag-web/assets/image/logo.png" alt=""></div>
                </el-col>
                <el-col :xs="24" :sm="18" :md="20" :lg="20" :xl="20">
                    <div class="nav-menu">
                        <ul>
                            <li v-for="item in menuList" :key="item.id">
                                <div>
                                    <a href="">{{ item.name }}</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
    setup() {
        const menuList = ref([
            {name: '主页', url: ''},
            {name: '特点', url: ''},
            {name: '博文', url: ''},
            {name: '下载', url: ''},
            {name: '开发', url: ''},
            {name: '主题', url: ''},
            {name: '评价', url: ''},
            {name: '留言', url: ''},
        ])
        return {
            menuList
        }
    }
})
</script>
<style lang="less" scoped>
@nah: 60px;
.nav {
    background-color: #FFFFFF;

    &-logo {
        display: flex;
        height: @nah;
        align-items: center;
        vertical-align: top;
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
