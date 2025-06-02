import { defineStore } from 'pinia'
import type { Message } from '@/models/Message'
import { Role } from '@/models/Role';
import { api } from '@/api';


interface MessageState {
  messages: Message[];
}

export const useMessageStore = defineStore('message', {
  state: (): MessageState => ({
    messages: []
  }),
  actions: {
    add(message: Message) {
      this.messages.push(message);
    },
    async userInput(text: string) {
      const message: Message = {
        role: Role.user,
        parts: [{ text }]
      };
      this.add(message);

      try {
        const response = await api.generateContent({
          contents: this.messages
        });
        const newModelMessage = response.candidates[0].content;
        this.add(newModelMessage);

      } catch (error) {
        console.error(error)
        // let the form component display the error
        return error
      }

    }
  }
})
