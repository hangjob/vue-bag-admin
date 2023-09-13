<template>
    <section class="section section-container">
        <div class="section-title">
            <h1>下载</h1>
            <p>以下是Bag近期版本的下载.</p>
        </div>
        <n-grid cols="24" x-gap="10"  y-gap="30" item-responsive responsive="screen">
            <n-grid-item class="wow animate__animated animate__slideInRight" data-wow-duration="1.8s"
                         data-wow-delay="0.5"
                         span="24 m:12 l:6"
            >
                <div class="package" style="margin-top: 20px">
                    <div class="package-header">
                        <h4>v4.0</h4>
                        <p>最新版本</p>
                    </div>
                    <div class="package-price">
                        <h4>310.KB</h4>
                    </div>
                    <ul>
                        <li>时间：2023-09-15</li>
                        <li>简介：全新设计更小更强大</li>
                        <li>前端：<n-tag :bordered="false" type="success">Naive UI</n-tag></li>
                        <li>后端：Mock数据</li>
                        <li style="display: flex;justify-content: center">
                            <n-button type="primary" @click="handleDoc">查看介绍</n-button>
                        </li>
                    </ul>
                    <div class="action">
                        <n-button size="large" type="error"  @click="handleDownload">下载程序</n-button>
                    </div>
                </div>
            </n-grid-item>
            <n-grid-item class="wow animate__animated animate__slideInRight" data-wow-duration="2.0s"
                         data-wow-delay="0.5s"
                         span="24 m:12 l:6"
            >
                <div class="package">
                    <div class="package-header" style="background-color: #E7AC44">
                        <h4>V3.1</h4>
                        <p>最新版本</p>
                    </div>
                    <div class="package-price">
                        <h4>2.06M</h4>
                    </div>
                    <ul>
                        <li>时间：2022-08-06</li>
                        <li>简介：增加扩展</li>
                        <li>前端：前端更新</li>
                        <li>后端：node、mysql</li>
                        <li style="display: flex;justify-content: center">
                            <n-button type="success" @click="visible[0] = true">查看介绍</n-button>
                        </li>
                    </ul>
                    <div class="action">
                        <n-button size="large" @click="handleDownload">下载程序</n-button>
                    </div>
                </div>
            </n-grid-item>
            <n-grid-item class="wow animate__animated animate__slideInRight" data-wow-duration="1.4s"
                         data-wow-delay="0.5"
                         span="24 m:12 l:6"
            >
                <div class="package">
                    <div class="package-header" style="background-color: #3ab0e2">
                        <h4>V2.0</h4>
                        <p>最新版本</p>
                    </div>
                    <div class="package-price">
                        <h4>2.14M</h4>
                    </div>
                    <ul>
                        <li>时间：2022-01-20</li>
                        <li>简介：调整框架修复若干问题</li>
                        <li>前端：前端更新</li>
                        <li>后端：node、mysql</li>
                        <li style="display: flex;justify-content: center">
                            <n-button type="primary" @click="visible[2] = true">查看介绍</n-button>
                        </li>
                    </ul>
                    <div class="action">
                        <n-button
                            @click="handleDownload('https://github.com/hangjob/vue-bag-admin/archive/refs/tags/v2.0.0.zip')"
                            target
                            size="large"
                        >下载程序
                        </n-button>
                    </div>
                </div>
            </n-grid-item>
            <n-grid-item class="wow animate__animated animate__slideInRight" data-wow-duration="1.0s"
                         data-wow-delay="0.5"
                         span="24 m:12 l:6"
            >
                <div class="package">
                    <div class="package-header" style="background-color: #34d293">
                        <h4>v1.0</h4>
                        <p>最新版本</p>
                    </div>
                    <div class="package-price">
                        <h4>1.18M</h4>
                    </div>
                    <ul>
                        <li>时间：2021-10-26</li>
                        <li>简介：一个新的bag</li>
                        <li>前端：Ant Design Vue</li>
                        <li>后端：前台简介(无)</li>
                        <li style="display: flex;justify-content: center">
                            <n-button type="primary" @click="visible[3] = true">
                                查看介绍
                            </n-button>
                        </li>
                    </ul>
                    <div class="action">
                        <n-button target size="large"
                                  @click="handleDownload('https://github.com/hangjob/vue-bag-admin/archive/refs/heads/v1.zip')"
                        >下载程序
                        </n-button>
                    </div>
                </div>
            </n-grid-item>
        </n-grid>
        <n-modal class="download-release"
                 preset="dialog"
                 type="success"
                 v-model:show="visible[0]">
            <n-card
                title=""
                :bordered="false"
                size="huge"
                role="dialog"
                aria-modal="true"
            >
                <div class="release-four">
                    <ul>
                        <li>本次版本内容更新如下：</li>
                        <li>npm i vue-bag-admin 一键安装</li>
                        <li>✅ 增加角色权限</li>
                        <li>✅ 增加Web前端</li>
                        <li>✅ 增加CURD表单</li>
                        <li>✅ 增加表格数据导出</li>
                        <li>✅ 增加表格数据动态列</li>
                        <li>✅ 使用pinia状态管理</li>
                        <li>✅ 完善动态Router子路由父级节点</li>
                        <li>✅ 增加站点配置功能</li>
                        <li>✅ 增加更多使用案列</li>
                        <li>✅ 增加素材图库选择功能</li>
                        <li>✅ 修复若干Bug</li>
                    </ul>
                </div>
            </n-card>
            <template #icon>
                <n-icon>
                    <RocketOutline/>
                </n-icon>
            </template>
        </n-modal>
        <n-modal class="download-release" preset="dialog"
                 type="success" v-model:show="visible[1]">
            <n-card
                title=""
                :bordered="false"
                size="huge"
                role="dialog"
                aria-modal="true"
            >
                <div class="release-four">
                    <ul>
                        <li>本次版本内容更新如下：</li>
                        <li>npm i vue-bag-admin 一键安装</li>
                        <li>✅ 全局参数配置</li>
                        <li>✅ 路由动态添加</li>
                        <li>✅ 状态管理动态注入</li>
                        <li>✅ 网络请求配置</li>
                        <li>✅ Mock数据</li>
                        <li>✅ 添加SQL文件测试数据</li>
                        <li>✅ 模型自动完成创建数据库</li>
                        <li>✅ 修复若干Bug</li>
                    </ul>
                </div>
            </n-card>
            <template #icon>
                <n-icon>
                    <RocketOutline/>
                </n-icon>
            </template>
        </n-modal>
        <n-modal class="download-release"  preset="dialog"
                 type="success" v-model:show="visible[2]">
            <n-card
                title=""
                :bordered="false"
                size="huge"
                role="dialog"
                aria-modal="true"
            >
                <div class="release-four">
                    <ul>
                        <li>本次版本内容更新如下：</li>
                        <li>✅ 增加文档演示</li>
                        <li>✅ 项目切换</li>
                        <li>✅ 优化后端模型增删改查逻辑</li>
                        <li>✅ 优化前端form表单模型增删改查逻辑</li>
                        <li>✅ 扩展配置主题参数</li>
                        <li>✅ 目录命名更换采用官方推荐</li>
                        <li>✅ 调整多页面打包路径引入</li>
                        <li>✅ 修复浏览器报警告提示</li>
                        <li>✅ 调整Egg.js路由输出方式</li>
                        <li>✅ 删除冗余代码</li>
                        <li>✅ 修复若干Bug</li>
                    </ul>
                    <div class="release-images" v-if="images">
                        <n-grid>
                            <n-grid-item span="24 m:6 l:4" v-for="(image,index) in images"
                                         :key="index">
                                <div class="iamge">
                                    <img :src="image.src" :alt="image.alt"
                                         style="cursor: pointer;height: 80px;object-fit:cover"
                                         @click="handleImage(index)"
                                    />
                                </div>
                            </n-grid-item>
                        </n-grid>
                    </div>
                </div>
            </n-card>
            <template #icon>
                <n-icon>
                    <RocketOutline/>
                </n-icon>
            </template>
        </n-modal>
        <n-modal class="download-release"  preset="dialog"
                 type="success" v-model:show="visible[3]">
            <n-card
                title=""
                :bordered="false"
                size="huge"
                role="dialog"
                aria-modal="true"
            >
                <div class="release-four">
                    <ul>
                        <li>本次版本内容更新如下：</li>
                        <li>✅ 布局UI组件，选用ant-design-vue为基础组件</li>
                        <li>✅ 使用TypeScript作为开发语言</li>
                        <li>✅ 整体框架响应式布局</li>
                        <li>✅ 面包屑导航 + 多种布局效果</li>
                        <li>✅ 基于后台权限,按钮权限设计</li>
                        <li>✅ 内置iconfont字体图标，自动生成组件</li>
                        <li>✅ 网络错误重连</li>
                        <li>✅ 组件权限指令封装</li>
                        <li>✅ http网络组件(vue3新特性)</li>
                        <li>✅ 菜单管理，包含增、删、改、查，菜单是缓存、是否固定、是否隐藏(但展示)、是否隐藏等待
                            具体功能,查看文档
                        </li>
                        <li>✅ 包含富文本编辑器，文件打印，图表预览，动画组件，状态详情组件等等</li>
                        <li>✅ 支持多页面应用</li>
                        <li>✅ 支持iframe内嵌</li>
                        <li>✅ 骨架屏组件预览</li>
                        <li>✅ 右键菜单交互</li>
                        <li>✅ 基于mitt全局通信</li>
                        <li>✅ Egg.js后端服务，具体操作看文档</li>
                        <li>✅ sequelize模型增删改查</li>
                        <li>✅ Eslint代码检查</li>
                        <li>✅ 开发编辑器全局配置</li>
                        <li>✅ 打包压缩处理Gzip</li>
                        <li>✅ Gulp命名文件更改</li>
                    </ul>
                </div>
            </n-card>
            <template #icon>
                <n-icon>
                    <RocketOutline/>
                </n-icon>
            </template>
        </n-modal>
    </section>
