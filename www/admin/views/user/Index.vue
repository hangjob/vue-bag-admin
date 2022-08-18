<template>
    <bag-view>
        <div class="user">
            <a-col :xs="24" :sm="24" :md="12" :lg="8" :xl="6">
                <div class="user-info">
1
                </div>1
            </a-col>
        </div>
    </bag-view>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    setup(){

    }
})
</script>
<style lang="less" scoped>
.user{
    &-info{
        background-color: red;
        border:1px solid #dddddd;
    }
}
</style>
