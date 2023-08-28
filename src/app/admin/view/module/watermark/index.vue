<template>
    <n-card :segmented="{content: true,footer:true}" header-style="padding:10px" footer-style="padding:10px">
        <template #header>
            水印
        </template>
        <template #header-extra>
            核心机密
        </template>
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
            <n-table :single-line="false">
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
</template>
<script setup>
</script>
