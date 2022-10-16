<template>
    <div class="duty">
        <bag-card style="margin-top:0" :title="route.meta.title">
            <template v-slot:body>
                <div class="article">
                    <strong>我们采用的非本站原创文章图片视频链接等内容：尽管我国尚未制订专门针对互联网上版权（著作权）的法律和法规，但我们根据我国现行著作权法的有关原则以及我们对网上作品版权保护的理解，就站内内容的版权事宜，作如下声明：</strong>
                    <p>1、所有的文章、图片、视频文件等等资料的版权归版权所有人所有。</p>
                    <p>2、如果您是文章、图片、视频等等资料的版权所有人，请与我们联系并说明具体文章标题，我们会及时加上版权信息，如果您反对我们的使用，本着对版权人尊重的原则，我们会立即移除有版权问题的内容。</p>
                    <p>3、在本网站发表、转载的文章仅代表作者本人观点，本网站没有义务查实文章或图片、音频、视频文件的出处及其真实性，如果侵犯，请及时联系我们，本网站将在第一时间及时删除</p>
                    <p>4、本站所提供的文章资讯、软件资源、素材源码、视频链接等内容均为作者提供、网友推荐、互联网整理而来（部分报媒/平媒内容转载自网络合作媒体），仅供学习参考，如有侵犯您的版权。请<router-link to="/join">联系我</router-link>，本站将在三个工作日内改正</p>
                    <p>5、<router-link to="/home">Bag</router-link>不保证资源的准确性、安全性和完整性，请您在阅读、下载及使用过程中自行确认，本站亦不承担上述资源对您或您的网站造成的任何形式的损失或伤害</p>
                    <p>6、互联网的本质是自由与分享，我们真诚的希望，每一份有价值的正能量能够在互联网中自由传播，能够为每一个网站提供动力</p>
                </div>
            </template>
        </bag-card>
    </div>
</template>
<script lang="ts" setup>
import {useRouter, useRoute} from 'vue-router';

const route = useRoute();
</script>
<style lang="less" scoped>
.duty {
    .article {
        color: #525252;
        line-height: 2;
        p,strong{
            margin-bottom: 40px;
            font-size: 16px;
            display: block;
            text-align: justify;
        }
    }
}
</style>
