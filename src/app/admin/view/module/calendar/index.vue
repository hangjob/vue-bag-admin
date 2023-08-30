<template>
    <n-card>
        <n-calendar
            v-model:value="compData.value"
            :is-date-disabled="compData.isDateDisabled"
            @update:value="compData.handleUpdateValue"
            @panel-change="compData.handlePanelChange"
        >
            <template #header>
                <div>{{compData.text}}</div>
            </template>
            <template #default="{ year, month, date }">
                <p v-html="compData.format(year, month, date)"></p>
            </template>
        </n-calendar>
    </n-card>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue"
import { isYesterday, addDays } from "date-fns/esm"
import calendar from "js-calendar-converter"
export default defineComponent({
    setup () {
        const compData = reactive({
            text:"",
            value:addDays(Date.now(), 1).valueOf(),
            format(year, month, date){
                const dd = calendar.solar2lunar(year,month,date)
                return `${dd.gzYear} ${dd.IMonthCn} ${dd.IDayCn} <br/> ${dd.Animal} ${dd.astro} <br/> ${dd.lunarFestival ? dd.lunarFestival : ""}`
            },
            handleUpdateValue(_: number,{ year, month, date }: { year: number; month: number; date: number }){
                updateText(year,month,date)
            },
            isDateDisabled (timestamp: number) {
                if (isYesterday(timestamp)) {
                    return true
                }
                return false
            },
            handlePanelChange({ year, month }:{ year: number; month: number;}){
                updateText(year,month,new Date(compData.value).getDay())
            }
        })

        function updateText(year,month,date){
            const dd = calendar.solar2lunar(year,month,date)
            compData.text = `${dd.gzYear}${dd.IMonthCn}${dd.IDayCn} ${dd.astro} ${dd.ncWeek}`
        }
        updateText(new Date(compData.value).getFullYear(),new Date(compData.value).getMonth(),new Date(compData.value).getDay())
        return {
            compData
        }
    }
})
</script>
