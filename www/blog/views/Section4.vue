<template>
    <section class="section section-container">
        <h1>序言</h1>
        <p style="text-align: center;margin-bottom: 20px">这里介绍了Bag是由何而来的经过.</p>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="24" :lg="12" :xl="12">
                <p>
                    Bag最初只是我的私人博客作品，后来发现大家很喜欢，所以就开源化，我希望每个人都有一个心灵栖息的地方，从工作到感情，心中那份小而美一直存在。 感谢：本套程序使用了ThinkPHP,BootStrap,以及网络上一些插件，在这里感谢ThinkPHP,BootStrap的开源，为本套博客带来了很强大的程序基础，也感谢为Bag提出建议，提供优化的广大网友，谢谢！
                    <br/>1.Bag官网网址：Bag 作者：MonkeyCode<br/>
                    2.感谢您选择Bag，希望我们的努力能为您提供一个简单、强大的博客系统。<br/>
                    3.如果您对Bag有BUG提交或者功能建议 可以发送邮件到作者邮箱lcm1475@aliyun.com或者在官网留言<br/>
                    4.我们希望您在使用过程中可以加入Bag讨论群分享使用经验（交流群在官网查看）<br/>
                    5.Bag是一个开源产品，简单的一句话，懂的都懂，不懂的就不懂<br/>
                    6.我们希望与大家把Bag变得更好<br/>
                    7.用户须知：本协议是您与顶想公司之间关于您使用Bag产品及服务的法律协议。无论您是个人或组织、盈利与否、用途如何（包括以学习和研究为目的），均需仔细阅读本协议，包括免除或者限制顶想责任的免责条款及对您的权利限制。请您审阅并接受或不接受本服务条款。如您不同意本服务条款及/或顶想随时对其的修改，您应不使用或主动取消Bag。否则，您的任何对Bag的相关服务的注册、登陆、下载、查看等使用行为将被视为您对本服务条款全部的完全接受，包括接受顶想对服务条款随时所做的任何修改。
                </p>
            </el-col>
            <el-col :xs="24" :sm="12" :md="24" :lg="12" :xl="12">
                <div class="skill">
                    <div class="skill-count">
                        <el-progress :width="60" type="circle" :percentage="80" />
                        <div style="margin-left: 10px">
                            <h6>成熟</h6>
                            <p>Bag还只是一个孩子，不成熟的地方还有很多，需要大家一起来帮忙调教.</p>
                        </div>
                    </div>
                    <div class="skill-count">
                        <el-progress :width="60" type="circle" status="success" :percentage="80" />
                        <div style="margin-left: 10px">
                            <h6>成熟</h6>
                            <p>Bag还只是一个孩子，不成熟的地方还有很多，需要大家一起来帮忙调教.</p>
                        </div>
                    </div>
                    <div class="skill-count">
                        <el-progress :width="60" type="circle" status="exception" :percentage="80" />
                        <div style="margin-left: 10px">
                            <h6>成熟</h6>
                            <p>Bag还只是一个孩子，不成熟的地方还有很多，需要大家一起来帮忙调教.</p>
                        </div>
                    </div>
                    <div class="skill-count">
                        <el-progress :width="60" type="circle" status="warning" :percentage="80" />
                        <div style="margin-left: 10px">
                            <h6>成熟</h6>
                            <p>封杀所有注入点 关闭DEBUG 不会有报错情况出现 所以也就不会有注入点 所有错误请自行到日志进行查看.</p>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </section>
</template>
<script>

</script>
<style lang="less" scoped>
.section {
    padding-top: 60px;
    padding-bottom: 60px;
    background: #272727;
    position: relative;
    overflow: hidden;
    color: #FFFFFF;

    h1 {
        font-size: 50px;
        font-weight: bold;
        text-align: center;
    }



    p {
        font-size: 14px;
        color: #8f8f8f;
        line-height: 20px;
    }
    .skill{
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-around;
        padding: 5px 0;
        .skill-count{
            display: flex;
            align-items: center;
            h6{
                font-weight: 700;
                text-transform: uppercase;
                font-size: 16px;
                margin-bottom: 5px;
            }
        }
    }
}
</style>
