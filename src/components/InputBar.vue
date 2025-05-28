<script setup lang="ts">
import { Role } from '@/models/Role';
import { useMessageStore } from '@/stores/message';

const inputModel = defineModel({ type: String })
const messageStore = useMessageStore();

function send() {
    const text = inputModel.value ?? "";

    messageStore.add({
        role: Role.user,
        parts: [
            { text: text }
        ]
    })
    inputModel.value = ""
}
</script>
<template>
    <div class="container">
        <textarea v-model="inputModel" type="text" placeholder="Type your message..." class="input" />
        <button :class="inputModel ? '' : 'disabled'" :disabled="!inputModel" @click="send"
            class="send-btn">Send</button>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    border-radius: 12px;
    border: 1px solid #5E5E5E;

    textarea {
        border-radius: 12px;
        background-color: transparent;
        border: none;
        font-size: 1rem;
        min-height: 100px;
        padding: 12px;
        width: 100%;
        color: white;
    }
}

.send-btn {
    margin-right: 0;
    margin-left: auto;
    background-color: black;
    border: none;
    color: white;
    text-transform: uppercase;
    font-size: 1rem;
    cursor: pointer;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;

    &.disabled {
        background-color: #5E5E5E;
    }
}
</style>