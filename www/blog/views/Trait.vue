<template>
    <section class="section section-container">
        <h1>特点</h1>
        <p>相对于其他的系统，Bag一直保持着自己的风格.</p>
        <el-row :gutter="20">
            <el-col class="wow animate__animated animate__bounceInLeft" data-wow-duration="1.0s" data-wow-delay="0.5"
                    :xs="24" :sm="12" :md="8" :lg="6" :xl="6"
            >
                <div class="service-icon service-icon1">
                    <div class="circle">
                        <el-icon size="60" color="#e96656">
                            <Cpu />
                        </el-icon>
                    </div>
                    <h5>功能强大</h5>
                    <p class="indent">Bag所有内容均可以在后台进行修改，所有内容可定制化开发，覆盖面广，涉及后端、移动端、桌面端等开发，快速迭代，降低试错成本，让大家把更多时间专注在业务开发上</p>
                </div>
            </el-col>
            <el-col class="wow animate__animated animate__bounceInLeft" data-wow-duration="1.5s" data-wow-delay="0.5"
                    :xs="24" :sm="12" :md="8" :lg="6" :xl="6"
            >
                <div class="service-icon service-icon2">
                    <div class="circle">
                        <el-icon size="60" color="#34d293">
                            <Cherry />
                        </el-icon>
                    </div>
                    <h5>简单易用</h5>
                    <p class="indent">Bag通过简单npm命令安装，表单CURD完全傻瓜式操作，分分钟一个页面，所有功能，路由权限，按钮权限，即看即会，无需任何功底，无需掌握任何技术，谁都可以是个人站长.</p>
                </div>
            </el-col>
            <el-col class="wow animate__animated animate__bounceInRight" data-wow-duration="1.5s" data-wow-delay="0.5"
                    :xs="24" :sm="12" :md="8" :lg="6" :xl="6"
            >
                <div class="service-icon service-icon3">
                    <div class="circle">
                        <el-icon size="60" color="#3ab0e2">
                            <Promotion />
                        </el-icon>
                    </div>
                    <h5>社区强大</h5>
                    <p class="indent">采用市面主流技术Vue3、Vite、TypeScript、Gulp、Node.js 、Egg.js
                        、MySQL以及周边的优秀的插件搭建，不用担心自己业务所受框架有限的瓶颈</p>
                </div>
            </el-col>
            <el-col class="wow animate__animated animate__bounceInRight" data-wow-duration="1.0s" data-wow-delay="0.5"
                    :xs="24" :sm="12" :md="8" :lg="6" :xl="6"
            >
                <div class="service-icon service-icon4">
                    <div class="circle">
                        <el-icon size="60" color="#f7d861">
                            <Basketball />
                        </el-icon>
                    </div>
                    <h5>适合人群</h5>
                    <p class="indent">1.正在以及想使用框架快速开发网站系统，有过前端开发经验 1 年+,2.熟悉 Vue.js
                        技术栈，使用它开发过几个实际项目，3.热爱技术，爱学习，想进阶和提升的同学</p>
                </div>
            </el-col>
        </el-row>
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
