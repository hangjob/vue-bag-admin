<template>
    <section class="section section-container">
        <div class="section-title">
            <h1>主题开发</h1>
            <p>Bag是一个开源的系统，更希望有更多的人和我们一起开发主题.</p>
        </div>
        <div>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :md="8" :lg="12" :xl="12">
                    <div class="feature">
                        <vs-icon size="50px" icon="handyman" color="#3ab0e2"></vs-icon>
                        <div>
                            <h5>懂技术</h5>
                            <p>掌握PHP语言，掌握THINKPHP框架，能够熟练应用Linux操作系统，了解Apache、nginx工作原理，良好的数据库知识.</p>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="12" :xl="12">
                    <div class="feature">
                        <vs-icon size="50px" icon="local_florist"  color="#e96656"></vs-icon>
                        <div>
                            <h5>有逼格</h5>
                            <p>对于每件事有自己独立的看法，不随波逐流，这样你设计出来的主题才能做小众里的大众.</p>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="12" :xl="12">
                    <div class="feature">
                        <vs-icon size="50px" icon="psychology_alt"  color="#34d293"></vs-icon>
                        <div>
                            <h5>有脑子</h5>
                            <p>能想到如何设计模板主题更为合理，并且可以发现Bag程序的不足，提出来进行改正.</p>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="12" :xl="12">
                    <div class="feature">
                        <vs-icon size="50px" icon="face_retouching_natural"  color="#FFCA28"></vs-icon>
                        <div>
                            <h5>有审美</h5>
                            <p>懂得色彩搭配，网站布局，模块合理性的摆放，说白了，就是不要太傻.</p>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="12" :xl="12">
                    <div class="feature">
                        <vs-icon size="50px" icon="history_edu"  color="#409eff"></vs-icon>
                        <div>
                            <h5>责任心</h5>
                            <p>如果你愿意参加开源程序的开发，就不要半途而废，有些事不是看到希望才坚持，而是坚持了才能看到希望.</p>
                        </div>
                    </div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="8" :lg="12" :xl="12">
                    <div class="feature">
                        <vs-icon size="50px" icon="rowing"  color="#4FC3F7"></vs-icon>
                        <div>
                            <h5>有耐心</h5>
                            <p>众口难调，自己做出来的菜一定有人说好吃，有人说不好吃，不要一味的与给你意见的人对喷，没有意义 .</p>
                        </div>
                    </div>
                </el-col>
            </el-row>
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
            font-size: 50px;
            font-weight: bold;
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
        }
        i{
            margin-right: 10px;
        }
    }
}
</style>
