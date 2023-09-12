<template>
    <section class="section section-container">
        <h1>特点</h1>
        <p>相对于其他的系统，Bag一直保持着自己的风格.</p>
        <n-grid cols="24" x-gap="10" y-gap="30" item-responsive responsive="screen">
            <n-grid-item span="24 m:12 l:6" class="wow animate__animated animate__bounceInLeft" data-wow-duration="1.0s"
                         data-wow-delay="0.5">
                <div class="service-icon service-icon1">
                    <div class="circle">
                        <n-icon size="60"  color="#e96656">
                            <DesktopOutline/>
                        </n-icon>
                    </div>
                    <h5>响应式开发</h5>
                    <p class="indent">基于Css媒体查询进行开发,手机、平板、PC均自动适配，增强网站的响应式设计，提高网站的可用性，减少开发成本和维护工作</p>
                </div>
            </n-grid-item>
            <n-grid-item span="24 m:12 l:6" class="wow animate__animated animate__bounceInLeft" data-wow-duration="1.5s"
                         data-wow-delay="0.5">
                <div class="service-icon service-icon2">
                    <div class="circle">
                        <n-icon size="60" color="#34d293">
                            <DiscOutline/>
                        </n-icon>
                    </div>
                    <h5>方便易用</h5>
                    <p class="indent">Bag可通过npm命令安装主程序包，也可下载源码开发，做到框架(packages)和应用(app)分开，即可以减少项目之间的耦合，也能提升项目扩展性</p>
                </div>
            </n-grid-item>
            <n-grid-item span="24 m:12 l:6" class="wow animate__animated animate__bounceInRight"
                         data-wow-duration="1.5s" data-wow-delay="0.5">
                <div class="service-icon service-icon3">
                    <div class="circle">
                        <n-icon size="60"  color="#3ab0e2">
                            <RocketOutline/>
                        </n-icon>
                    </div>
                    <h5>社区强大</h5>
                    <p class="indent">采用主流技术Vue3、Vite、TypeScript、Gulp、Pinia以及周边的优秀的插件搭建，不用担心自己业务所受框架有限的瓶颈</p>
                </div>
            </n-grid-item>
            <n-grid-item span="24 m:12 l:6" class="wow animate__animated animate__bounceInRight"
                         data-wow-duration="1.0s" data-wow-delay="0.5">
                <div class="service-icon service-icon4">
                    <div class="circle">
                        <n-icon size="60" color="#f7d861">
                            <BicycleOutline/>
                        </n-icon>
                    </div>
                    <h5>适合人群</h5>
                    <p class="indent">正在以及想使用框架快速中后台系统，熟悉Vue使用它开发过几个实际项目，热爱技术，爱学习，想进阶和提升的同学</p>
                </div>
            </n-grid-item>
        </n-grid>
    </section>
</template>
<script lang="ts" setup>

</script>
<style lang="less" scoped>
.section {
    padding-top: 120px;
    padding-bottom: 120px;
    background: rgba(255, 255, 255, 1);
    position: relative;
    overflow: hidden;
    color: #333333;
    text-align: center;

    h1 {
        font-size: 50px;
        font-weight: bold;
    }


    p {
        font-size: 14px;
        color: #808080;
        line-height: 25px;
        text-align: center;
    }

    p.indent {
        text-indent: 28px;
    }

    .service-icon {
        margin-top: 40px;

        .circle {
            width: 145px;
            height: 145px;
            margin: auto;
            border-radius: 50%;
            border: 10px solid #ececec;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s;
        }

        h5 {
            font-weight: bold;
            font-size: 17px;
            position: relative;
            margin-top: 20px;
            margin-bottom: 30px;

            &::before {
                position: absolute;
                z-index: 1;
                content: "";
                width: 20%;
                height: 2px;
                background-color: #e96656;
                bottom: -10px;
                left: 50%;
                transform: translate(-50%, 0);
            }
        }

        &.service-icon1 {
            h5 {
                &::before {
                    background-color: #e96656;
                }
            }

            .circle {
                &:hover {
                    border-color: #e96656;
                }
            }
        }

        &.service-icon2 {
            h5 {
                &::before {
                    background-color: #34d293;
                }
            }

            .circle {
                &:hover {
                    border-color: #34d293;
                }
            }
        }

        &.service-icon3 {
            h5 {
                &::before {
                    background-color: #3ab0e2;
                }
            }

            .circle {
                &:hover {
                    border-color: #3ab0e2;
                }
            }
        }

        &.service-icon4 {
            h5 {
                &::before {
                    background-color: #f7d861;
                }
            }

            .circle {
                &:hover {
                    border-color: #f7d861;
                }
            }
        }
    }
}
</style>
