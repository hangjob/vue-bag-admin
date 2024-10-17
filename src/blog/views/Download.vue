<template>
    <section class="py-[80px] bg-[#3f5256] text-white section-container">
        <h1 class="text-[50px] font-bold text-center">下载</h1>
        <p class="text-[#808080] mb-10 text-center">以下是Bag近期版本的下载.</p>
        <n-grid cols="12" item-responsive responsive="screen" :x-gap="20">
            <n-grid-item class="wow animate__animated animate__slideInRight" data-wow-duration="2.0s"
                         data-wow-delay="0.5s"
                         span="12 m:6 l:3"
            >
                <div class="package-item mt-[25px] rounded-[4px] bg-white">
                    <div class="h-[82px] bg-[#e96656] flex flex-col items-center justify-center">
                        <h4 class="text-[14px] font-bold">V5.1</h4>
                        <p>最新版本</p>
                    </div>
                    <div class="bg-[#404040]">
                        <h4 class="text-[40px] font-normal text-center py-5">773KB</h4>
                    </div>
                    <ul class="p">
                        <li>时间：2024-10-06</li>
                        <li>简介：新的设计、新的开发方式</li>
                        <li>简介：插件式开发</li>
                        <li>简介：Strapi</li>
                        <li style="display: flex;justify-content: center">
                            <n-button>查看介绍</n-button>
                        </li>
                    </ul>
                    <div class="pt-1 pb-3 flex justify-center items-center">
                        <n-button color="#e96656" size="large"  @click="handleDownload">下载程序</n-button>
                    </div>
                </div>
            </n-grid-item>
            <n-grid-item class="wow animate__animated animate__slideInRight" data-wow-duration="2.0s"
                         data-wow-delay="0.5s"
                         span="12 m:6 l:3"
            >
                <div class="package-item mt-[60px] rounded-[4px] bg-white">
                    <div class="h-[82px] bg-[#99CC33] flex flex-col items-center justify-center">
                        <h4 class="text-[14px] font-bold">V4.1</h4>
                        <p>最新版本</p>
                    </div>
                    <div class="bg-[#404040]">
                        <h4 class="text-[40px] font-normal text-center py-5">2.06M</h4>
                    </div>
                    <ul class="p">
                        <li>时间：2023-09-15</li>
                        <li>简介：全新设计更小更强大</li>
                        <li>简介：Naive UI</li>
                        <li>简介：Mock数据</li>
                        <li style="display: flex;justify-content: center">
                            <n-button>查看介绍</n-button>
                        </li>
                    </ul>
                    <div class="pt-1 pb-3 flex justify-center items-center">
                        <n-button color="#99CC33" size="large"  @click="handleDownload">下载程序</n-button>
                    </div>
                </div>
            </n-grid-item>
            <n-grid-item class="wow animate__animated animate__slideInRight" data-wow-duration="1.8s"
                         data-wow-delay="0.5"
                         span="12 m:6 l:3"
            >
                <div class="package-item mt-[60px] rounded-[4px] bg-white">
                    <div class="h-[82px] bg-[#E7AC44] flex flex-col items-center justify-center">
                        <h4 class="text-[14px] font-bold">v3.1</h4>
                        <p>最新版本</p>
                    </div>
                    <div class="bg-[#404040]">
                        <h4 class="text-[40px] font-normal text-center py-5">2.25M</h4>
                    </div>
                    <ul>
                        <li>时间：2022-04-15</li>
                        <li>简介：增加扩展</li>
                        <li>简介：前端更新</li>
                        <li>简介：node、mysql</li>
                        <li style="display: flex;justify-content: center">
                            <n-button type="primary">查看介绍</n-button>
                        </li>
                    </ul>
                    <div class="pt-1 pb-3 flex justify-center items-center">
                        <n-button size="large" color="#E7AC44" @click="handleDownload">下载程序</n-button>
                    </div>
                </div>
            </n-grid-item>
            <n-grid-item class="wow animate__animated animate__slideInRight" data-wow-duration="1.4s"
                         data-wow-delay="0.5"
                         span="12 m:6 l:3"
            >
                <div class="package-item mt-[60px] rounded-[4px] bg-white">
                    <div class="h-[82px] bg-[#3ab0e2] flex flex-col items-center justify-center">
                        <h4 class="text-[14px] font-bold">V2.0</h4>
                        <p>最新版本</p>
                    </div>
                    <div class="bg-[#404040]">
                        <h4 class="text-[40px] font-normal text-center py-5">2.14M</h4>
                    </div>
                    <ul>
                        <li>时间：2022-01-20</li>
                        <li>简介：调整框架修复若干问题</li>
                        <li>简介：后台更新</li>
                        <li>简介：thinkphp5</li>
                        <li style="display: flex;justify-content: center">
                            <n-button type="primary">查看介绍
                            </n-button>
                        </li>
                    </ul>
                    <div class="pt-1 pb-3 flex justify-center items-center">
                        <n-button
                            color="#3ab0e2"
                            @click="handleDownload('https://github.com/hangjob/vue-bag-admin/archive/refs/tags/v2.0.0.zip')"
                            size="large"
                        >下载程序
                        </n-button>
                    </div>
                </div>
            </n-grid-item>
