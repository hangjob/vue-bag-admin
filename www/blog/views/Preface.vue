<template>
    <section class="section section-container">
        <div class="section-title">
            <h1>序言</h1>
            <p>这里介绍了Bag是由何而来的经过.</p>
        </div>
        <el-row :gutter="40">
            <el-col class="wow animate__animated animate__fadeInLeft" data-wow-duration="1.0s" data-wow-delay="0.2s" :xs="24" :sm="12" :md="24" :lg="12" :xl="12" style="margin-top: 50px">
                <p>
                    Bag最初我只是设计的一个开源后台管理系统，后来发大家对管理系统还是很喜欢，但是往往对接企业项目，风格和使用规范又有些偏差或者很不符合现有业务，不能带动用户去使用它，如是我又开发了Bag-web，为大家提供一个博客网站，那么就可以去使用这个系统管理你自己的博客了。
                    感谢：本套开源代码使用了Vue3,Vite,Gulp,Ant-Design-Vue,Axios...,以及网络上一些插件，在这里感谢这些框架和插件的开源，为本套程序带来了很强大的程序基础！
                    <br />
                    1.官网<a style="color:#03a9f4;margin:0 5px" href="https://vite.itnavs.com/">网址</a>，作者：羊先生<br />
                    2.感谢您选择使用Bag，希果您对Bag有Bug提交或者功能建议 可以发送邮件到到作者邮箱470193837@qq.com或者在官网留言<br />
                    3.希望您在使用过程中可以加入Bag讨论群分享使用经验（交流群在底部查看）<br />
                    4.Bag是一个开源产品，把一切使用变的如此简单<br />
                    5.我希望能与大家把Bag变得更好<br />
                    6.用户须知：Bag使用MIT协议，MIT 内容与条款 BSD 许可证（3-clause BSD
                    license）内容颇为近似，但是赋予软件被授权人更大的权利与更少的限制，被授权人可根据程式的需要修改授权条款为适当的内容。被授权人有权利使用、复制、修改、合并、出版发行、散布、再授权及贩售软体及软体的副本。在软件和软件的所有副本中都必须包含版权声明和许可声明。
                    <br />
                    7.特此声明：用户利用平台发布虚假、侵犯他人隐私、侵犯他人知识产权、侮辱他人、造谣诽谤等违反法律法规或公序良俗的内容从而给平台方、其他用户或第三方造成损害的，由前述用户承担全部法律后果及赔偿责任。
                </p>
            </el-col>
            <el-col class="wow animate__animated animate__fadeInRight" data-wow-duration="1.0s" data-wow-delay="0.2s" :xs="24" :sm="12" :md="24" :lg="12" :xl="12" style="margin-top: 50px">
                <div class="skill">
                    <div class="skill-count">
                        <el-progress :width="60" type="circle" color="#20a0ff" status="success" :percentage="80" />
                        <div style="margin-left: 10px">
                            <h6>成长</h6>
                            <p>Bag还在成长，不成熟的地方还有很多，需要大家一起来帮忙纠正</p>
                        </div>
                    </div>
                    <div class="skill-count">
                        <el-progress :width="60" type="circle" status="success" :percentage="85" />
                        <div style="margin-left: 10px">
                            <h6>灵活</h6>
                            <p>Bag所有的可视化全可由后台进行修改，路由管理，请求管理，状态管理，角色权限等等...</p>
                        </div>
                    </div>
                    <div class="skill-count">
                        <el-progress :width="60" color="#ff4949" type="circle" status="success" :percentage="90" />
                        <div style="margin-left: 10px">
                            <h6>表单</h6>
                            <p>灵活抽象的设计，CURD只需傻瓜式的操作配置即可，增删改查完全配置化</p>
                        </div>
                    </div>
                    <div class="skill-count">
                        <el-progress :width="60" color="#e6a23c" type="circle" status="success" :percentage="80" />
                        <div style="margin-left: 10px">
                            <h6>特性</h6>
                            <p>npm快速安装、Vite零秒启动、一键build、跨平台 PC、手机端、平板</p>
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
    color: #8f8f8f;

    p {
        font-size: 14px;
        line-height: 26px;
        word-break: break-all;
        text-align: justify;
    }

    &-title {
        text-align: center;
        color: #FFFFFF;

        p {
            text-align: center;
        }

        h1 {
            font-size: 50px;
            font-weight: bold;
            text-align: center;
        }
    }


    .skill {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 15px 0;

        .skill-count {
            display: flex;
            align-items: center;
            margin-bottom: 40px;

            h6 {
                font-weight: 700;
                text-transform: uppercase;
                font-size: 16px;
                margin-bottom: 5px;
            }
        }

        p {
            line-height: 22px;
        }
    }
}
</style>
