<template>
    <n-grid cols="12" y-gap="20" x-gap="20" item-responsive responsive="screen">
        <n-grid-item span="12 m:12 l:12">
            <n-card title="通过设备浏览器信息获取浏览器指纹的插件(官方宣称其识别精度达到99.5%)" style="height:100%"
                    :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                指纹ID:
                <n-text type="info">
                    {{ compData.murmur1 }}
                </n-text>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:12">
            <n-card title="把微信浏览器里UA的wifi或4G等网络替换成空,不然切换网络会ID不一样" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                指纹ID:
                <n-text type="info">
                    {{ compData.murmur2 }}
                </n-text>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script setup>
import Fingerprint2 from "fingerprintjs2"

const compData = reactive({
    murmur1: {},
    murmur2: ""
})
const createFingerprint1 = () => {
    Fingerprint2.get((components) => {
        const values = components.map((component, idx) => {
            return component.value
        }) // 配置的值的数组
        compData.murmur1 = Fingerprint2.x64hash128(values.join(""), 31).toUpperCase() // 生成浏览器指纹
    })
}

const createFingerprint2 = () => {
    Fingerprint2.get((components) => {
        const values = components.map((component, idx) => {
            if (idx === 0) { //把微信浏览器里UA的wifi或4G等网络替换成空,不然切换网络会ID不一样
                return component.value.replace(/\bNetType\/\w+\b/, '')
            }
            return component.value
        }) // 配置的值的数组
        compData.murmur2 = Fingerprint2.x64hash128(values.join(""), 31).toUpperCase() // 生成浏览器指纹
    })
}

if (window.requestIdleCallback) {
    window.requestIdleCallback(() => {
        createFingerprint1()
        createFingerprint2()
    })
} else {
    setTimeout(() => {
        createFingerprint1()
        createFingerprint2()
    }, 50)
}
</script>
