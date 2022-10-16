<template>
    <bag-view>
        <template v-slot:action>
            <a-upload :file-list="fileList" :remove="handleRemove" :before-upload="beforeUpload">
                <a-button type="primary">
                    选择Exel文件
                </a-button>
            </a-upload>
        </template>
        <Table :columns="columns" :data="tableData"/>
    </bag-view>
</template>
<script lang="ts">
import {UploadOutlined} from '@ant-design/icons-vue';
import {defineComponent, ref} from 'vue';
// @ts-ignore
import XLSX from "xlsx";
import Table from "./Table.vue";
// 解析exel为json
const readExcelToJson = (file: any) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
            let data = new Uint8Array(e.target.result);
            let workbook = XLSX.read(data, {type: "array"});

            //将Excel 第一个sheet内容转为json格式
            let worksheet = workbook.Sheets[workbook.SheetNames[0]];
            let json = XLSX.utils.sheet_to_json(worksheet);
            resolve(json);
        };
        reader.readAsArrayBuffer(file);
    });
}

const generateTreeData = (arr: Array<any>) => {
    const topLevelNodeMap = new Map();
    const secondLevelNodeMap = new Map();
    const thirdLevelNodeMap = new Map();
    const threeLevelNodeMap = new Map();
    for (let i = 0; i < arr.length; ++i) {
        if (!topLevelNodeMap.has(arr[i]['分类'])) {
            topLevelNodeMap.set(arr[i]['分类'], {
                name: arr[i]['分类'],
                children: []
            });
        }
        if (!secondLevelNodeMap.has(arr[i]['一级类别'])) {
            secondLevelNodeMap.set(arr[i]['一级类别'], {
                name: arr[i]['一级类别'],
                children: []
            });
        }
        if (!thirdLevelNodeMap.has(arr[i]['二级类别'])) {
            thirdLevelNodeMap.set(arr[i]['二级类别'], {
                name: arr[i]['二级类别'],
                children: []
            });
        }

        if (!threeLevelNodeMap.has(arr[i]['三级类别'])) {
            threeLevelNodeMap.set(arr[i]['三级类别'], {
                name: arr[i]['三级类别'],
                value: arr[i]['备 注']
            });
        }
    }

    const visitedSecondLevel = new Set();
    const visitedThirdLevel = new Set();
    const threeThirdLevel = new Set();

    for (let i = 0; i < arr.length; ++i) {
        const topLevelNode = topLevelNodeMap.get(arr[i]['分类']);
        const secondLevelNode = secondLevelNodeMap.get(arr[i]['一级类别']);
        const thirdLevelNode = thirdLevelNodeMap.get(arr[i]['二级类别']);
        const threeLevelNode = threeLevelNodeMap.get(arr[i]['三级类别']);

        if (!visitedSecondLevel.has(secondLevelNode.name)) {
            topLevelNode.children.push(secondLevelNode);
            visitedSecondLevel.add(secondLevelNode.name);
        }

        if (!visitedThirdLevel.has(thirdLevelNode.name)) {
            secondLevelNode.children.push(thirdLevelNode);
            visitedThirdLevel.add(thirdLevelNode.name);
        }

        if (!threeThirdLevel.has(threeLevelNode.name)) {
            thirdLevelNode.children.push(threeLevelNode);
            threeThirdLevel.add(threeLevelNode.name);
        }
    }

    return Array.from(topLevelNodeMap.values());
};


export default defineComponent({
    name: 'module-exel',
    components: {
        UploadOutlined,
        Table
    },

    setup() {
        const fileList = ref<any>([]);
        const uploading = ref(false);
        const tableData = ref([]);
        const columns = ref<Array<any>>([]);

        const handleRemove = (file: any) => {
            const index = fileList.value.indexOf(file);
            const newFileList = fileList.value.slice();
            newFileList.splice(index, 1);
            fileList.value = newFileList;
        };

        const beforeUpload = (file: any) => {
            readExcelToJson(file).then((res: any) => {
                let firstData = res[0];
                columns.value = Object.keys(firstData).map((item) => {
                    return {
                        title: item,
                        dataIndex: item,
                        key: item,
                        ellipsis: true,
                    }
                })

                tableData.value = res.map((item: any, idx: number) => {
                    return {
                        ...item,
                        key: idx
                    }
                });
            })
            return false;
        };

        return {
            tableData,
            columns,
            fileList,
            uploading,
            handleRemove,
            beforeUpload,
        };
    },
});
</script>
