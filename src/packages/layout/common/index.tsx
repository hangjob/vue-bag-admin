import { h, resolveComponent } from 'vue'

const deepMenu = function(list: Array<any>) {
    let html: any = null
    return list.filter((item: any) => item.shows).map((item: any) => {
        if (item.children && item.children.length) {
            html = h(
                <a-sub-menu key={item.id}></a-sub-menu>,
                {},
                {
                    title: () => {
                        return item.icon ? [h(resolveComponent(item.icon)), h('span', item.name)] : h('span', item.name)
                    },
                    default: () => {
                        let children = item.children.map((todo: any) => {
                            return <a-menu-item info={item} key={todo.id}>{todo.name}</a-menu-item>
                        })
                        return children && deepMenu(item.children)
                    },
                },
            )
        } else {
            html = h(
                <a-menu-item info={item} key={item.id}></a-menu-item>,
                {},
                {
                    default: () => {
                        // 主体渲染方式请看官方文档 https://v3.vuejs.org/guide/render-function.html#return-values-for-render-functions
                        return item.icon ? [h(resolveComponent(item.icon)), h('span', item.name)] : h('span', item.name)
                    },
                },
            )
        }
        return html
    })
}


export {
    deepMenu,
}

