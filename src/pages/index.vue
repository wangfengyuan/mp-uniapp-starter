<script setup lang="ts">
const { count, increment } = useCounter()
</script>

<template>
  <view class="m-6 rounded-lg p-6 u-bg-2">
    <u-button type="primary" @click="increment">
      +1
    </u-button>
    {{ count }}
    <Footer />
  </view>
</template>

<style scoped>

</style>
