<template>
    <n-menu
        v-if="$globalStore.configs.layoutName === 'default'"
        :inverted="false"
        :collapsed-width="$globalStore.configs.collapsedWidth"
        :collapsed-icon-size="$globalStore.configs.collapsedIconSize"
        :options="$globalStore.menus"
        key-field="id"
        label-field="lable"
        :render-label="(option)=>formatTitle($global, option)"
        v-model:value="getCurrentRouterId"
        :on-update:value="handleMenuChange"
    />
    <n-el tag="div" class="hide-scrollbar h-full flex overflow-hidden w-full" v-else>
        <ul :style="{maxWidth:$globalStore.configs.layoutSiderWidth}"
            class="min-w-[90px] flex-1 p-2 box-border border-l border-r border-solid bag-border-color h-full">
            <li @click="handleMenuItemClick($global,item)"
                :class="['menu-item truncate text-balance transition text-center first:mt-0 py-2 last:mb-0 flex flex-col items-center mb-3 mt-3 cursor-pointer rounded-md',classNameMenuItemActive($globalStore,item)]"
                v-for="item in $globalStore.menus">
                <component :is="item.icon"></component>
                <div>{{ $global?.helpers?.formatTitle($global, item) }}</div>
            </li>
        </ul>
        <div class="w-[80px] flex-shrink-0" v-if="$globalStore.subMenus.length">
            <n-menu
                :inverted="false"
                :collapsed-icon-size="$globalStore.configs.collapsedIconSize"
                :options="$globalStore.subMenus"
                key-field="id"
                label-field="lable"
                ordered
                :render-label="(option)=>formatTitle($global, option)"
                :collapsed-width="$globalStore.configs.collapsedWidth"
                :collapsed="true"
                v-model:value="getCurrentRouterId"
                :on-update:value="handleMenuChange"
            />
        </div>
    </n-el>
</template>
<script setup>
import {formatTitle} from "@/packages/helpers/index.js"

const classNameMenuItemActive = ($globalStore, item) => {
    if ($globalStore.currentRouter.meta.topId === item.id || $globalStore.currentRouter.meta.id === item.id) {
        return 'active'
    }
}
const getCurrentRouterId = computed(() => $globalStore.currentRouter.query.rid || $globalStore.currentRouter.meta.id)

const handleMenuItemClick = ($global, item) => {
    if ($global.radash.isArray(item.children)) {
        const todo = item.children.first()
        todo.path && $global.router.push(todo.path)
    } else {
        item.path && $global.router.push(item.path)
    }
}

const handleMenuChange = (value, item) => {
    $global.router.$push(item.path)
}


</script>
<style lang="less" scoped>
.menu-item {
    &:hover {
        background-color: var(--primary-color-hover);
        color: var(--base-color);
    }

    &.active {
        background-color: var(--primary-color);
        color: var(--base-color);
    }
}
</style>
