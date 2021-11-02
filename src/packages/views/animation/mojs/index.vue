<template>
    <yxs-view class="mojs">
        <a-row :gutter="[15,15]">
            <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8">
                <div class="item">
                    <div id="circle1"></div>
                </div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="8">
                <div class="item">
                    <div id="circle2"></div>
                </div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="8">
                <div class="item">
                    <div id="circle3"></div>
                </div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="item">
                    <div id="ease_in" class="example"></div>
                </div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="item">
                    <div id="ease_out" class="example"></div>
                </div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="item">
                    <div id="ease_inout" class="example"></div>
                </div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="item">
                    <div id="bounce_in" class="example"></div>
                </div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="item">
                    <div id="bounce_out" class="example"></div>
                </div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="item">
                    <div id="bounce_inout" class="example"></div>
                </div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <div class="item">
                    <div id="js-el" class="el"></div>
                </div>
            </a-col>
        </a-row>
    </yxs-view>
</template>
<script>
import mojs from '@mojs/core'

const props = {
    shape: 'rect',
    fill: '#4caf50',
    radius: 20,
    duration: 3000,
    x: {['-30vw']: '30vw'},
    angle: {0: 180},
    repeat: 999,
    isYoyo: true,
    isShowStart: true,
}

export default {
    data() {

    },
    mounted() {
        this.circle1()
        this.circle2()
        this.circle3()
        this.easeAlls()
        this.jsel()
    },
    methods: {
        circle1() {
            new mojs.Shape({
                parent: '#circle1',
                shape: 'circle',
                fill: {'#F64040': '#FC46AD'},
                radius: {20: 40},
                duration: 2000,
                isYoyo: true,
                isShowStart: true,
                easing: 'elastic.inout',
                repeat: 1000,
            }).play()
        },
        circle2() {
            new mojs.Shape({
                parent: '#circle2',
                shape: 'rect',
                left: '50%',
                fill: 'none',
                radius: 20,
                stroke: {'rgba(0,255,255, 1)': 'magenta'},
                strokeWidth: {10: 10},
                strokeDasharray: '100%',
                strokeDashoffset: {'-100%': '100%'},
                angle: {0: 180},
                duration: 2000,
                repeat: 999,
            }).play();
        },
        circle3() {
            new mojs.Shape({
                parent: '#circle3',
                shape: 'polygon',
                points: 5,
                left: '50%',
                fill: {'deeppink': '#00F87F'},
                x: {'rand(0%, -300%)': 0},
                angle: {0: 'rand(0, 360)'},
                radius: 25,
                duration: 2000,
                repeat: 999,
            }).play();
        },
        easeAlls() {
            new mojs.Shape({...props, parent: '#ease_in', easing: 'ease.in'}).play()
            new mojs.Shape({...props, parent: '#ease_out', easing: 'ease.out'}).play();
            new mojs.Shape({...props, parent: '#ease_inout', easing: 'ease.inout'}).play();
            new mojs.Shape({...props, parent: '#bounce_in', easing: 'ease.in'}).play()
            new mojs.Shape({...props, parent: '#bounce_out', easing: 'ease.out'}).play();
            new mojs.Shape({...props, parent: '#bounce_inout', easing: 'ease.inout'}).play();
        },
        jsel() {
            new mojs.Html({
                el: '#js-el',
                x: {
                    0: 300, duration: 2000, delay: 200, easing: 'cubic.out', onComplete() {
                        console.log('x property animation complete')
                    }
                },
                y: {
                    0: 20,
                    duration: 1000,
                    onComplete() {
                        console.log('y property animation complete')
                    }
                },
                left: '0%',
                top:  '0%'
            }).play()
        }
    }
}
</script>
<style lang="less" scoped>
.mojs {
    .item {
        background-color: #dddddd;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 3px;
        height: 125px;
    }

    .example {
        position: relative;
        height: 100%;
        overflow: visible;
    }
    .el {
        position: absolute;
        width: 100px;
        height: 100px;
        background: #572B53;
    }
}
</style>