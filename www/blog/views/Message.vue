<template>
    <section class="section section-container">
        <div class="section-title">
            <h1>与我联系</h1>
            <p>如果您有其他的问题请在下方提交留言与我联系（博客使用类问题请加交流群或看手册文档）.</p>
        </div>
        <el-row :gutter="30">
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="message-input">
                <el-input
                    v-model="fromData.name"
                    placeholder="你的名字"
                    size="large"
                    @input="inputFromData"
                />
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="message-input">
                <el-input
                    v-model="fromData.email"
                    placeholder="你的邮箱"
                    size="large"
                    @input="inputFromData"
                />
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8" class="message-input">
                <el-input
                    v-model="fromData.url"
                    placeholder="你的站点/可为空"
                    size="large"
                    @input="inputFromData"
                />
            </el-col>
        </el-row>
        <div class="action">
            <el-input
                v-model="fromData.message"
                :rows="6"
                type="textarea"
                maxlength="500"
                show-word-limit
                placeholder="留言内容"
                @input="inputFromData"
            />
        </div>
        <div class="sbumit">
            <el-button @click="handleSave" :icon="Edit" type="success" size="large" :disabled="disabled">提交留言
            </el-button>
        </div>
    </section>
</template>
<script lang="ts">
import {defineComponent, reactive, ref} from 'vue'
import {webLeaveCreate} from "@www/blog/service";
import {ElNotification} from "element-plus";
import {
    Edit,
} from '@element-plus/icons-vue'
import isEmail from "@/bag-utils/regular/isEmail";

export default defineComponent({
    setup() {
        const fromData = reactive({
            email: '',
            name: '',
            url: '',
            message: ''
        })
        const disabled = ref(true);
        const handleSave = function () {
            webLeaveCreate(fromData).then((res: any) => {
                if (res.data.code === 1) {
                    ElNotification({
                        title: '留言通知',
                        message: `留言成功，感谢你的提交，我会尽快反馈`,
                        type: 'success',
                    })
                    fromData.message = '';
                    inputFromData()
                } else {
                    ElNotification({
                        title: '留言通知',
                        message: `留言失败，请检查是否正确填写`,
                        type: 'error',
                    })
                }
            }).catch(() => {
                ElNotification({
                    title: '留言通知',
                    message: `留言失败，请检查是否正确填写`,
                    type: 'error',
                })
            })
        }
        const inputFromData = () => {
            if (fromData.email && isEmail(fromData.email) && fromData.name && fromData.message) {
                disabled.value = false;
            } else {
                disabled.value = true;
            }
        }
        return {
            fromData,
            handleSave,
            Edit,
            inputFromData,
            disabled
        }
    },
})
</script>
<style lang="less" scoped>
.section {
    padding-top: 60px;
    padding-bottom: 60px;
    background: rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;

    &-title {
        text-align: center;
        margin-bottom: 40px;
        color: #FFFFFF;

        h1 {
            font-size: 50px;
            font-weight: bold;
        }

    }

    .action {
        display: flex;
        margin-top: 10px;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    .sbumit {
        display: flex;
        justify-content: end;
    }
}
</style>
<style lang="less">
.message-input {
    margin-bottom: 10px;

    > div {
        width: 100%;
    }
}
</style>
