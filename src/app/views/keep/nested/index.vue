<template>
    <n-form
        ref="formRef"
        inline
        :label-width="80"
        :model="formValue"
        :rules="rules"
        :size="size"
    >
        <n-form-item label="姓名" path="user.name">
            <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
        </n-form-item>
        <n-form-item label="年龄" path="user.age">
            <n-input v-model:value="formValue.user.age" placeholder="输入年龄" />
        </n-form-item>
        <n-form-item label="电话号码" path="phone">
            <n-input v-model:value="formValue.phone" placeholder="电话号码" />
        </n-form-item>
        <n-form-item>
            <n-button attr-type="button" @click="handleValidateClick">
                验证
            </n-button>
        </n-form-item>
    </n-form>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
    setup() {
        const formRef = ref(null);
        return {
            formRef,
            size: ref("medium"),
            formValue: ref({
                user: {
                    name: "",
                    age: ""
                },
                phone: ""
            }),
            rules: {
                user: {
                    name: {
                        required: true,
                        message: "请输入姓名",
                        trigger: "blur"
                    },
                    age: {
                        required: true,
                        message: "请输入年龄",
                        trigger: ["input", "blur"]
                    }
                },
                phone: {
                    required: true,
                    message: "请输入电话号码",
                    trigger: ["input"]
                }
            },
            handleValidateClick(e) {
                e.preventDefault();
                formRef.value?.validate((errors) => {

                });
            }
        };
    }
});
</script>
