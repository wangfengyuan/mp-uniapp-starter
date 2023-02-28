<script setup lang="ts">
</script>

<template>
  <view class="mt-6 text-xl">
    <RouterLink class="icon-btn mx-2" to="/">
      <div i-carbon-campsite />
    </RouterLink>

    <button class="icon-btn mx-2 !outline-none">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <a class="icon-btn mx-2">
      <div i-carbon-language />
    </a>

    <RouterLink class="icon-btn mx-2" to="/about">
      <div i-carbon-dicom-overlay />
    </RouterLink>
    <navigator class="icon-btn mx-2" rel="noreferrer" url="https://github.com/antfu/vitesse" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </navigator>
  </view>
</template>
