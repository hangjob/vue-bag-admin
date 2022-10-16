<template>
    <div class="agreement">
        <bag-card style="margin-top:0" :title="route.meta.title">
            <template v-slot:body>
                <h1>一、MIT协议:</h1>
                <p>Bag使用MIT协议，MIT 内容与三条款 BSD 许可证（3-clause BSD
                    license）内容颇为近似，但是赋予软件被授权人更大的权利与更少的限制，被授权人可根据程式的需要修改授权条款为适当的内容。被授权人有权利使用、复制、修改、合并、出版发行、散布、再授权及贩售软体及软体的副本。在软件和软件的所有副本中都必须包含版权声明和许可声明</p>
                <h1>二、禁止用户从事以下行为</h1>
                <p>（1）反对宪法所确定的基本原则的；

                    （2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；

                    （3）损害国家荣誉和利益的；

                    （4）煽动民族仇恨、民族歧视，破坏民族团结的；

                    （5）破坏国家宗教政策，宣扬邪教和封建迷信的；

                    （6）散布谣言，扰乱社会秩序，破坏社会稳定的；

                    （7）散布淫秽、赌博、暴力、凶杀、自残、恐怖或者教唆犯罪的；

                    （8）侮辱或者诽谤他人，侵害他人合法权益（如名誉权、肖像权等）的；

                    （9）侵害他人知识产权、商业秘密等合法权利的；

                    （10）虚构事实、隐瞒真相以误导、欺骗他人的；

                    （11）发布、传送、传播广告信息及垃圾信息的；

                    （12）其他法律法规禁止的行为。</p>
                <h1>三、特此声明:</h1>
                <p>用户利用平台发布虚假、侵犯他人隐私、侵犯他人知识产权、侮辱他人、造谣诽谤等违反法律法规或公序良俗的内容从而给平台方、其他用户或第三方造成损害的，由前述用户承担全部法律后果及赔偿责任</p>
            </template>
        </bag-card>
    </div>
</template>
<script lang="ts" setup>
import {useRouter, useRoute} from 'vue-router';

const route = useRoute();
</script>
<style lang="less" scoped>
.agreement {
    h1 {
        transition: all 0s ease 0s;
        color: rgb(40, 40, 40);
        font-size: 16px;
        display: block;
        line-height: 21px;
        font-weight: bold;
        padding-bottom: 20px;
        margin-top: 30px;

        &:first-of-type {
            margin-top: 0;
        }
    }

    p {
        font-size: 15px;
        line-height: 50px;
        color: #525252;
    }
}
</style>
