<template>
    <div class="help">
        <bag-card style="margin-top:0" :title="route.meta.title">
            <template v-slot:body>
                <h1>一、关于如何使用:</h1>
                <ul>
                    <li>
                        <router-link to="">1、如何部署服务器？</router-link>
                    </li>
                    <li>
                        <router-link to="">2、我想私有部署，能协助吗？</router-link>
                    </li>
                    <li>
                        <router-link to="">3、我是用源码开发，还是用npm包开发?</router-link>
                    </li>
                    <li>
                        <router-link to="">4、我是用源码开发，还是用npm包开发?</router-link>
                    </li>
                    <li>
                        <router-link to="">6、我一年开发，想使用此框架，可以吗?</router-link>
                    </li>
                </ul>
                <h1>二、关于技术相关:</h1>
                <ul>
                    <li>
                        <router-link to="">1、我不会vue3能开发吗？</router-link>
                    </li>
                    <li>
                        <router-link to="">2、我不会typescript能很好使用它吗？</router-link>
                    </li>
                    <li>
                        <router-link to="">3、我该选择用什么语言开发后台服务?</router-link>
                    </li>
                    <li>
                        <router-link to="">4、我不用vite使用vue-cli可以吗?</router-link>
                    </li>
                </ul>
                <h1>三、其他问题:</h1>
                <ul>
                    <li>
                        <router-link to="">1、页面挺好看的，想问用到哪些技术栈？</router-link>
                    </li>
                    <li>
                        <router-link to="">2、网站有用到UI框架嘛？</router-link>
                    </li>
                    <li>
                        <router-link to="">3、样式及交互怎么写的吗？是纯手写，还是有组件?</router-link>
                    </li>
                    <li>
                        <router-link to="">4、可以跟你换友链吗?</router-link>
                    </li>
                    <li>
                        <router-link to="">5、你的网站访问速好快?</router-link>
                    </li>
                </ul>
            </template>
        </bag-card>
    </div>
</template>
<script lang="ts" setup>
import {useRouter, useRoute} from 'vue-router';

const route = useRoute();
</script>
<style lang="less" scoped>
.help {
    h1 {
        transition: all 0s ease 0s;
        color: rgb(40, 40, 40);
        font-size: 16px;
        display: block;
        line-height: 21px;
        font-weight: bold;
        padding-bottom: 20px;
    }

    ul {
        li {
            margin-bottom: 20px;
            text-indent: 30px;

            &:last-of-type {
                margin-bottom: 40px;
            }

            a {
                transition: all 0s ease 0s;
                line-height: 30px;
                cursor: pointer;
                border-radius: 0px;
                font-size: 15px;
                color: #525252;
            }
        }
        &:last-of-type{
            li:last-of-type{
                margin-bottom: 20px;
            }
        }
    }
}
</style>
