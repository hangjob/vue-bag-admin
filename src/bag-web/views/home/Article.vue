<template>
    <bag-card class="hot" title="最近更新" :more="[{name:'网络工具'},{name:'媒体工具'},{name:'应用软件'}]">
        <template v-slot:body>
            <el-row>
                <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <article class="article">
                        <template v-for="(item,idx) in articleAll" :key="idx">
                            <div class="article-item mod1" v-if="!item.images">
                                <div class="article-item-body">
                                    <div class="article-item-body-left hidden-xs">
                                        <router-link :to="`/article/${item.id}`">
                                            <img @click="navigate" :src="getImageFullPath(item.image)" alt="">
                                        </router-link>
                                    </div>
                                    <div class="article-item-body-right" style="min-height:110px">
                                        <router-link :to="`/article/${item.id}`" custom v-slot="{ navigate }">
                                            <h3 @click="navigate" role="link">{{ item.title }}</h3>
                                        </router-link>
                                        <div class="intro">{{ item.describe }}</div>
                                        <div class="action">
                                            <div class="action-tag hidden-xs-only">
                                                <it-tag :class="colorType[tidx].class"
                                                        v-for="(todo,tidx) in item.keywords"
                                                        :type="colorType[tidx].type"
                                                        filled
                                                        style="margin-right: 5px"
                                                >{{ todo }}
                                                </it-tag>
                                            </div>
                                            <div class="action-time"><span>{{ getDate(item.createTime).date
                                                }}-{{ getDate(item.createTime).week }}</span></div>
                                            <div class="action-user">
                                                <div class="praise hidden-xs-only hidden-sm-and-down">
                                                    <i style="color:#3333" class="bag-icon-dianzan5"></i>
                                                    {{ item.likes }} <span class="hidden-lg-only">点赞</span>
                                                </div>
                                                <div class="comment">
                                                    <i style="color:#3333" class="bag-icon-sheji_huatu"></i>
                                                    {{ item.comments }} <span class="hidden-lg-only">评论</span>
                                                </div>
                                                <div class="preview">
                                                    <i style="color:#3333" class="bag-icon-qiepian"></i>
                                                    {{ item.views }} <span class="hidden-lg-only">浏览</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="article-item mod2" v-else>
                                <div class="article-item-body">
                                    <div class="article-item-body-left" style="width:100%">
                                        <router-link :to="`/article/${item.id}`" custom v-slot="{ navigate }">
                                            <h3 @click="navigate" role="link">{{ item.title }}</h3>
                                        </router-link>
                                    </div>
                                    <div class="article-item-body-center">
                                        <div class="imgs">
                                            <template v-if="item.images">
                                                <a v-for="todo in item.images.split(',')"><img
                                                    :src="getImageFullPath(todo)" alt=""
                                                ></a>
                                            </template>
                                        </div>
                                    </div>
                                    <div class="article-item-body-right">
                                        <div class="intro">{{ item.describe }}</div>
                                        <div class="action">
                                            <div class="action-tag hidden-xs-only">
                                                <it-tag :class="colorType[tidx].class"
                                                        v-for="(todo,tidx) in item.keywords"
                                                        :type="colorType[tidx].type"
                                                        filled
                                                        style="margin-right: 5px"
                                                >{{ todo }}
                                                </it-tag>
                                            </div>
                                            <div class="action-time hidden-xs-only hidden-sm-and-down">
                                                <span>{{ getDate(item.createTime).date
                                                    }}-{{ getDate(item.createTime).week }}</span></div>
                                            <div class="action-user">
                                                <div class="praise">
                                                    <i style="color:#3333" class="bag-icon-dianzan5"></i>
                                                    {{ item.likes }} <span class="hidden-lg-only">点赞</span>
                                                </div>
                                                <div class="comment">
                                                    <i style="color:#3333" class="bag-icon-sheji_huatu"></i>
                                                    {{ item.comments }} <span class="hidden-lg-only">评论</span>
                                                </div>
                                                <div class="preview">
                                                    <i style="color:#3333" class="bag-icon-qiepian"></i>
                                                    {{ item.views }} <span class="hidden-lg-only">浏览</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </article>
                </el-col>
            </el-row>
        </template>
    </bag-card>
</template>
<script lang="ts" setup>
import { defineProps, inject, reactive, ref } from 'vue'
import dayjs from 'dayjs'

const { getImageFullPath } = inject<any>('bagGlobal')
const props = defineProps({
    articleAll: { type: [Array], default: () => [] },
})
const colorType = [{ type: 'success' }, { type: 'primary', class: 'hidden-sm-and-down' }, {
    type: 'warning', class: 'hidden-sm-and-down',
}]

const getDate = (time) => {
    return {
        date: dayjs(time).format('MM月DD日'),
        week: '星期' + '日一二三四五六'.charAt(parseInt(dayjs(time).format('d'))),
    }
}
</script>
<style lang="less" scoped>
.article {
    &-item {
        padding: 20px 0;
        border-bottom: 1px solid #efefef;
        
        &:first-child {
            padding-top: 0;
        }
        
        &:last-child {
            padding-bottom: 0;
            border-bottom: none;
        }
        
        
        &-body {
            display: flex;
            
            h3 {
                font-size: var(--bag-font-size-large);
                color: var(--bag-text-color-black);
                margin-bottom: 10px;
                
                &:hover {
                    text-decoration: underline;
                    cursor: pointer;
                    color: var(--bag-text-hover-color-primary);
                }
            }
            
            a {
                display: block;
                width: 100%;
                height: 100%;
                overflow: hidden;
                border-radius: 3px;
                margin: 0 10px;
                
                &:hover {
                    img {
                        transform: scale(1.1);
                    }
                }
                
                img {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    object-fit: cover;
                    transition: all 0.3s;
                }
            }
            
            &-left {
                width: 180px;
                flex-shrink: 0;
                margin-right: 15px;
            }
            
            &-right {
                position: relative;
                flex: 1;
                
                .intro {
                    height: 44px;
                    line-height: 22px;
                    color: #828a92;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-box-orient: vertical;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                }
                
                .action {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    
                    &-time {
                    }
                    
                    &-user {
                        display: flex;
                        flex: 1;
                        justify-content: flex-end;
                        align-items: center;
                        
                        > div {
                            display: flex;
                            align-items: center;
                            margin-left: 12px;
                            
                            i {
                                font-size: 16px;
                                margin: 0 3px;
                            }
                        }
                    }
                }
            }
        }
    }
    
    .mod1 {
        .article-item-body {
            &-left {
                height: 120px;
            }
            
            &-right {
                .action {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                }
            }
        }
    }
    
    .mod2 {
        .article-item-body {
            flex-direction: column;
            
            &-center {
                margin-bottom: 10px;
                
                .imgs {
                    display: flex;
                    justify-content: space-between;
                    height: 125px;
                    
                    > a {
                        width: 24%;
                    }
                }
            }
            
            &-right {
                .action {
                    margin-top: 10px;
                }
            }
        }
    }
}
</style>
