<template>
  <div>
    <div v-if="device.isMobileOrTablet">This is mobile or tablet view</div>
    <div v-else>This is desktop view</div>
  </div>
</template>

<script setup lang="ts">
import { useStateDevice } from '~/composables/state';

const device = computed(() => useStateDevice().value);
</script>
