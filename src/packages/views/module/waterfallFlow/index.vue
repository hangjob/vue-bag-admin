<template>
    <bag-view>
        <div id="main" style="width: 630px;">
            <div style="height: 452px; top: 0px; left: 0px;" v-for="(item,index) in items" :key="index">
                <img src="https://www.jq22.com/demo/jQueryPbl201705071653/imgs/3.png">
                <p>{{ index }}</p>
            </div>
        </div>
    </bag-view>
</template>
<script>
import {defineComponent} from 'vue'
import $ from 'jquery';

export default defineComponent({
    setup() {
        const items = ref(20);
        $(function () {
            let main = $('#main');
            let ITEM_WIDTH = 200;
            const ITEM_SPACE = 15;
            const itemArray = [];
            let itemHeight = [];

            //随机数
            function rand(min, max) {
                return parseInt(Math.random() * (max - min + 1) + min);
            }

            //创建图片
            function createItem(min, max) {
                for (let i = min; i < max; i++) {
                    main.append(`<div><img src="https://www.jq22.com/demo/jQueryPbl201705071653/imgs/3.png"><p>${i}</p></div>`);
                    main.children().eq(i).height(rand(260, 500));
                    itemArray[i] = main.children();
                }
                layout();
            }
            createItem(0, 39);

            //布局
            function layout() {
                const t = 0;
                let l = 0;
                let frist = true;
                let mainWidth = 0;
                const winWidth = $('body').innerWidth();
                //console.log(winWidth);
                main.children().map(function (i, item) {
                    if ((l + ITEM_WIDTH) >= winWidth) {
                        frist = false;
                        mainWidth = l;
                        l = 0;
                    }
                    if (frist) {
                        main.children().eq(i).css({
                            'top': t + 'px',
                            'left': l + 'px'
                        });
                        itemHeight[i] = main.children().eq(i).height();

                    } else {
                        const min = getMin(itemHeight);
                        for (let j = 0; j < itemHeight.length; j++) {
                            if (itemHeight[j] == min) {
                                main.children().eq(i).css({
                                    top: min + ITEM_SPACE,
                                    left: j * (ITEM_WIDTH + ITEM_SPACE)
                                });
                                itemHeight[j] += (main.children().eq(i).height() + ITEM_SPACE);
                                break;
                            }
                        }
                    }
                    l += ITEM_WIDTH + ITEM_SPACE;
                    // oMain居中
                    const w = mainWidth - ITEM_SPACE;
                    main.css({
                        'width': w + 'px',
                    });
                });
            }

            //求最小值
            function getMin(aArray) {
                let min = aArray[0];
                for (let i = 0; i < aArray.length; i++) {
                    if (min > aArray[i]) {
                        min = aArray[i];
                    }
                }
                return min;
            }

            //屏幕大小变更
            $(window).resize(function () {
                itemHeight = [];
                layout();
            });

            // 滚动滚动条达到最长的一个hight时，加载出更多
            $(window).scroll(function () {
                const scrollHeight = $(window).scrollTop();
                const winHeight = $(window).height();
                const max = Math.max.apply(null, itemHeight);
                let num = 0;
                if ((scrollHeight + winHeight) >= max - 30) {
                    num = itemArray.length;
                    createItem(num, num + 10);
                }
            });
        });

        return {
            items
        }
    }
})
</script>
<style lang="less" scoped>

</style>
