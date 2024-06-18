import {defineStore} from "pinia";

export default {
    colors: [
        {name: '薄暮', color: '#f5222d'}, {name: '火山', color: '#fa541c'},
        {name: '日暮', color: '#13c2c2'}, {name: '深绿', color: '#009688'},
        {name: '薄暮', color: '#f5222d'}, {name: '火山', color: '#fa541c'},
        {name: '日暮', color: '#13c2c2'}, {name: '深绿', color: '#009688'},
    ]
}


const useGlobalStore = defineStore('theme', {
    state: () => ({
        themeConfig: {
            primary: '#1677ff',
            info: '#722ed1',
            success: '#52c41a',
            warning: '#faad14',
            error: '#f5222d'
        }
    })
})
