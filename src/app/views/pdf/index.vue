<template>
    <n-grid cols="12" y-gap="12" x-gap="12" item-responsive responsive="screen">
        <n-grid-item span="12 m:12 l:12">
            <n-card :segmented="{content: true,footer:true}" header-style="padding:10px;font-size:14px">
                <template #header>
                   <n-pagination v-model:page="currentPage" :page-count="pageCount" simple />
                </template>
                <template #header-extra>
                    <n-space item-style="display: flex;" align="center">
                        <n-checkbox @update:checked="showAllPagesChange" v-model:checked="showAllPages">
                            显示所有页面
                        </n-checkbox>
                    </n-space>
                </template>
                <div class="w-full flex items-center justify-center">
                    <div class="w-[90%]">
                        <vue-pdf-embed
                            ref="pdfRef"
                            class="h-full container overflow-auto"
                            :rotation="rotations[currentRotation]"
                            :page="currentPage"
                            :source="source"
                            @rendered="handleDocumentRender"
                        />
                    </div>
                </div>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script setup>
import VuePdfEmbed from "vue-pdf-embed";

const pdfRef = ref();
const pageCount = ref(1);
const loading = ref(true);
const currentPage = ref(1);
const currentRotation = ref(0);
const showAllPages = ref(false);
const rotations = [0, 90, 180, 270];
const source = "/http.pdf";

const handleDocumentRender = () => {
    loading.value = false;
    pageCount.value = pdfRef.value.doc.numPages;
};

const showAllPagesChange = () => {
    currentPage.value = showAllPages.value ? 1 : null;
};

const onPrint = () => {
    // 如果在打印时，打印页面是本身的两倍，在打印配置 页面 设置 仅限页码为奇数的页面 即可
    pdfRef.value.print();
};
</script>
