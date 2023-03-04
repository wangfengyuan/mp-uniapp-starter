<script setup lang="ts">
const { count, increment } = useCounter()
const value = ref('')
</script>

<template>
  <view class="m-6 rounded-lg p-6 u-bg-2">
    <u-button type="primary" @click="increment">
      +1
    </u-button>
    {{ count }}
    <u-input
      v-model="value"
      placeholder="请输入内容"
      border="surround"
    />
    <navigator class="icon-btn mx-2" rel="noreferrer" :url="`/pages/me?from=${value}`" open-type="switchTab" title="GitHub">
      跳转我的页面
    </navigator>
    <div i-carbon-logo-github />
    <Footer />
  </view>
</template>

<style scoped>

</style>
