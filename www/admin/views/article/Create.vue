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
                    <a-form-item label="标题样式" name="title_style">
                        <a-textarea v-model:value="formState.title_style" placeholder="输入标题样式" showCount
                                    :maxlength="300"
                        />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="选择用户" name="user_id">
                        <a-select v-model:value="formState.user_id" placeholder="选择用户">
                            <a-select-option value="shanghai">Zone one</a-select-option>
                            <a-select-option value="beijing">Zone two</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="选择栏目" name="channel_id">
                        <a-select v-model:value="formState.channel_id" placeholder="选择栏目">
                            <a-select-option value="shanghai">Zone one</a-select-option>
                            <a-select-option value="beijing">Zone two</a-select-option>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="选择热度" name="flag">
                        <a-select v-model:value="formState.flag" placeholder="选择热度">
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
                            :options="keywords"
                        >
                            <template #option="{ value: val, label, icon }">
                                <span role="img" :aria-label="val">{{ icon }}</span>
                                &nbsp;&nbsp;{{ val }}
                            </template>
                        </a-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="缩略图" name="image">
                        <a-input v-model:value="formState.image" placeholder="输入图片地址" />&nbsp;&nbsp;
                        <yxs-upload-file @update:image="updateImage" :image="formState.image" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="内容简述" name="description">
                        <a-textarea v-model:value="formState.description" placeholder="输入内容简述" showCount
                                    :maxlength="300"
                        />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                    <a-form-item  :autoLink="false" :labelCol="{span:3,offset:0}" :wrapperCol="{span:19,offset:0}" label="内容"
                                  name="content"
                    >
                        <md-editor v-model="content" />
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
import { defineComponent, reactive, ref } from 'vue'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

export default defineComponent({
    components: { MdEditor },
    data() {
        return {
            content: '',
        }
    },
    setup(props, { emit }) {
        const formState: any = reactive({
            name: '',
            tag: '',
            order: '',
            describe: '',
            title: '',
        })
        const rules = {
            name: [
                { required: true, message: '名称为必填项', trigger: 'blur' },
            ],
            tag: [
                { required: true, message: '标识符为必填项', trigger: 'blur' },
            ],
        }
        const updateImage = (data: any) => {
            formState.image = data
        }

        const keywords = ref([])
        return {
            formState,
            rules,
            updateImage,
            keywords,
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
