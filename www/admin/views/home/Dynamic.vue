<template>
    <bag-card>
        <template v-slot:title>
            <div class="title">
                <span>动态</span>
                <SyncOutlined  class="refresh"/>
            </div>
        </template>
        <ul>
            <li>
                <img src="@/packages/assets/image/yanghang.jpg" alt="">
                <div class="des">
                    <p>羊先生 修复了 <span>菜单递归问题</span> 已经打包上传</p>
                    <time>2021-20-27 27:01:22</time>
                </div>
            </li>
            <li>
                <img src="@/packages/assets/image/yanghang.jpg" alt="">
                <div class="des">
                    <p>羊先生 修复了 <span>菜单递归问题</span> 已经打包上传</p>
                    <time>2021-20-27 27:01:22</time>
                </div>
            </li>
            <li>
                <img src="@/packages/assets/image/yanghang.jpg" alt="">
                <div class="des">
                    <p>羊先生 修复了 <span>菜单递归问题</span> 已经打包上传</p>
                    <time>2021-20-27 27:01:22</time>
                </div>
            </li>
            <li>
                <img src="@/packages/assets/image/yanghang.jpg" alt="">
                <div class="des">
                    <p>羊先生 初始化 <span>Vite+Vue3.0+TypeScript</span> 项目，定位目标适合企业中后台管理系统</p>
                    <time>2021-10-08 10:01:22</time>
                </div>
            </li>
        </ul>
    </bag-card>
</template>
<script lang="ts">

</script>
<style scoped lang="less">
.title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .refresh{
        transition: all 1s;
        cursor: pointer;
        &:hover{
            transform: rotate(360deg);
        }
    }
}
ul {
    margin-bottom: 0;
    height: 210px;
    overflow-y: scroll;
    li {
        display: flex;
        align-items: center;
        padding: 10px 0;
        .des{
            display: flex;
            flex-direction: column;
            flex: 1;
        }
        img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 10px;
        }

        p {
            margin-bottom: 0;
            font-size: 14px;
            span{
                color: @primary-color;
            }
        }

        time {
            font-size: 12px;
        }
    }
}
</style>
