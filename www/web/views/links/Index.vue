<template>
    <div class="links">
        <div class="container">
            <el-row :gutter="20">
                <el-col v-for="item in links.items" :key="item.id" :xs="12" :sm="12" :md="8" :lg="6" :xl="6">
                    <div class="links-item">
                        <a target="_blank" :href="item.url">
                            <div class="logo">
                                <img :src="getImageFullPath(item.logo)" alt="">
                            </div>
                            <div class="info">
                                <h6>{{ item.name }}</h6>
                                <p class="ellipsis-2">{{ item.describe }}</p>
                            </div>
                        </a>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="container">
            <bag-card title="申请链接">
                <template v-slot:body>
                    <el-form
                        ref="ruleFormRef"
                        :model="ruleForm"
                        :rules="rules"
                        label-width="0"
                        class="demo-ruleForm"
                    >
                        <el-row :gutter="30">
                            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                                <el-form-item label="" prop="name">
                                    <el-input v-model="ruleForm.name" placeholder="站点名称" size="large"/>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                                <el-form-item label="" prop="email">
                                    <el-input v-model="ruleForm.email" placeholder="你的邮箱" size="large"/>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                                <el-form-item label="" prop="url">
                                    <el-input v-model="ruleForm.url" placeholder="链接地址" size="large"/>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
                                <el-form-item label="" prop="logo">
                                    <el-input v-model="ruleForm.logo" placeholder="填写可访问的logo地址" size="large"/>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <div class="action">
                            <el-form-item label="" prop="describe">
                                <el-input v-model="ruleForm.describe" :rows="6" type="textarea" maxlength="500"
                                          show-word-limit
                                          placeholder="留言内容"
                                />
                            </el-form-item>
                        </div>
                        <div class="leave-sbumit">
                            <el-button type="success" @click="submitForm(ruleFormRef)" size="large">提交申请</el-button>
                        </div>
                    </el-form>
                </template>
            </bag-card>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {inject, reactive, ref} from "vue";
import {webLinksAll, webLinksCreate} from '@www/web/service/links'
import type {FormInstance, FormRules} from 'element-plus'
import {ElNotification} from "element-plus";
const {getImageFullPath} = inject<any>('bagGlobal')
const fromData = reactive({
    email: '',
    name: '',
    url: '',
    message: '',
})
const links = reactive({
    items: [],
})
webLinksAll().then((res: any) => {
    links.items = res;
})

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    name: '',
    email: '',
    url: '',
    logo: ''
})
const rules = reactive<FormRules>({
    name: [
        {required: true, message: '填写网站名称', trigger: 'blur'},
        {min: 1, max: 10, message: '网站名称长度小于10', trigger: 'blur'},
    ],
    email: [
        {required: true, message: '填写邮箱', trigger: 'blur'},
        {type: 'email', message: '请输入正确的电邮地址', trigger: ['blur', 'change'],}
    ],
    url: [
        {required: true, message: '填写网址地址', trigger: 'blur'},
        {type: 'url', message: '请输入正确的网址地址', trigger: ['blur', 'change'],}
    ],
    logo: [
        {required: true, message: '填写图片地址', trigger: 'blur'},
        {type: 'url', message: '请输入正确的logo图片地址', trigger: ['blur', 'change'],}
    ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) {
        return
    }
    await formEl.validate((valid, fields) => {
        if (valid) {
            webLinksCreate(ruleForm).then(() => {
                ElNotification({
                    title: '提交成功',
                    message: `${ruleForm.name}，提交成功，等待审核`,
                    type: 'success',
                })
                formEl.resetFields()
            })
        } else {
            console.log('error submit!', fields)
        }
    })
}

</script>
<style lang="less" scoped>
.links {
    margin-top: 30px;

    &-item {
        a {
            display: flex;
            padding: 20px 16px;
            box-sizing: border-box;
            overflow: hidden;
            font-size: 12px;
            background-color: #fff;
            height: 100px;
            align-items: center;
            border-radius: 3px;
            margin-bottom: 20px;
            .logo {
                height: 60px;
                width: 80px;
                border-radius: 5px;
                border: 1px solid #f4f6f8;
                margin-right: 10px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    width: 85%;
                    height: 85%;
                    transition: all .3s;
                    object-fit: cover;
                    &:hover{
                        transform: scale(1.1);
                    }
                }
            }

            .info {
                display: flex;
                flex-direction: column;

                h6 {
                    font-weight: bold;
                    font-size: 18px;
                    margin-bottom: 5px;
                    text-transform: capitalize;
                }

                p {
                    color: #A1A7B7;
                }
            }
        }
    }

    .action {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .leave-sbumit {
        text-align: right;
    }
}
</style>
