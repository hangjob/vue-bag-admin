<template>
    <section class="section section-container">
        <h2 class="wow animate__animated animate__fadeInLeft" data-wow-duration="1.0s" data-wow-delay="0.5">如果您是一个Bag的全新使用者，您可能会遇到一些问题，我们建议您阅读文档</h2>
        <div class="action wow animate__animated animate__fadeIn" data-wow-duration="1.0s" data-wow-delay="0.5">
            <vs-button target :href="{url: '/doc/index.html'}" color="danger" size="large" type="filled" icon="text_snippet">查看文档</vs-button>
        </div>
    </section>
</template>
<script>

</script>
<style lang="less" scoped>
.section{
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: rgba(52, 210, 147, 0.5);
    position: relative;
    overflow: hidden;
    color: #FFFFFF;
    text-align: center;
    h2{
        font-size: 24px;
        font-weight: bold;
    }
    .action{
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }
}
</style>
