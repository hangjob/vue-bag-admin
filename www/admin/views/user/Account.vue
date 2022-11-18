<template>
    <div class="account">
        <ul>
            <li>
                <div class="icon">
                    <QqOutlined :style="{color:'#3492ed'}"/>
                </div>
                <div class="info">
                    <a-typography-title :level="5">绑定QQ</a-typography-title>
                    <a-typography-text>470193837</a-typography-text>
                </div>
                <a-button type="primary" size="small">绑定账号</a-button>
            </li>
            <li>
                <div class="icon">
                    <WechatOutlined :style="{color:'#4daf29'}"/>
                </div>
                <div class="info">
                    <a-typography-title :level="5">绑定微信</a-typography-title>
                    <a-typography-text>当前未绑定绑定微信账号</a-typography-text>
                </div>
                <a-button type="primary" size="small">绑定账号</a-button>
            </li>
            <li>
                <div class="icon">
                    <WeiboOutlined :style="{color:'#ffd440'}"/>
                </div>
                <div class="info">
                    <a-typography-title :level="5">绑定微信</a-typography-title>
                    <a-typography-text>当前未绑定绑定微信账号</a-typography-text>
                </div>
                <a-button type="primary" size="small">绑定账号</a-button>
            </li>
            <li>
                <div class="icon">
                    <AlipayOutlined :style="{color:'#1378fe'}"/>
                </div>
                <div class="info">
                    <a-typography-title :level="5">绑定支付宝</a-typography-title>
                    <a-typography-text>当前未绑定支付宝账号</a-typography-text>
                </div>
                <a-button type="primary" size="small">绑定账号</a-button>
            </li>
            <li>
                <div class="icon">
                    <GithubOutlined :style="{color:'#4c4c4c'}"/>
                </div>
                <div class="info">
                    <a-typography-title :level="5">绑定Github</a-typography-title>
                    <a-typography-text>当前未绑定Github账号</a-typography-text>
                </div>
                <a-button type="primary" size="small">绑定账号</a-button>
            </li>
            <li>
                <div class="icon">
                    <ZhihuOutlined :style="{color:'#0266ff'}"/>
                </div>
                <div class="info">
                    <a-typography-title :level="5">绑定知乎</a-typography-title>
                    <a-typography-text>当前未绑定知乎账号</a-typography-text>
                </div>
                <a-button type="primary" size="small">绑定账号</a-button>
            </li>
            <li>
                <div class="icon">
                    <TaobaoOutlined :style="{color:'#fe5300'}"/>
                </div>
                <div class="info">
                    <a-typography-title :level="5">绑定淘宝</a-typography-title>
                    <a-typography-text>当前未绑定淘宝账号</a-typography-text>
                </div>
                <a-button type="primary" size="small">绑定账号</a-button>
            </li>
            <li>
                <div class="icon">
                    <TwitterOutlined :style="{color:'#1d9bf0'}"/>
                </div>
                <div class="info">
                    <a-typography-title :level="5">绑定推特</a-typography-title>
                    <a-typography-text>当前未绑定推特账号</a-typography-text>
                </div>
                <a-button type="primary" size="small">绑定账号</a-button>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import {defineComponent, reactive, ref} from 'vue'

</script>
<style lang="less" scoped>
.account {
    ul {
        li {
            display: flex;
            align-items: center;
            margin: 20px 0;
            .icon {
                font-size: 40px;
                margin-right: 10px;
            }

            .info {
                flex: 1
            }
        }
    }
}
</style>
