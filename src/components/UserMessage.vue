<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="user-message message">{{ text }}</div>
</template>

<style scoped>
.user-message {
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  background-color: rgb(51, 53, 55);
  text-align: right;
  margin-left: auto;
}
</style>