<!--            <n-grid-item class="wow animate__animated animate__slideInRight" data-wow-duration="1.0s"-->
<!--                         data-wow-delay="0.5"-->
<!--                         span="12 m:6 l:3"-->
<!--            >-->
<!--                <div class="package-item mt-[60px] rounded-[4px] bg-white">-->
<!--                    <div class="h-[82px] bg-[#34d293] flex flex-col items-center justify-center">-->
<!--                        <h4 class="text-[14px] font-bold">V1.0</h4>-->
<!--                        <p>最新版本</p>-->
<!--                    </div>-->
<!--                    <div class="bg-[#404040]">-->
<!--                        <h4 class="text-[40px] font-normal text-center py-5">1.18M</h4>-->
<!--                    </div>-->
<!--                    <ul>-->
<!--                        <li>时间：2021-10-26</li>-->
<!--                        <li>简介：一个新的bag</li>-->
<!--                        <li>简介：Ant Design Vue</li>-->
<!--                        <li>简介：前台简介(无)</li>-->
<!--                        <li style="display: flex;justify-content: center">-->
<!--                            <n-button type="primary">-->
<!--                                查看介绍-->
<!--                            </n-button>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                    <div class="pt-1 pb-3 flex justify-center items-center">-->
<!--                        <n-button color="#34d293" size="large"-->
<!--                                  @click="handleDownload('https://github.com/hangjob/vue-bag-admin/archive/refs/heads/v1.zip')">-->
<!--                            下载程序-->
<!--                        </n-button>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </n-grid-item>-->
        </n-grid>
    </section>
</template>
<script setup>
const images = ref([
    {src: 'https://s1.ax1x.com/2022/05/12/O0R3TO.png'},
    {src: 'https://s1.ax1x.com/2022/05/12/O0RB0f.png'},
    {src: 'https://s1.ax1x.com/2022/05/12/O0R21s.png'},
    {src: 'https://s1.ax1x.com/2022/05/12/O0WpND.png'},
    {src: 'https://s1.ax1x.com/2022/05/12/O0Ww8J.png'},
    {src: 'https://s1.ax1x.com/2022/05/12/O0Wf8H.png'},
])
const handleDownload = (url) => {
    window.location.href = !url ? 'https://www.npmjs.com/package/vue-bag-admin' : url
}
</script>
<style lang="less" scoped>
.package-item {
    ul {
        li {
            padding-top: 10px;
            padding-bottom: 10px;
            width: 80%;
            margin: auto;
            border-bottom: 1px dotted #dadada;
            color: #333333;
            text-align: center;
            overflow: hidden;

            &:last-child {
                border-bottom: none;
            }
        }
    }
}
</style>
