<template>
    <n-drawer
        v-model:show="active"
        :default-width="502"
        :placement="placement"
        resizable
    >
        <n-drawer-content title="">

        </n-drawer-content>
    </n-drawer>
</template>

<script setup lang="ts">
import {ref} from "vue";

const active = ref(false)
</script>
