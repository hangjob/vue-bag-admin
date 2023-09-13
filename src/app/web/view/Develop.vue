<template>
    <section class="section section-container">
        <div class="section-title">
            <h1>主题开发</h1>
            <p>Bag是一个开源的系统，更希望有更多的人和我一起开发主题.</p>
        </div>
        <div>
            <n-grid cols="24" x-gap="10"  y-gap="30" item-responsive responsive="screen">
                <n-grid-item span="24 m:24 l:12" class="wow animate__animated animate__fadeInTopLeft" data-wow-duration="1.0s" data-wow-delay="0.2s"  :xs="24" :sm="24" :md="8" :lg="12" :xl="12">
                    <div class="feature">
                        <n-icon size="40px" color="#3ab0e2">
                            <PlanetOutline />
                        </n-icon>
                        <div>
                            <h5>懂技术</h5>
                            <p>掌握JavaScript/Node语言，掌握Vue/Egg.js框架，能够熟练应用Vue生态插件，了解webpack、gulp、nginx工作原理，良好的数据库知识</p>
                        </div>
                    </div>
                </n-grid-item>
                <n-grid-item span="24 m:24 l:12" class="wow animate__animated animate__fadeInTopRight" data-wow-duration="1.0s" data-wow-delay="0.2s" :xs="24" :sm="24" :md="8" :lg="12" :xl="12">
                    <div class="feature">
                        <n-icon size="40px" color="#e96656">
                            <ColorPaletteOutline />
                        </n-icon>
                        <div>
                            <h5>好动手</h5>
                            <p>我专注的领域对于每件事有自己独立的看法，亲自动手去尝试，看是否符合自己的预期.</p>
                        </div>
                    </div>
                </n-grid-item>
                <n-grid-item span="24 m:24 l:12" class="wow animate__animated animate__fadeInLeft" data-wow-duration="1.0s" data-wow-delay="0.2s" :xs="24" :sm="24" :md="8" :lg="12" :xl="12">
                    <div class="feature">
                        <n-icon size="40px" color="#34d293">
                            <FootstepsOutline />
                        </n-icon>
                        <div>
                            <h5>小机灵</h5>
                            <p>看到好的设计，能想到如何设计一个好的模板，并且在设计的过程中发现Bag的程序的不足，提出来进行更正</p>
                        </div>
                    </div>
                </n-grid-item>
                <n-grid-item  span="24 m:24 l:12" class="wow animate__animated animate__fadeInRight" data-wow-duration="1.0s" data-wow-delay="0.2s" :xs="24" :sm="24" :md="8" :lg="12" :xl="12">
                    <div class="feature">
                        <n-icon size="40px" color="#409eff">
                            <SmileOutlined />
                        </n-icon>
                        <div>
                            <h5>好奇心</h5>
                            <p>好奇心的程序员不断致力于创新技术，喜欢思考，爱钻研，善于解决问题</p>
                        </div>
                    </div>
                </n-grid-item>
                <n-grid-item span="24 m:24 l:12" class="wow animate__animated animate__fadeInBottomLeft" data-wow-duration="1.0s" data-wow-delay="0.2s" :xs="24" :sm="24" :md="8" :lg="12" :xl="12">
                    <div class="feature">
                        <n-icon size="40px" color="#FFCA28">
                            <SketchOutlined />
                        </n-icon>
                        <div>
                            <h5>有审美</h5>
                            <p>懂有色彩搭配，网站布局的技巧，模块合理性的摆放，利用CSS3和JavaScript制作简单用户回馈动画.</p>
                        </div>
                    </div>
                </n-grid-item>
                <n-grid-item  span="24 m:24 l:12" class="wow animate__animated animate__fadeInBottomRight" data-wow-duration="1.0s" data-wow-delay="0.2s" :xs="24" :sm="24" :md="8" :lg="12" :xl="12">
                    <div class="feature">
                        <n-icon size="40px" color="#4FC3F7">
                            <HourglassOutline />
                        </n-icon>
                        <div>
                            <h5>有耐心</h5>
                            <p>制作的一个好的主题，就像木匠一样，需要细心打磨，耐心、细心、用心，有些事不是看到希望才坚持，而是坚持了才能看到希望</p>
                        </div>
                    </div>
                </n-grid-item>
            </n-grid>
        </div>
    </section>
</template>
<script>

</script>
<style lang="less" scoped>
.section {
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: #FFFFFF;
    position: relative;
    overflow: hidden;
    color: #333333;
    text-align: center;

    &-title {
        text-align: center;
        h1 {
            font-size: 40px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        p{
            color: #8f8f8f;
        }
    }

    .feature {
        text-align: left;
        display: flex;
        padding: 25px 10px;
        align-items: center;
        h5{
            font-weight: bold;
            line-height: 28px;
            color: #404040;
        }
        p{
            color: #808080;
            line-height: 20px;
        }
        i{
            margin-right: 10px;
        }
    }
}
</style>
