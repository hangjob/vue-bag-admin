<template>

</template>
<script setup>
const largeUploadFile = new $global.helpers.LargeUploadFile({
    handleProgress({progress}) {
        console.log(progress[0].number)
    },
    handleMerge(res) {
        console.log(res)
    }
})
</script>


