<template>
    <section class="py-[30px] bg-[#272727] text-white section-container">
        <n-grid cols="12" item-responsive responsive="screen" :x-gap="20">
            <n-grid-item span="12 m:12 l:3">
                <div class="mt-5 flex justify-center flex-col items-center">
                    <img style="width: 66px" :src="domImg" alt="">
                    <p>长按扫一扫</p>
                </div>

            </n-grid-item>
            <n-grid-item span="12 m:12 l:3">
                <div class="mt-5 h-full flex justify-center flex-col items-center" @click="copyfun">
                    <p>微信号：<span>itnavs</span></p>
                </div>
            </n-grid-item>
            <n-grid-item span="12 m:12 l:3">
                <div class="mt-5 h-full flex justify-center flex-col items-center">
                    <p><a href="mailto:470193837@qq.com?subject=邮件的默认标题">470193837@qq.com</a></p>
                </div>
            </n-grid-item>
            <n-grid-item span="12 m:12 l:3">
                <div class="mt-5 h-full flex justify-center flex-col items-center">
                    <p><span>鄂ICP备17016349号-3</span></p>
                </div>
            </n-grid-item>
        </n-grid>
    </section>
</template>
<script  setup>
import QRCode from 'qrcode'

const domImg = ref('')
QRCode.toDataURL('res.data.data.qrcode')
    .then(url => {
        domImg.value = url
    })
    .catch(err => {
        console.error(err)
    })
function copyfun() {
    const copyipt = document.createElement('input')
    const text = 'itnavs'
    copyipt.setAttribute('value', text)
    document.body.appendChild(copyipt)
    copyipt.select()
    document.execCommand('copy')
    document.body.removeChild(copyipt)
}
</script>
