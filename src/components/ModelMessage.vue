<script setup lang="ts">
import { marked } from 'marked';

const props = defineProps<{
  text: string
}>()

const htmlContent = marked.parse(props.text, {
  gfm: true,
  breaks: true
});
</script>

<template>
  <div class="model-message message" v-html="htmlContent"></div>
</template>

<style scoped>
.model-message {}
</style>