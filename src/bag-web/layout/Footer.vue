<template>
    <div class="footer">
        <div class="container">
            <el-row>
                <el-col :xs="24" :sm="24" :md="6" :lg="3" :xl="2">
                    <div>欢迎你</div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="18" :lg="21" :xl="22">
                    <p>{{siteInfo.record}}</p>
                    <ul class="list-unsettled">
                        <li><a href="">关于我们</a></li>
                        <li><a href="">用户协议</a></li>
                        <li><a href="">会员中心</a></li>
                    </ul>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import appStore from "@/bag-web/pinia/app";
export default defineComponent({
    setup(){
        const store = appStore()
        const { siteInfo } = store
        return {
            siteInfo
        }
    }
})
</script>
<style lang="less" scoped>
.footer {
    background: #1f2730;
    color: var(--bag-color-white);
    padding: 10px 0;
    margin-top: var(--bag-margin-base);

    .list-unsettled {
        li {
            display: inline-block;
            padding-right: 15px;
            padding-top: 10px;

            a {
                text-decoration: none;
                color: var(--bag-color-white);
            }
        }
    }
}
</style>