</template>
<script lang="ts">
import {defineComponent, reactive, ref} from "vue"


export default defineComponent({
    setup() {
        const visible = ref([false, false, false, false])
        const activeIndex = ref(0)
        const displayCustom = ref(false)
        const responsiveOptions = reactive([
            {
                breakpoint: "1024px",
                numVisible: 5,
            },
            {
                breakpoint: "768px",
                numVisible: 3,
            },
            {
                breakpoint: "560px",
                numVisible: 1,
            },
        ])
        const handleClose = (idx: number) => {
            setTimeout(() => {
                visible.value[idx] = false
            }, 200)
        }
        const handleImage = (idx: number) => {
            activeIndex.value = idx
            displayCustom.value = true
        }
        const images = ref([
            {src: "https://s1.ax1x.com/2022/05/12/O0R3TO.png"},
            {src: "https://s1.ax1x.com/2022/05/12/O0RB0f.png"},
            {src: "https://s1.ax1x.com/2022/05/12/O0R21s.png"},
            {src: "https://s1.ax1x.com/2022/05/12/O0WpND.png"},
            {src: "https://s1.ax1x.com/2022/05/12/O0Ww8J.png"},
            {src: "https://s1.ax1x.com/2022/05/12/O0Wf8H.png"},
        ])
        const handleDownload = (url) => {
            window.location.href = !url ? "https://www.npmjs.com/package/vue-bag-admin" : url
        }

        const handleDoc = ()=>{
            window.location.href = "/docs/index.html"
        }

        return {
            visible,
            images,
            handleClose,
            handleImage,
            activeIndex,
            displayCustom,
            responsiveOptions,
            handleDownload,
            handleDoc
        }
    },
})
</script>
<style lang="less" scoped>
.section {
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: #3f5256;
    position: relative;
    overflow: hidden;
    color: #FFFFFF;

    &-title {
        text-align: center;
        margin-bottom: 30px;
    }

    h1 {
        font-size: 50px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .package {
        border-radius: 4px;
        overflow: hidden;
        background-color: #FFFFFF;
        margin-top: 60px;

        &-header {
            height: 82px;
            background-color: #e96656;
            color: #FFF;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            h4 {
                font-weight: bold;
                line-height: 29px;
                text-transform: uppercase;
            }

            .meta-text {
                font-size: 13px;
                line-height: normal;
            }
        }

        &-price {
            height: 100px;
            color: #FFF;
            font-weight: 400;
            background-color: #404040;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;

            h4 {
                display: inline;
                font-size: 40px;
                line-height: normal;
                margin-bottom: 0;
            }
        }

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
                    margin-top: 10px;
                }
            }
        }

        .action {
            overflow: hidden;
            display: flex;
            justify-content: center;
            padding-bottom: 20px;
            margin-top: 10px;
        }
    }
}
</style>
<style lang="less" scoped>
.release-four {
    ul {
        li {
            padding: 5px 0;
        }
    }
}

.release-images {
    margin-top: 20px;

    .iamge {
        background-color: #ececec;
        border-radius: 3px;
        text-align: center;
        margin: 10px 0;
    }

    img {
        border-radius: 3px;
    }
}
</style>
