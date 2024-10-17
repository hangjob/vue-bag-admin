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
            title: '响应式开发',
            des: '样式基于tailwindcss开发，自动适配PC端、移动端，增强网站的响应式设计，提高网站的可用性，提供多种不同风格的皮肤，页面美观，减少开发成本和维护工作',
            icon: markRaw(DesktopOutline),
            animateClass: 'animate__bounceInLeft',
            duration: '1.0s',
            color: '#e96656'
        },
        {
            title: '方便易用',
            des: "通过npm命令安装引入主程序包开发，也可以通过下载源码进行二次开发，框架(packages)和应用(app)分开，即可以减少项目之间的耦合，也能提升项目扩展性",
            icon: markRaw(DiscOutline),
            animateClass: 'animate__bounceInLeft',
            duration: '1.5s',
            color: '#34d293'
        },
        {
            title: '社区强大',
            des: "采用市面主流技术Vue3、Vite5、Naive-ui、Pinia 、Strapi5、MySQL等等，不用担心自己业务所受框架有限的瓶颈， 完全免费，且可商用",
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
