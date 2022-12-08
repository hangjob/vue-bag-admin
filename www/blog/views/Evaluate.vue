<template>
    <section class="section section-container">
        <div class="section-title">
            <h1>评价</h1>
            <p>以下内容来自于Bag用户对于本博客系统的评价.</p>
        </div>
        <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8" v-for="(item,idx) in items" :key="idx">
                <div class="feedback-bok">
                    <div class="describe">
                       {{item.message}}
                    </div>
                    <div class="client">
                        <el-icon color="#e96656" size="30">
                            <MagicStick />
                        </el-icon>
                        <div class="client-info">
                            <h6>{{item.name}}</h6>
                            <p>{{item.url ? item.url : item.createTime}}</p>
                        </div>
                        <div class="client-head">
                            <img src="/src/packages/assets/image/yanghang.jpg" alt="">
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </section>
</template>
<script lang="ts" setup>
import {webLeaveAll} from "@www/blog/service";
import {ref} from "vue";
const items = ref()
webLeaveAll().then((res: any) => {
    items.value = res.data.data
})

</script>
<style lang="less" scoped>
.section {
    padding-top: 60px;
    padding-bottom: 60px;
    background-color: #dbbf56;
    position: relative;
    overflow: hidden;
    color: #FFFFFF;

    &-title {
        text-align: center;
        margin-bottom: 40px;
    }

    h1 {
        font-size: 50px;
        font-weight: bold;
    }

    .feedback-bok {
        background: #FFFFFF;
        padding: 25px;
        margin: 13px;
        text-align: left;
        border-radius: 4px;
        box-shadow: none;
        display: flex;
        z-index: 5;
        color: #333;
        flex-direction: column;

        .describe {
            font-size: 15px;
            color: #909090;
            line-height: 1.6;
        }

        .client {
            display: flex;
            margin-top: 30px;
            align-items: center;

            &-info {
                flex: 1;
                margin-left: 5px;

                p {
                    color: #909090;
                    margin-top:5px;
                }
            }

            &-head {
                width: 73px;
                height: 73px;
                border-radius: 50%;
                overflow: hidden;
                border: 3px solid #f6f6f6;

                img {
                    vertical-align: middle;
                }
            }
        }
    }
}
</style>
