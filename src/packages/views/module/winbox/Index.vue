<template>
    <bag-view>
        <a-space :size="8">
            <a-button @click="handleWinBox(1)" type="primary">基本例子</a-button>
            <a-button @click="handleWinBox(2)" type="primary">自定义展示的元素</a-button>
            <a-button @click="handleWinBox(3)" type="primary">自定义边界</a-button>
            <a-button @click="handleWinBox(4)" type="primary">分区屏幕</a-button>
            <a-button @click="handleWinBox(5)" type="primary">自定义位置/大小</a-button>
            <a-button @click="handleWinBox(6)" type="primary">模态窗口</a-button>
            <a-button @click="handleWinBox(7)" type="primary">插入DOM元素</a-button>
            <a-button @click="handleWinBox(8)" type="primary">打开一个URL</a-button>
            <a-button @click="handleWinBox(9)" type="primary">打开对话框</a-button>
        </a-space>
        <div id="backstore" style="display: none">
            <div id="content" style="padding: 10px">
                <h1>Lorem Ipsum</h1>
                <p>Lorem ipsum [...]</p>
                <p>Duis autem vel [...]</p>
                <p>Ut wisi enim [...]</p>
            </div>
        </div>
        <br/><br/>
        <div id="controls" style="padding: 10px">
            <a-space :size="8">
                <a-button @click="buttons.minimize()">Minimize (Toggle)</a-button>
                <a-button @click="buttons.maximize()">Maximize (Toggle)</a-button>
                <a-button @click="buttons.fullscreen()">Fullscreen (Toggle)</a-button>
                <a-button @click="buttons.move()">Move (Center, Center)</a-button>
                <a-button @click="buttons.resize()">Resize (50%, 50%)</a-button>
                <a-button @click="buttons.title()">Set Title</a-button>
                <a-button @click="buttons.color()">Set Color</a-button>
                <a-button @click="buttons.close()">Close</a-button>
            </a-space>
        </div>
    </bag-view>
</template>
<script lang="ts">
import {defineComponent, ref} from 'vue'
import loadScript from '@/bag-utils/load/loadScript'
import loadStyle from '@/bag-utils/load/loadStyle'

export default defineComponent({
    setup() {
        const buttons = ref();
        const handleWinBox = ref();
        loadScript('https://cdn.jsdelivr.net/npm/winbox@0.2.1/dist/winbox.bundle.min.js').then(() => {
            const winbox: any = ref();
            handleWinBox.value = (type: number) => {
                switch (type) {
                    case 1:
                        new WinBox("嘿嘿嘿-基本例子", {
                            background: "#ff005d",
                        });
                        break;
                    case 2:
                        new WinBox("嘿嘿嘿-自定义展示的元素", {
                            background: "#ff005d",
                            root: document.body
                        });
                        break;
                    case 3:
                        new WinBox("嘿嘿嘿-自定义边界", {
                            background: "#ff005d",
                            border: "0.3em"
                        });
                        break;
                    case 4:
                        new WinBox("嘿嘿嘿-左边", {
                            background: "#ff005d",
                            right: "50%",
                            max: true
                        });
                        new WinBox("嘿嘿嘿-右边", {
                            background: "#ff005d",
                            x: "100%",
                            left: "50%",
                            max: true
                        });
                        break;
                    case 5:
                        new WinBox({
                            title: "嘿嘿嘿-自定义位置/大小",
                            background: "#ff005d",
                            x: "center",
                            y: "center",
                            width: "50%",
                            height: "50%"
                        });
                        break;
                    case 6:
                        new WinBox("模态窗口", {
                            modal: true,
                            background: "#ff005d",
                        });
                        break;
                    case 7:
                        let DOM: any = document.getElementById("content");
                        new WinBox("模态窗口", {
                            background: "#ff005d",
                            mount: DOM.cloneNode(true)
                        });
                        break;
                    case 8:
                        new WinBox("打开一个URL", {
                            background: "#ff005d",
                            url: "https://hangjob.github.io/winbox/index.html"
                        });
                        break;
                    case 9:
                        winbox.value = new WinBox("对话框", {
                            background: "#ff005d",
                            mount: document.getElementById("controls"),
                            border: 4,
                            onclose: function (force: any) {
                                return !force && !confirm("是否关闭窗口?");
                            }
                        });
                        break;
                }
            }
            buttons.value = {
                minimize: function () {
                    winbox.value.minimize();
                },
                maximize: function () {
                    winbox.value.maximize();
                },
                fullscreen: function () {
                    winbox.value.fullscreen();
                },
                move: function () {
                    winbox.value.move("center", "center");
                },
                resize: function () {
                    winbox.value.resize("50%", "50%");
                },
                title: function () {
                    winbox.value.setTitle("Title-" + Math.random());
                },
                color: function () {
                    winbox.value.setBackground(
                        "rgb(" + (Math.random() * 255 | 0) + "," +
                        (Math.random() * 255 | 0) + "," +
                        (Math.random() * 255 | 0) + ")"
                    );
                },
                modal: function () {
                    winbox.value.body.parentNode.classList.toggle("modal");
                },
                close: function () {
                    winbox.value.close();
                },
                force_close: function () {
                    winbox.value.close(true);
                }
            };
        })

        return {
            handleWinBox,
            buttons
        }
    }
})
</script>
