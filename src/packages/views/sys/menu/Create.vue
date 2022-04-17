<template>
    <div>
        <a-form ref="formRef" :model="formState" :rules="rules" :label-col="{span:6}" :wrapper-col="{wrapperCol:15}">
            <a-row>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="名称" name="name">
                        <a-input v-model:value="formState.name" placeholder="输入菜单名称"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="父级节点" name="pid">
                        <a-tree-select
                            v-model:value="formState.pid"
                            style="width: 100%"
                            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                            :tree-data="treeData"
                            :replace-fields="{children:'children', key:'id', value: 'id', title: 'name'}"
                            placeholder="选择父级节点，不选择为一级菜单"
                            allow-clear
                            tree-default-expand-all
                        >
                            <template #title="{ key, value,title }">
                                <span>{{ title }}</span>
                            </template>
                        </a-tree-select>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="选择图标" name="icon">
                        <a-input-search
                            v-model:value="formState.icon"
                            placeholder="选择icon图标"
                            enter-button
                            :readonly="true"
                            @search="visibleIcon = true"
                        />
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="路由地址" name="path">
                        <a-input v-model:value="formState.path" placeholder="输入路由地址"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="组件路径" name="filePath">
                        <a-input v-model:value="formState.filePath" placeholder="输入路由组件路径"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="网络组件" name="httpFilePath">
                        <a-input v-model:value="formState.httpFilePath" placeholder="输入路由组件路径地址，为http网络组件"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="内嵌iframe" name="iframePath">
                        <a-input v-model:value="formState.iframePath" placeholder="输入iframe页面地址"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="外部链接" name="httpViewPath">
                        <a-input v-model:value="formState.httpViewPath" placeholder="输入外部网络链接"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="开启路由缓存" name="keepAlive">
                        <a-switch checked-children="开" un-checked-children="关" v-model:checked="formState.keepAlive"/>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="是否隐藏tab切换" name="tabHidden">
                        <a-radio-group v-model:value="formState.tabHidden">
                            <a-radio :value="0">显示</a-radio>
                            <a-radio :value="1">隐藏</a-radio>
                        </a-radio-group>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="是否固定菜单" name="tabFix">
                        <a-radio-group v-model:value="formState.tabFix">
                            <a-radio :value="1">是</a-radio>
                            <a-radio :value="0">否</a-radio>
                        </a-radio-group>
                    </a-form-item>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                    <a-form-item label="是否显示" name="shows">
                        <a-radio-group v-model:value="formState.shows">
                            <a-radio :value="1">显示</a-radio>
                            <a-radio :value="0">隐藏</a-radio>
                        </a-radio-group>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
    </div>
    <a-modal v-model:visible="visibleIcon" width="85%" title="选择icon"  okText="确认" cancelText="关闭">
        <div class="item-icons">
            <a-row>
                <a-col class="item" :xs="12" :sm="8" :md="4" :lg="3" :xl="2" v-for="(icon,idx) in icons">
                    <div class="item-icon">
                        <component :is="icon" :key="idx" @click="handleSelected(icon)"></component>
                    </div>
                </a-col>
            </a-row>
        </div>
    </a-modal>
</template>
<script lang="ts">
import {defineComponent, onMounted, reactive, ref, toRaw, UnwrapRef} from 'vue'
import icons from './icons'
import {validatPath, validatHttpFilePath, filePathRouter} from '@/packages/utils/validator'
import {toTree} from '@/packages/utils/utils'


export default defineComponent({
    props: {
        treeData: {
            type: Array,
        },
    },
    setup(props, {emit}) {
        const formRef = ref()
        const visibleIcon = ref(false)
        const treeData = ref()
        const formState: any = reactive({
            name: '',
            icon: '',
            shows: 1,
            path: '',
            pid: '',
            filePath: '',
            httpFilePath: '',
            iframePath: '',
            httpViewPath: '',
            limits: [],
            keepAlive: 0,
            tabHidden: 0,
            tabFix: 0,
        })
        const rules = {
            name: [
                {required: true, message: '名称为必填项', trigger: 'blur'},
                {min: 2, max: 6, message: '长度最小2，最大6', trigger: 'blur'},
            ],
            icon: [
                {required: false, message: 'icon为必填项', trigger: 'blur'},
            ],
            filePath: [
                {validator: filePathRouter, trigger: 'blur'},
            ],
            httpFilePath: [
                {validator: validatHttpFilePath, trigger: 'blur'},
            ],
            iframePath: [
                {validator: validatHttpFilePath, trigger: 'blur'},
            ],
            httpViewPath: [
                {validator: validatHttpFilePath, trigger: 'blur'},
            ],
        }
        treeData.value = toTree(props.treeData || [])

        const handleSelected = (icon: string) => {
            visibleIcon.value = false
            formState.icon = icon
        }
        return {
            formState,
            rules,
            formRef,
            visibleIcon,
            icons,
            handleSelected,
            treeData,
        }
    },
})
</script>
<style lang="less" scoped>
.item-icons {
    .item {
        text-align: center;
        padding: 10px 0;
        cursor: pointer;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        &-icon {
            border: 1px solid #ddd;
            width: 45px;
            border-radius: 3px;
        }
    }
}
</style>
