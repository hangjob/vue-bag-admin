<template>
    <a-space
        v-for="(sight, index) in dynamicValidateForm.sights"
        :key="sight.id"
        style="display: flex; margin-bottom: 8px"
        align="baseline"
    >
        <a-form-item
            :name="['sights', index, 'value']"
            label="Sight"
            :rules="{
          required: true,
          message: 'Missing sight',
        }"
        >
            <a-select
                v-model:value="sight.value"
                :disabled="!dynamicValidateForm.area"
                :options="(sights[dynamicValidateForm.area] || []).map(a => ({ value: a }))"
                style="width: 130px"
            ></a-select>
        </a-form-item>
        <a-form-item
            label="Price"
            :name="['sights', index, 'price']"
            :rules="{
          required: true,
          message: 'Missing price',
        }"
        >
            <a-input v-model:value="sight.price" />
        </a-form-item>
        <MinusCircleOutlined @click="removeSight(sight)" />
    </a-space>
</template>
<script lang="ts">
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons-vue'
import { defineComponent, reactive, ref, watch } from 'vue'
import type { FormInstance } from 'ant-design-vue'

interface Sights {
    value: string;
    price: string;
    id: number;
}

export default defineComponent({
    components: {
        MinusCircleOutlined,
        PlusOutlined,
    },
    setup() {
        const areas = [
            { label: 'Beijing', value: 'Beijing' },
            { label: 'Shanghai', value: 'Shanghai' },
        ]

        const sights = {
            Beijing: ['Tiananmen', 'Great Wall'],
            Shanghai: ['Oriental Pearl', 'The Bund'],
        }

        const formRef = ref<FormInstance>()
        const dynamicValidateForm = reactive<{ sights: Sights[]; area: string }>({
            sights: [],
            area: undefined,
        })
        watch(
            () => dynamicValidateForm.area,
            () => {
                dynamicValidateForm.sights = []
            },
        )
        const removeSight = (item: Sights) => {
            let index = dynamicValidateForm.sights.indexOf(item)
            if (index !== -1) {
                dynamicValidateForm.sights.splice(index, 1)
            }
        }
        const addSight = () => {
            dynamicValidateForm.sights.push({
                value: undefined,
                price: undefined,
                id: Date.now(),
            })
        }
        const onFinish = values => {
            console.log('Received values of form:', values)
            console.log('dynamicValidateForm:', dynamicValidateForm)
        }
        return {
            formRef,
            dynamicValidateForm,
            onFinish,
            removeSight,
            addSight,
            areas,
            sights,
        }
    },
})
</script>
