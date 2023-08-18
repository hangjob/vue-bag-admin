<template>
    <div class="user-set">
        <template v-if="!compData.browser.sm" >
            <n-el tag="div" class="set-item hover-color" @click="compData[item.name]" v-for="(item,idx) in userIcon" :key="idx">
                <n-icon :size="item.size" :color="item.color">
                    <component :is="item.name"></component>
                </n-icon>
            </n-el>
        </template>
        <n-el tag="div" class="set-item">
            <n-switch @update:value="compData.handleDarkTheme" v-model:value="darkTheme" size="medium">
                <template #checked-icon>
                    <n-icon :size="14"><MoonOutline/></n-icon>
                </template>
                <template #unchecked-icon>
                    <n-icon :size="14"><SunnyOutline/></n-icon>
                </template>
            </n-switch>
        </n-el>
        <div class="set-item">
            <n-dropdown trigger="click" :options="userOptions">管理员</n-dropdown>
        </div>
    </div>
    <UserSetting ref="UserSettingRef"/>
</template>
<script lang="ts">
import { useMessage, NAvatar, NText } from "naive-ui"
import { h, defineComponent, ref,computed, Component,reactive } from "vue"
import {SearchOutline,NotificationsOutline,LanguageOutline,ScanOutline,HappyOutline,SettingsOutline,SunnyOutline,MoonOutline} from "@vicons/ionicons5"
import UserSetting from "@/packages/layout/components/UserSetting.vue"
import appStore from "@/packages/pinia/app.ts"
import {watch} from "vue/dist/vue"
function renderCustomHeader () {
    return h(
        "div",
        {
            style: "display: flex; align-items: center; padding: 8px 12px;"
        },
        [
            h(NAvatar, {
                round: true,
                style: "margin-right: 12px;",
                src: "https://07akioni.oss-cn-beijing.aliyuncs.com/demo1.JPG"
            }),
            h("div", null, [
                h("div", null, [h(NText, { depth: 2 }, { default: () => "打工仔" })]),
                h("div", { style: "font-size: 12px;" }, [
                    h(
                        NText,
                        { depth: 3,style: "margin-top: 5px;display:inline-block;"},
                        { default: () => "毫无疑问，你是办公室里最亮的星" }
                    )
                ])
            ])
        ]
    )
}

export default defineComponent({
    components:{
        SearchOutline,NotificationsOutline,
        LanguageOutline,ScanOutline,HappyOutline,SettingsOutline,UserSetting,MoonOutline,SunnyOutline
    },
    setup(){
        const UserSettingRef = ref(null)
        const app = appStore()
        const {themeName} = app.userSetting
        const compData = reactive({
            SettingsOutline:()=>{
                UserSettingRef.value.change()
            },
            handleDarkTheme(value){
                app.userSetting.themeName = value ? "darkTheme" : null
            },
            browser:app.browser
        })
        return {
            compData,
            UserSettingRef,
            darkTheme:themeName !== null,
            userOptions: [
                {
                    key: "header",
                    type: "render",
                    render: renderCustomHeader
                },
                {
                    key: "header-divider",
                    type: "divider"
                },
                {
                    label: "处理群消息 342 条",
                    key: "stmt1"
                },
                {
                    label: "被 @ 58 次",
                    key: "stmt2"
                },
                {
                    label: "加入群 17 个",
                    key: "stmt3"
                }
            ],
            userIcon:[
                {size:18,color:"0e7a0d",name:"HappyOutline"},
                {size:18,color:"0e7a0d",name:"SearchOutline"},
                {size:18,color:"0e7a0d",name:"NotificationsOutline"},
                {size:18,color:"0e7a0d",name:"LanguageOutline"},
                {size:18,color:"0e7a0d",name:"ScanOutline"},
                {size:18,color:"0e7a0d",name:"SettingsOutline"}
            ],
        }
    }
})
</script>
<style lang="less" scoped>
.user-set{
    display: flex;
    height: 50px;
    .set-item{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 12px;
        padding-right: 12px;
        cursor: pointer;
        flex-shrink: 0;
        &.hover-color{
            &:last-of-type{
                padding-right: 2px;
            }
            &:hover{
                color: var(--n-item-text-color);
                background-color: var(--primary-color);
            }
        }
    }
}
</style>
