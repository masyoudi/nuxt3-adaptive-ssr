<template>
  <NuxtLayout>
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (title?: string) => (title ? title + ' | ' : '').concat('Nuxt3')
});
</script>