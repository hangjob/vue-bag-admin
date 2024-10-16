<template>
    <section class="section-container bg-white text-center py-[120px]">
        <h1 class="text-[50px] font-bold">特点</h1>
        <p class="text-[#808080] mb-10">相对于其他的系统，Bag一直保持着自己的风格.</p>
        <n-grid cols="12" item-responsive responsive="screen" :x-gap="20">
            <n-grid-item v-for="item in compData.btns" class="trait-item mb-4 text-center wow animate__animated"
                         data-wow-duration="1.0s" data-wow-delay="0.5" span="12 m:4 l:3">
                <div class="trait-item-round"
                     :class="['w-[145px] transition-all h-[145px] m-[auto] rounded-full border-[10px] border-slate-100 flex items-center justify-center']">
                    <n-icon size="60" :color="item.color">
                        <component :is="item.icon"></component>
                    </n-icon>
                </div>
                <h5 class="text-[17px] relative font-bold mt-[20px] mb-4">{{ item.title }}</h5>
                <p class="text-[14px] text-[#808080] text-center leading-6">{{ item.des }}</p>
            </n-grid-item>
        </n-grid>
    </section>
</template>
<script setup>
import {DesktopOutline, DiscOutline, PlanetOutline, HappyOutline} from "@vicons/ionicons5"

const compData = reactive({
    btns: [
        {
            title: '功能强大',
            des: 'Bag所有内容均可以在后台进行修改，所有内容可定制化开发，覆盖面广，涉及后端、移动端、桌面端等开发，快速迭代，降低试错成本，让大家把更多时间专注在业务开发上',
            icon: markRaw(DesktopOutline),
            animateClass: 'animate__bounceInLeft',
            duration: '1.0s',
            color: '#e96656'
        },
        {
            title: '简单易用',
            des: "Bag通过简单npm命令安装，表单CURD完全傻瓜式操作，分分钟一个页面，所有功能，路由权限，按钮权限，即看即会，无需任何功底，无需掌握任何技术，谁都可以是个人站长.",
            icon: markRaw(DiscOutline),
            animateClass: 'animate__bounceInLeft',
            duration: '1.5s',
            color: '#34d293'
        },
        {
            title: '社区强大',
            des: "采用市面主流技术Vue3、Vite、TypeScript、Gulp、Node.js 、Egg.js 、MySQL以及周边的优秀的插件搭建，不用担心自己业务所受框架有限的瓶颈",
            icon: markRaw(PlanetOutline),
            animateClass: 'animate__bounceInRight',
            duration: '1.5s',
            color: '#3ab0e2'
        },
        {
            title: '适合人群',
            des: "1.正在以及想使用框架快速开发网站系统，有过前端开发经验 1 年+,2.熟悉 Vue.js 技术栈，使用它开发过几个实际项目，3.热爱技术，爱学习，想进阶和提升的同学",
            icon: markRaw(HappyOutline),
            animateClass: 'animate__bounceInRight',
            duration: '1.0s',
            color: '#f7d861'
        }
    ]
})

</script>
<style lang="less" scoped>
.trait-item{
    h5 {
        &:before {
            position: absolute;
            z-index: 1;
            content: "";
            width: 20%;
            height: 2px;
            bottom: -5px;
            left: 50%;
            transform: translate(-50%, 0);
        }
    }
}
.trait-item:nth-child(1) {
    h5 {
        &:before {
            background-color: #e96656;
        }
    }
    .trait-item-round {
        &:hover {
            border-color: #e96656;
        }
    }
}

.trait-item:nth-child(2) {
    h5 {
        &:before {
            background-color: #34d293;
        }
    }
    .trait-item-round {
        &:hover {
            border-color: #34d293;
        }
    }
}

.trait-item:nth-child(3) {
    h5 {
        &:before {
            background-color: #3ab0e2;
        }
    }
    .trait-item-round {
        &:hover {
            border-color: #3ab0e2;
        }
    }
}

.trait-item:nth-child(4) {
    h5 {
        &:before {
            background-color: #f7d861;
        }
    }
    .trait-item-round {
        &:hover {
            border-color: #f7d861;

        }
    }
}
</style>
