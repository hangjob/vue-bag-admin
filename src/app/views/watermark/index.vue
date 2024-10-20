<template>
    <n-grid cols="12" y-gap="20" x-gap="20" item-responsive responsive="screen">
        <n-grid-item  span="12 m:12 l:12">
            <n-card title="文字水印"  style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <n-watermark
                    content="核心机密"
                    cross
                    selectable
                    :font-size="16"
                    :line-height="16"
                    :width="192"
                    :height="128"
                    :x-offset="12"
                    :y-offset="28"
                    :rotate="-15"
                >
                    <n-table :bordered="false" :single-line="false">
                        <thead>
                        <tr>
                            <th>复盘</th>
                            <th>赋能</th>
                            <th>协同</th>
                            <th>...</th>
                            <th>串联</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>拉通</td>
                            <td>打通</td>
                            <td>树立</td>
                            <td>...</td>
                            <td>履约</td>
                        </tr>
                        <tr>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                        </tr>
                        </tbody>
                    </n-table>
                </n-watermark>
            </n-card>
        </n-grid-item>
        <n-grid-item  span="12 m:12 l:12">
            <n-card title="图片水印"  style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <template #header-extra>
                    <n-image height="30" width="30" :src="logo"></n-image>
                </template>
                <n-watermark
                    :image="logo"
                    cross
                    :rotate="-15"
                    :font-size="16"
                    :line-height="16"
                    :width="192"
                    :height="128"
                    :x-offset="12"
                    :y-offset="30"
                    :image-width="20"
                    :image-opacity="0.24"
                >
                    <n-table :bordered="false" :single-line="false">
                        <thead>
                        <tr>
                            <th>复盘</th>
                            <th>赋能</th>
                            <th>协同</th>
                            <th>...</th>
                            <th>串联</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>拉通</td>
                            <td>打通</td>
                            <td>树立</td>
                            <td>...</td>
                            <td>履约</td>
                        </tr>
                        <tr>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                        </tr>
                        </tbody>
                    </n-table>
                </n-watermark>
            </n-card>
        </n-grid-item>
        <n-grid-item  span="12 m:12 l:12">
            <n-card title="图片水印"  style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <template #header-extra>
                    <n-input-group>
                        <n-input v-model:value="text" placeholder="输入自定义水印"/>
                    </n-input-group>
                </template>
                <n-watermark
                    v-model:content="text"
                    cross
                    :rotate="-15"
                    :font-size="16"
                    :line-height="16"
                    :width="192"
                    :height="128"
                    :x-offset="12"
                    :y-offset="30"
                    :image-width="20"
                    :image-opacity="0.24"
                >
                    <n-table :bordered="false" :single-line="false">
                        <thead>
                        <tr>
                            <th>复盘</th>
                            <th>赋能</th>
                            <th>协同</th>
                            <th>...</th>
                            <th>串联</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>拉通</td>
                            <td>打通</td>
                            <td>树立</td>
                            <td>...</td>
                            <td>履约</td>
                        </tr>
                        <tr>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                        </tr>
                        </tbody>
                    </n-table>
                </n-watermark>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script setup>
import logo from "@/packages/assets/logo.png"
const text = ref('自定义水印')
</script>
