<template>
    <section class="section section-container">
        <n-grid  cols="24" x-gap="10"  y-gap="30" item-responsive responsive="screen">
            <n-grid-item span="24 m:12 l:6">
                <div class="service-icon">
                    <div class="circle wow animate__animated animate__slideInLeft" data-wow-duration="1.0s" data-wow-delay="0.5">
                        <n-icon size="60" color="#e96656">
                            <TeamOutlined/>
                        </n-icon>
                    </div>
                    <h5  class="wow animate__animated animate__slideInRight" data-wow-duration="1.0s" data-wow-delay="0.5">
                        <n-number-animation :from="0" :duration="1800" :to="12288" />
                    </h5>
                    <p class="indent">Projects Completed</p>
                </div>
            </n-grid-item>
            <n-grid-item span="24 m:12 l:6">
                <div class="service-icon">
                    <div class="circle wow animate__animated animate__slideInLeft" data-wow-duration="1.0s" data-wow-delay="0.5">
                        <n-icon size="60" color="#34d293">
                            <UsergroupAddOutlined/>
                        </n-icon>
                    </div>
                    <h5 class="wow animate__animated animate__slideInRight" data-wow-duration="1.4s" data-wow-delay="0.5">
                        <n-number-animation :from="0" :duration="1800" :to="2288" />
                    </h5>
                    <p class="indent">Happy Clients</p>
                </div>
            </n-grid-item>>
            <n-grid-item span="24 m:12 l:6">
                <div class="service-icon">
                    <div class="circle wow animate__animated animate__slideInLeft" data-wow-duration="1.0s" data-wow-delay="0.5">
                        <n-icon size="60" color="#3ab0e2">
                            <MailUnread/>
                        </n-icon>
                    </div>
                    <h5 class="wow animate__animated animate__slideInRight" data-wow-duration="1.4s" data-wow-delay="0.5">
                        <n-number-animation :from="0" :duration="1800" :to="18234" />
                    </h5>
                    <p class="indent">Mail Conversation</p>
                </div>
            </n-grid-item>
            <n-grid-item span="24 m:12 l:6">
                <div class="service-icon">
                    <div class="circle wow animate__animated animate__slideInLeft" data-wow-duration="1.0s" data-wow-delay="0.5">
                        <n-icon size="60" color="#f7d861">
                            <RibbonOutline/>
                        </n-icon>
                    </div>
                    <h5 class="wow animate__animated animate__slideInRight" data-wow-duration="1.0s" data-wow-delay="0.5">
                        <n-number-animation :from="0" :to="1800" />
                    </h5>
                    <p class="indent">Photos Taken</p>
                </div>
            </n-grid-item>
        </n-grid>
    </section>
</template>
<script>

</script>
<style lang="less" scoped>
.section {
    padding-top: 90px;
    padding-bottom: 120px;
    background: rgba(0, 0, 0, 0.5);
    clear: both;
    position: relative;
    overflow: hidden;
    color: #FFFFFF;
    text-align: center;

    h5 {
        font-weight: bold;
        font-size: 17px;
        position: relative;
        margin-top: 15px;
        margin-bottom:20px;

        &::before {
            position: absolute;
            z-index: 1;
            content: "";
            width: 20%;
            height: 2px;
            background: #f7d861;
            bottom: -8px;
            left: 50%;
            transform: translate(-50%, 0);
        }
    }
    .service-icon{
        margin-top: 30px;
        .indent{
            color: #d1d1d1;
        }
    }
}
</style>
