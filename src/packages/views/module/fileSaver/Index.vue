<template>
    <bag-view>
        <div>
            <a-input-search v-model:value="action.text.value" placeholder="Hello, world!" size="large"/>
            <br/>
            <br/>
            <a-button type="primary" @click="action.text.handleSave">保存文字</a-button>
        </div>
        <br/>
        <div>
            <a-input-search v-model:value="action.site.value" placeholder="Hello, world!" size="large"/>
            <br/>
            <br/>
            <a-button type="primary" @click="action.site.handleSave">保存图片</a-button>
            <span> 在相同来源内使用URL只会使用a[download]。否则，它将首先检查它是否支持带有同步头请求的cors标头。如果是这样，它将下载数据并使用Blob
                URL保存。如果没有，它将尝试使用下载它a[download]
            </span>
        </div>
        <br/>
        <div>
            <a-input-search v-model:value="action.file.value" placeholder="Hello, world!" size="large"/>
            <br/>
            <br/>
            <a-button type="primary" @click="action.file.handleSave">保存文件</a-button>
        </div>
        <div>
            <canvas id="canvas"></canvas>
            <br/>
            <br/>
            <a-button type="primary" @click="action.canvas.handleSave">保存画布</a-button>
        </div>
    </bag-view>
</template>
<script lang="ts">
import {defineComponent, reactive, ref, onMounted} from 'vue'
// @ts-ignore
import {saveAs} from 'file-saver';

export default defineComponent({
    setup() {
        let canvas: any = null
        onMounted(() => {
            //在canvas上绘制矩形
            // canvas = document.getElementById("canvas");
            // const context = canvas.getContext("2d");
            // context.fillStyle = "#13c2c2"; //填充颜色
            // context.fillRect(50, 50, 200, 100); ////绘制实心矩形
        })
        const action = reactive({
            text: {
                value: 'Hello, world!',
                handleSave: () => {
                    const blob = new Blob([action.text.value], {type: "text/plain;charset=utf-8"});
                    saveAs(blob, "hello world.txt");
                }
            },
            site: {
                value: 'https://vite.itnavs.com/assets/static/invoice3-2b50c53f.jpg',
                handleSave: () => {
                    saveAs(action.site.value, "image.jpg");
                }
            },
            file: {
                value: 'Hello, world!',
                handleSave: () => {
                    const file = new File([action.file.value], "hello world.txt", {type: "text/plain;charset=utf-8"});
                    saveAs(file);
                }
            },
            canvas: {
                value: 'Hello, world!',
                handleSave: () => {
                    //将canvas内容保存为文件并下载
                    // canvas.toBlob(function (blob: any) {
                    //     saveAs(blob, "hangge.png");
                    // });
                }
            }
        })
        return {
            action
        }
    }
})
</script>
<style lang="less" scoped>

</style>
