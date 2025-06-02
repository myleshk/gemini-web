<script setup lang="ts">
import { useMessageStore } from '@/stores/message';
import UserMessage from './UserMessage.vue';
import ModelMessage from './ModelMessage.vue';
import { Role } from '@/models/Role';
import { computed, nextTick, ref, watch } from 'vue';

const messageStore = useMessageStore();
const messages = computed(() => messageStore.messages);

const containerRef = ref<HTMLElement | null>(null);

function scrollToBottom() {
  nextTick(() => {
    if (containerRef.value) {
      containerRef.value.scrollTo({
        top: containerRef.value.scrollHeight,
        behavior: 'smooth'
      });
    }
  });
}

watch(messages, () => {
  scrollToBottom();
  console.log("scrollToBottom called");
}, { immediate: true, deep: true });
</script>

<template>
  <div class="container" ref="containerRef">
    <template v-for="(message, index) in messages" v-bind:key="index">
      <UserMessage v-if="message.role === Role.user" v-bind:text="message.parts[0].text" />
      <ModelMessage v-else v-bind:text="message.parts[0].text" />
    </template>
  </div>
</template>

<style scoped>
.container {
  margin-bottom: 12px;
  overflow: scroll;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }
}

.message {
  font-size: 1rem;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
