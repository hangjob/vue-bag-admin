<template>
    <bag-view>
        <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <a-space :size="8" style="margin-bottom: 10px">
                    <a-button type="primary" @click="handleJsonPrint(Object.keys(someJSONData[0]))">JSON数据打印</a-button>
                    <a-button type="primary" @click="handleJsonPrint(['name','email'])">JSON数据打印指定字段name，email
                    </a-button>
                </a-space>
                <code>
                    <pre>{{ someJSONData }}</pre>
                </code>
            </a-col>
        </a-row>
        <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <a-space :size="8"  style="margin-bottom: 10px">
                    <a-button type="primary" @click="handleImgPrint">单张图片打印</a-button>
                    <a-button type="primary" @click="handleJsonPrints">多张张图片打印</a-button>
                </a-space>
                <div class="invoice-img">
                    <img :src="invoice" alt="">
                    <img :src="invoice2" alt="">
                    <img :src="invoice3" alt="">
                </div>
            </a-col>
        </a-row>
        <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <a-space :size="8"  style="margin-bottom: 10px">
                    <a-button type="primary" @click="handleHtmlPrint">Html打印</a-button>
                </a-space>
                <div class="dom" id="htmlPrint">
                    <h1>打印标题</h1>
                    <h5>打印次级标题</h5>
                    <p>正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>
                </div>
            </a-col>
        </a-row>
    </bag-view>
</template>
<script lang="ts">

import printJS from "print-js"
import {defineComponent} from 'vue'
import invoice from '@/packages/assets/image/invoice.png'
import invoice2 from '@/packages/assets/image/invoice2.jpg'
import invoice3 from '@/packages/assets/image/invoice3.jpg'

let someJSONData = [
    {
        name: 'John Doe',
        email: 'john@doe.com',
        phone: '111-111-1111'
    },
    {
        name: 'Barry Allen',
        email: 'barry@flash.com',
        phone: '222-222-2222'
    },
    {
        name: 'Cool Dude',
        email: 'cool@dude.com',
        phone: '333-333-3333'
    }
]
export default defineComponent({
    name:'module-print',
    setup() {
        const handleJsonPrint = (fields: Array<string>) => {
            printJS({printable: someJSONData, properties: fields, type: 'json'})
        }

        const handleImgPrint = () => {
            printJS(invoice, 'image')
        }

        const handleJsonPrints = () => {
            printJS({
                printable: [invoice, invoice2, invoice3],
                type: 'image',
                header: '多张图打印标题',
                imageStyle: 'width:50%;margin-bottom:20px;'
            })
        }

        const handleHtmlPrint =()=>{
            printJS('htmlPrint', 'html')
        }

        return {
            handleJsonPrint,
            handleImgPrint,
            handleJsonPrints,
            handleHtmlPrint,
            invoice,
            invoice2,
            invoice3,
            someJSONData,
        }
    }
})
</script>
<style lang="less" scoped>
.invoice-img {
    img {
        margin: 10px;
        object-fit: cover;
        height: 180px;
        border-radius: 5px;
        display: inline-block;
    }
}
</style>
