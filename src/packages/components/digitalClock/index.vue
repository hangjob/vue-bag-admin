<template>
    <div class="clock">
        <div class="digit hours">
            <div class="segment" v-for="item in 7" :key="item"></div>
        </div>
        <div class="digit hours">
            <div class="segment" v-for="item in 7" :key="item"></div>
        </div>
        <div class="separator"></div>
        <div class="digit minutes">
            <div class="segment" v-for="item in 7" :key="item"></div>
        </div>
        <div class="digit minutes">
            <div class="segment" v-for="item in 7" :key="item"></div>
        </div>
        <div class="separator"></div>
        <div class="digit seconds">
            <div class="segment" v-for="item in 7" :key="item"></div>
        </div>
        <div class="digit seconds">
            <div class="segment" v-for="item in 7" :key="item"></div>
        </div>
    </div>
</template>
<script lang="ts">
import  {defineComponent,onMounted,onBeforeUnmount} from "vue"
export default defineComponent({
    setup(){
        const digitSegments = [[1,2,3,4,5,6],[2,3],[1,2,7,5,4],[1,2,7,3,4],[6,7,2,3],[1,6,7,3,4],[1,6,5,4,3,7],[1,2,3],[1,2,3,4,5,6,7],[1,2,7,3,6]]
        let timer = null
        onBeforeUnmount(()=>{
            timer && clearInterval(timer)
        })
        onMounted(()=>{
            const setNumber = function(digit, number, on) {
                const segments = digit.querySelectorAll(".segment")
                const current = parseInt(digit.getAttribute("data-value"))

                if (!isNaN(current) && current != number) {
                    digitSegments[current].forEach(function(digitSegment, index) {
                        setTimeout(function() {
                            segments[digitSegment-1].classList.remove("on")
                        }, index*45)
                    })
                }
                if (isNaN(current) || current != number) {
                    setTimeout(function() {
                        digitSegments[number].forEach(function(digitSegment, index) {
                            setTimeout(function() {
                                segments[digitSegment-1].classList.add("on")
                            }, index*45)
                        })
                    }, 250)
                    digit.setAttribute("data-value", number)
                }
            }

            const _hours = document.querySelectorAll(".hours")
            const _minutes = document.querySelectorAll(".minutes")
            const _seconds = document.querySelectorAll(".seconds")

            const setDom = function (){
                let date = new Date()
                let hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds()

                setNumber(_hours[0], Math.floor(hours/10), 1)
                setNumber(_hours[1], hours%10, 1)

                setNumber(_minutes[0], Math.floor(minutes/10), 1)
                setNumber(_minutes[1], minutes%10, 1)

                setNumber(_seconds[0], Math.floor(seconds/10), 1)
                setNumber(_seconds[1], seconds%10, 1)
            }
            setDom()
            timer = setInterval(setDom, 1000)
        })
    }
})
</script>
<style lang="less">

.clock {
    position:fixed;
    bottom: 10px;
    left: 10px;
}

.digit {
    width:15px;
    height:25px;
    margin:0 3px;
    position:relative;
    display:inline-block;
}

.digit .segment {
    background:#c00;
    border-radius:5px;
    position:absolute;
    opacity:0.15;
    transition:opacity 0.2s;
}

.digit .segment.on, .separator {
    opacity:1;
    box-shadow:0 0 12px rgba(255,0,0,0.7);
    transition:opacity 0s;
}

.separator {
    width:2.5px;
    height:2.5px;
    background:#c00;
    border-radius:50%;
    display:inline-block;
    position:relative;
    top:-11.25px;
}

.digit .segment:nth-child(1) {
    top:1.25px;
    left:2.5px;
    right:2.5px;
    height:1.25px;
}

.digit .segment:nth-child(2) {
    top:2.5px;
    right:1.25px;
    width:1.25px;
    height:calc(50% - 3.25px);
}

.digit .segment:nth-child(3) {
    bottom:2.5px;
    right:1.25px;
    width:1.25px;
    height:calc(50% - 3.25px);
}

.digit .segment:nth-child(4) {
    bottom:1.25px;
    right:2.5px;
    height:1.25px;
    left:2.5px;
}

.digit .segment:nth-child(5) {
    bottom:2.5px;
    left:1.25px;
    width:1.25px;
    height:calc(50% - 3.25px);
}

.digit .segment:nth-child(6) {
    top:2.5px;
    left:1.25px;
    width:1.25px;
    height: calc(50% - 3.25px);
}

.digit .segment:nth-child(7) {
    bottom:calc(50% - 0.625px);
    right:2.5px;
    left:2.5px;
    height:1.25px;
}
</style>
