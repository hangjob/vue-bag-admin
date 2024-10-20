<template>
    <n-grid cols="12" y-gap="20" x-gap="20" item-responsive responsive="screen">
        <n-grid-item span="12 m:12 l:12">
            <n-card title="日历" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <n-calendar
                    v-model:value="compData.value"
                    :is-date-disabled="compData.isDateDisabled"
                    @update:value="compData.handleUpdateValue"
                    @panel-change="compData.handlePanelChange"
                >
                    <template #header>
                        <div>{{ compData.text }}</div>
                    </template>
                    <template #default="{ year, month, date }">
                        <p v-html="compData.format(year, month, date)"></p>
                    </template>
                </n-calendar>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script setup>
import { isYesterday, addDays } from "date-fns"
import calendar from "js-calendar-converter"
const compData = reactive({
    text: "",
    value: addDays(Date.now(), 2).valueOf(),
    format(year, month, date) {
        const dd = calendar.solar2lunar(year, month, date)
        return `${dd.gzYear} ${dd.IMonthCn} ${dd.IDayCn} <br/> ${dd.Animal} ${dd.astro} <br/> ${dd.lunarFestival ? dd.lunarFestival : ""}`
    },
    handleUpdateValue(_, {year, month, date}) {
        updateText(year, month, date)
    },
    isDateDisabled(timestamp) {
        return !!isYesterday(timestamp);

    },
    handlePanelChange({year, month}) {
        updateText(year, month, new Date(compData.value).getDay())
    }
})

function updateText(year, month, date) {
    const dd = calendar.solar2lunar(year, month, date)
    compData.text = `${dd.gzYear}${dd.IMonthCn}${dd.IDayCn} ${dd.astro} ${dd.ncWeek}`
}

updateText(new Date(compData.value).getFullYear(), new Date(compData.value).getMonth(), new Date(compData.value).getDay())
</script>
