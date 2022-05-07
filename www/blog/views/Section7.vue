<template>
    <section class="section section-container">
        <div class="section-title">
            <h1>下载</h1>
            <p>以下是Bag近期版本的下载.</p>
        </div>
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
                <div class="package">
                    <div class="package-header">
                        <h4>V2.3</h4>
                        <p>最新版本</p>
                    </div>
                    <div class="package-price">
                        <h4>5.3M</h4>
                    </div>
                    <ul>
                        <li>时间：2016-10-20</li>
                        <li>简介：一个新的Bag</li>
                        <li>简介：后台更新</li>
                        <li>简介：前台简介</li>
                        <li style="display: flex;justify-content: center">
                            <vs-button color="success"  type="filled" icon="downloading">下载程序</vs-button>
                        </li>
                    </ul>
                    <div class="action">
                        <vs-button color="success" size="large"  type="filled" icon="downloading">下载程序</vs-button>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
                <div class="package">
                    <div class="package-header">
                        <h4>V2.3</h4>
                        <p>最新版本</p>
                    </div>
                    <div class="package-price">
                        <h4>5.3M</h4>
                    </div>
                    <ul>
                        <li>时间：2016-10-20</li>
                        <li>简介：一个新的Bag</li>
                        <li>简介：后台更新</li>
                        <li>简介：前台简介</li>
                        <li style="display: flex;justify-content: center">
                            <vs-button color="success"  type="filled" icon="downloading">下载程序</vs-button>
                        </li>
                    </ul>
                    <div class="action">
                        <vs-button color="success" size="large"  type="filled" icon="downloading">下载程序</vs-button>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
                <div class="package">
                    <div class="package-header">
                        <h4>V2.3</h4>
                        <p>最新版本</p>
                    </div>
                    <div class="package-price">
                        <h4>5.3M</h4>
                    </div>
                    <ul>
                        <li>时间：2016-10-20</li>
                        <li>简介：一个新的Bag</li>
                        <li>简介：后台更新</li>
                        <li>简介：前台简介</li>
                        <li style="display: flex;justify-content: center">
                            <vs-button color="success"  type="filled" icon="downloading">下载程序</vs-button>
                        </li>
                    </ul>
                    <div class="action">
                        <vs-button color="success" size="large"  type="filled" icon="downloading">下载程序</vs-button>
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
                <div class="package">
                    <div class="package-header">
                        <h4>V2.3</h4>
                        <p>最新版本</p>
                    </div>
                    <div class="package-price">
                        <h4>5.3M</h4>
                    </div>
                    <ul>
                        <li>时间：2016-10-20</li>
                        <li>简介：一个新的Bag</li>
                        <li>简介：后台更新</li>
                        <li>简介：前台简介</li>
                        <li style="display: flex;justify-content: center">
                            <vs-button color="success"  type="filled" icon="downloading">下载程序</vs-button>
                        </li>
                    </ul>
                    <div class="action">
                        <vs-button color="success" size="large"  type="filled" icon="downloading">下载程序</vs-button>
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
    padding-top: 80px;
    padding-bottom: 80px;
    background: rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
    color: #FFFFFF;

    &-title {
        text-align: center;
    }

    h1 {
        font-size: 50px;
        font-weight: bold;

    }

    .package {
        border-radius: 4px;
        overflow: hidden;
        background-color: #FFFFFF;
        margin-top: 40px;
        &-header {
            height: 82px;
            background-color: #e96656;
            color: #FFF;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            h4 {
                font-weight: bold;
                line-height: 29px;
                text-transform: uppercase;
            }

            .meta-text {
                font-size: 13px;
                line-height: normal;
            }
        }

        &-price {
            line-height: 120px;
            height: 100px;
            color: #FFF;
            font-weight: 400;
            background-color: #404040;
            text-align: center;

            h4 {
                display: inline;
                font-size: 40px;
                line-height: normal;
                margin-bottom: 0;
            }
        }

        ul {
            li {
                padding-top: 10px;
                padding-bottom: 10px;
                width: 80%;
                margin: auto;
                border-bottom: 1px dotted #dadada;
                color: #333333;
                text-align: center;
                overflow: hidden;
                &:last-child{
                    border-bottom: none;
                }
            }
        }
        .action{
            overflow: hidden;
            display: flex;
            justify-content: center;
            padding-bottom: 20px;
            margin-top: 20px;
        }
    }
}
</style>
