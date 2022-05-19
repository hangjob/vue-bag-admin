<template>
    <div class="add">
        <a-form ref="formRef" :model="formState" :rules="rules" :label-col="{span: 6}" :wrapper-col="{span:15}">
            <a-row>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="标题" name="title">
                        <a-input v-model:value="formState.title" placeholder="输入标题" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="选择用户" name="user_id">
                        <a-select v-model:value="formState.user_id" placeholder="选择用户">
                            <a-select-option value="">请选择</a-select-option>
                            <a-select-option v-for="item in baseResources.users" :key="item.id" :value="item.id">
                                {{ item.username }}
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="标题样式" name="title_style">
                        <a-textarea v-model:value="formState.title_style" placeholder="输入标题样式" showCount
                                    :maxlength="300"
                        />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="选择栏目" name="channel_id">
                        <a-select v-model:value="formState.channel_id" placeholder="选择栏目">
                            <a-select-option value="">请选择</a-select-option>
                            <a-select-option v-for="item in baseResources.channels" :key="item.id" :value="item.id">
                                {{ item.name }}
                            </a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="选择热度" name="flag">
                        <a-select v-model:value="formState.flag" placeholder="选择热度">
                            <a-select-option value="">请选择</a-select-option>
                            <a-select-option value="置顶">置顶</a-select-option>
                            <a-select-option value="最新">最新</a-select-option>
                            <a-select-option value="推荐">推荐</a-select-option>
                            <a-select-option value="热门">热门</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="关键词" name="url">
                        <a-select
                            v-model:value="formState.keywords"
                            mode="tags"
                            style="width: 100%"
                            placeholder="选择关键词"
                            option-label-prop="label"
                            :options="baseResources.keywords"
                        >
                            <template #option="{ value: val, label, icon }">
                                <span role="img" :aria-label="val">{{ icon }}</span>
                                &nbsp;&nbsp;{{ val }}
                            </template>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="封面图" name="image">
                        <a-input v-model:value="formState.image" placeholder="输入封面图地址" />&nbsp;&nbsp;
                        <bag-upload-image :fixedBox="true" @update:image="baseResources.updateImage"
                                          :image="formState.image"
                        />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="组图样式" name="images_type">
                        <a-select v-model:value="formState.images_type" placeholder="选择组图样式">
                            <a-select-option value="">请选择</a-select-option>
                            <a-select-option :value="1">Banner样式一</a-select-option>
                            <a-select-option :value="2">Banner样式二</a-select-option>
                            <a-select-option :value="3">Banner样式三</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="组图" name="images">
                        <a-input v-model:value="formState.images" placeholder="输入组图地址" />&nbsp;&nbsp;
                        <bag-upload-image @update:image="baseResources.updateImages" :image="formState.images" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="内容简述" name="describe">
                        <a-textarea v-model:value="formState.describe" placeholder="输入内容简述" showCount
                                    :maxlength="300"
                        />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <a-form-item :autoLink="false" :labelCol="{span:3,offset:0}" :wrapperCol="{span:19,offset:0}"
                                 label="内容"
                                 name="content"
                    >
                        <md-editor previewTheme="mk-cute" codeTheme="paraiso" @onUploadImg="onUploadImg" v-model="formState.content" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="选择时间" name="createTime">
                        <a-date-picker
                            v-model:value="formState.createTime"
                            show-time
                            valueFormat="YYYY-MM-DD HH:mm:ss"
                            type="date"
                            placeholder="选择时间"
                            style="width: 100%"
                        />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="浏览次数" name="views">
                        <a-input-number style="width: 100%" v-model:value="formState.views" placeholder="输入浏览次数" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="点赞次数" name="likes">
                        <a-input-number style="width: 100%" v-model:value="formState.likes" placeholder="输入点赞次数" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="点踩次数" name="dislikes">
                        <a-input-number style="width: 100%" v-model:value="formState.dislikes" placeholder="输入点踩次数" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="是否游客访问" name="is_guest">
                        <a-switch v-model:checked="formState.is_guest" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="是否开启评论" name="is_guest">
                        <a-switch v-model:checked="formState.is_comment" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="排序" name="order">
                        <a-input-number style="width: 100%" v-model:value="formState.order" placeholder="输入排序号" />
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import hook from '@www/admin/views/article/hook'

export default defineComponent({
    components: { MdEditor },
    setup() {
        const {
            formState,
            rules,
            baseResources,
            formRef,
            onUploadImg,
        } = hook()
        return {
            formState,
            rules,
            baseResources,
            onUploadImg,
            formRef,
        }
    },
})
</script>
<style lang="less" scoped>
.item-icons {
    .item {
        text-align: center;
        padding: 10px 0;
        cursor: pointer;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        &-icon {
            border: 1px solid #ddd;
            width: 45px;
            border-radius: 3px;
        }
    }
}
</style>
