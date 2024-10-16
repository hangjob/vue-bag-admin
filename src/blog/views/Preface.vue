<template>
    <section class="text-justify py-[6px] bg-[#272727] section-container">
        <h1 class="text-[50px] text-white font-bold text-center">序言</h1>
        <p class="text-white  text-center">这里介绍了Bag是由何而来的经过.</p>
        <n-grid cols="12" item-responsive responsive="screen" :x-gap="20">
            <n-grid-item class="wow animate__animated animate__fadeInLeft mt-[50px]" data-wow-duration="1.0s"
                         data-wow-delay="0.2s"
                         span="12 m:12 l:6">
                <p class="text-[#8f8f8f] leading-7">
                    Bag最初我只是设计的一个开源后台管理系统，后来发大家对管理系统还是很喜欢，但是往往对接企业项目，风格和使用规范又有些偏差或者很不符合现有业务，不能带动用户去使用它，如是我又开发了Bag-web，为大家提供一个博客网站，那么就可以去使用这个系统管理你自己的博客了。
                    感谢：本套开源代码使用了Vue3,Vite,Gulp,Ant-Design-Vue,Axios...,以及网络上一些插件，在这里感谢这些框架和插件的开源，为本套程序带来了很强大的程序基础！
                    <br/>
                    1.官网<a style="color:#03a9f4;margin:0 5px"
                             href="https://vite.itnavs.com/">网址</a>，作者：羊先生<br/>
                    2.感谢您选择使用Bag，希果您对Bag有Bug提交或者功能建议 可以发送邮件到到作者邮箱470193837@qq.com或者在官网留言<br/>
                    3.希望您在使用过程中可以加入Bag讨论群分享使用经验（交流群在底部查看）<br/>
                    4.Bag是一个开源产品，把一切使用变的如此简单<br/>
                    5.我希望能与大家把Bag变得更好<br/>
                    6.用户须知：Bag使用MIT协议，MIT 内容与条款 BSD 许可证（3-clause BSD
                    license）内容颇为近似，但是赋予软件被授权人更大的权利与更少的限制，被授权人可根据程式的需要修改授权条款为适当的内容。被授权人有权利使用、复制、修改、合并、出版发行、散布、再授权及贩售软体及软体的副本。在软件和软件的所有副本中都必须包含版权声明和许可声明。
                    <br/>
                    7.特此声明：用户利用平台发布虚假、侵犯他人隐私、侵犯他人知识产权、侮辱他人、造谣诽谤等违反法律法规或公序良俗的内容从而给平台方、其他用户或第三方造成损害的，由前述用户承担全部法律后果及赔偿责任。
                </p>
            </n-grid-item>
            <n-grid-item class="wow animate__animated animate__fadeInRight mt-[50px]" data-wow-duration="1.0s"
                         data-wow-delay="0.2s"
                         span="12 m:12 l:6">
                <div class="skill">
                    <div class="flex text-[#8f8f8f] justify-between mb-5" v-for="item in compData.items">
                        <n-progress class="flex-shrink-0 mr-5" :stroke-width="16" type="circle" :color="item.color"
                                    :percentage="item.percentage">
                            <h6 class="text-[16px] font-bold">{{item.title}}</h6>
                        </n-progress>
                        <div class="flex flex-col justify-around">
                            <p>{{item.des}}</p>
                        </div>
                    </div>
                </div>
            </n-grid-item>
        </n-grid>
        >
    </section>
</template>
<script setup>
const compData = reactive({
    items: [
        {title: '成长', des: 'Bag还在成长，不成熟的地方还有很多，需要大家一起来帮忙纠正',color:'#20a0ff',percentage:84},
        {title: '灵活', des: 'Bag所有的可视化全可由后台进行修改，路由管理，请求管理，状态管理，角色权限等等...',color:'#F1948A',percentage:88},
        {title: '表单', des: '灵活抽象的设计，CURD只需傻瓜式的操作配置即可，增删改查完全配置化',color:'#ff4949',percentage:92},
        {title: '特性', des: 'npm快速安装、Vite零秒启动、一键build、跨平台 PC、手机端、平板',color:'#e6a23c',percentage:90}
    ]
})
</script>
<style lang="less" scoped>

</style>
