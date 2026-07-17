<template>
  <HostApp>
    <template #settings>
      <AppSettingsDrawer />
    </template>
  </HostApp>
</template>

<script setup lang="ts">
import { HostApp } from '@bag/host-vue'
import AppSettingsDrawer from './components/AppSettingsDrawer.vue'
</script>
