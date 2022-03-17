import { ref } from 'vue'

const TableCurd = {
    data: [], // 表格数据
    loading: false, // loading
    selectedRowKeys: [], // 批量选择
    create: {
        visible: false, // 创建弹窗
        ref: ref(),
        submit(create: any) {
            create.value.onSubmit().then(() => {
                TableCurd.create.visible = false
                // @ts-ignore
                TableCurd.get.data()
            }).catch((error: any) => {
                console.log(error)
            })
        },
        change() {
            TableCurd.create.visible = true
        },
    },
    get: {
        ks: '',
        data(api: Function) {
            eval(api + '({ ks: TableCurd.get.ks }).then((res: any) => { TableCurd.data = res ;TableCurd.loading = false});')
        },
    },
}

class Curd {

    data: any[]
    loading: boolean
    selectedRowKeys: any[]

    constructor() {
        this.data = []
        this.loading = false
        this.selectedRowKeys = []
    }

    create(create: any) {
        const obj = {
            visible: false,
            ref: ref(),
            submit() {
                create.value.onSubmit().then(() => {
                    obj.visible = false
                }).catch((error: any) => {
                    console.log(error)
                })
            },
        }
        return { ...obj }
    }
}

const obj = Object.create(TableCurd, {
    job: {
        value: 'IT',
    },
})

console.log(obj.getName())  // Jack
console.log(obj.job)  // IT
console.log(obj.__proto__ === TableCurd)  //true
