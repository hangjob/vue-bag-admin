<template>
    <div class="footer">
        <div class="container">
            <el-row>
                <el-col :xs="24" :sm="24" :md="6" :lg="3" :xl="2">
                    <div>欢迎你</div>
                </el-col>
                <el-col :xs="24" :sm="24" :md="18" :lg="21" :xl="22">
                    <p>Copyrights © 2017-2020. All rights reserved 鄂ICP备17016349号</p>
                    <ul class="list-unstyled">
                        <li><a href="">关于我们</a></li>
                        <li><a href="">用户协议</a></li>
                        <li><a href="">会员中心</a></li>
                    </ul>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<style lang="less" scoped>
.footer {
    background: #1f2730;
    color: var(--yh-color-white);
    padding: 10px 0;
    .list-unstyled{
        li{
            display: inline-block;
            padding-right: 15px;
            padding-top: 10px;
            a{
                text-decoration: none;
                color: var(--yh-color-white);
            }
        }
    }
}
</style>
