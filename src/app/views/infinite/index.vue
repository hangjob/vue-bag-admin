<template>
    <n-grid cols="12" y-gap="20" x-gap="20" item-responsive responsive="screen">
        <n-grid-item class="h-full" span="12 m:12 l:6">
            <n-card title="无限滚动" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <n-infinite-scroll style="height:500px" :distance="10" @load="handleLoad">
                    <div
                        v-for="(item, index) in items"
                        :key="item.key"
                        class="message"
                        :class="{ reverse: index % 5 === 0 }"
                    >
                        <img class="avatar" :src="item.avatar" alt="">
                        <span> {{ item.message }} {{ index % 5 === 0 ? '?' : '' }}</span>
                    </div>
                    <div v-if="loading" class="text">
                        加载中...
                    </div>
                    <div v-if="noMore" class="text">
                        没有更多了 🤪
                    </div>
                </n-infinite-scroll>
            </n-card>
        </n-grid-item>
        <n-grid-item span="12 m:12 l:6">
            <n-card title="无限滚动" style="height:100%" :segmented="{content: true,footer:true}"
                    header-style="padding:10px;font-size:14px"
                    footer-style="padding:10px" content-style="padding:10px;height:100%">
                <n-infinite-scroll style="height: 500px" :distance="10" @load="handleLoad2">
                    <div v-for="i in count" :key="i" class="item">
                        {{ i }}
                    </div>
                </n-infinite-scroll>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
<script>
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
    setup() {
        const loading = ref(false);

        const avatars = [
            "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
            "https://avatars.githubusercontent.com/u/20943608?s=60&v=4",
            "https://avatars.githubusercontent.com/u/46394163?s=60&v=4",
            "https://avatars.githubusercontent.com/u/39197136?s=60&v=4",
            "https://avatars.githubusercontent.com/u/19239641?s=60&v=4"
        ];

        const messages = ["星期一", "星期二", "星期三", "星期四", "星期五"];

        const mock = (i) => ({
            key: `${i}`,
            value: i,
            avatar: avatars[i % avatars.length],
            message: messages[Math.floor(Math.random() * messages.length)]
        });

        const items = ref(Array.from({ length: 10 }, (_, i) => mock(i)));
        const noMore = computed(() => items.value.length > 16);

        const handleLoad = async () => {
            if (loading.value || noMore.value)
                return;
            loading.value = true;
            await new Promise((resolve) => setTimeout(resolve, 1e3));
            items.value.push(
                ...[mock(items.value.length), mock(items.value.length + 1)]
            );
            loading.value = false;
        };
        const count = ref(20);
        const handleLoad2 = () => {
            count.value += 1;
        };
        return {
            items,
            noMore,
            loading,
            handleLoad,
            count,
            handleLoad2
        };
    }
});
</script>

<style scoped>
.message {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
}

.message:last-child {
    margin-bottom: 0;
}

.reverse {
    flex-direction: row-reverse;
}

.text {
    text-align: center;
}

.reverse .avatar {
    margin-left: 10px;
}

.avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    margin-right: 10px;
}
.item {
    display: flex;
    align-items: center;
    height: 46px;
    justify-content: center;
    margin-bottom: 10px;
    background-color: rgba(0, 128, 0, 0.16);
}

.item:last-child {
    margin-bottom: 0;
}
</style>
