<template>
    <div class="sweet">
        <it-button-group>
            <it-button type="primary" icon="emoji_emotions" >点赞</it-button>
            <it-button type="primary" icon="emoji_emotions" outlined>打赏</it-button>
        </it-button-group>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({

})
</script>
<style lang="less" scoped>
.sweet{
    margin-top: var(--yh-margin-base);
    display: flex;
    justify-content: flex-end;

}
</style>
