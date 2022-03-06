<template>
    <div>
        <a-form ref="formRef" :model="formState" :rules="rules" :label-col="{span: 6}" :wrapper-col="{span: 15}">
            <a-row>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="栏目名称" name="name">
                        <a-input v-model:value="formState.name" placeholder="输入角色名称" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="父级节点" name="pid">
                        <a-tree-select
                            v-model:value="formState.pid"
                            style="width: 100%"
                            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                            :tree-data="treeData"
                            :replace-fields="{children:'children', key:'id', value: 'id', title: 'name'}"
                            placeholder="选择父级节点，不选择为一级菜单"
                            allow-clear
                            tree-default-expand-all
                        >
                            <template #title="{ key, value,title }">
                                <span>{{ title }}</span>
                            </template>
                        </a-tree-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="图片" name="image">
                        <a-input v-model:value="formState.image"  placeholder="输入图片地址" />&nbsp;&nbsp;
                        <yxs-upload-file @update:image="updateImage" :image="formState.image" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="链接地址" name="url">
                        <a-input v-model:value="formState.url" placeholder="输入链接地址" />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="链接地址" name="url">
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
                    <a-form-item label="是否允许投稿" name="order">
                        <a-radio-group v-model:value="formState.is_contribute">
                            <a-radio :value="1">允许投稿</a-radio>
                            <a-radio :value="0">禁止投稿</a-radio>
                        </a-radio-group>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="是否显示" name="order">
                        <a-radio-group v-model:value="formState.shows">
                            <a-radio :value="1">显示</a-radio>
                            <a-radio :value="0">不显示</a-radio>
                        </a-radio-group>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="排序" name="order">
                        <a-input v-model:value="formState.order" placeholder="输入排序号" />
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRaw, watch } from 'vue'
import { apiUpdate, apiFind } from '@/admin/service/channel'

export default defineComponent({
    props: {
        id: {
            required: true,
            type: [Number, String],
        },
        treeData: {
            type: Array,
        },
    },
    setup(props, { emit }) {
        const formRef = ref()
        const visible = ref(false)
        const formState: any = reactive({
            name: '',
            image: '',
            order: '',
            url: '',
            is_contribute: 1,
            shows: 1,
            keywords: [],
            pid: null,
            id: '',
        })
        const rules = {
            name: [
                { required: true, message: '名称为必填项', trigger: 'blur' },
            ],
        }
        const onSubmit = async () => {
            return formRef.value.validate()
                .then(() => {
                    const data = toRaw(formState)
                    data.keywords = data.keywords.join(',')
                    apiUpdate(data, { notify: true }).then(() => {
                        return Promise.resolve()
                    })
                })
                .catch((error: any) => {
                    return Promise.reject(error)
                })
        }

        const updateImage = (data: any) => {
            formState.image = data
        }

        watch(() => props.id, (newVal, oldVal) => {
            apiFind({ id: props.id }).then((res: any) => {
                let { createTime, updateTime, ...profileData } = res
                Object.keys(formState).forEach((key: string) => {
                    formState[key] = profileData[key]
                })
            })
        }, { immediate: true })

        const keywords = ref([])

        return {
            formState,
            rules,
            formRef,
            onSubmit,
            visible,
            updateImage,
            keywords,
        }
    },
})
</script>
