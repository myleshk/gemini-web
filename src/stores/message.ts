import { defineStore } from 'pinia'
import type { Message } from '@/models/Message'
import { Role } from '@/models/Role';

const dummyData: Message[] = [
  {
    role: Role.user,
    parts: [
      {
        text: "I am a user\n\n"
      }
    ]
  },
  {
    parts: [
      {
        text: "Absolutely! It is completely and entirely **ok** for a married couple to not have children.\n\nHere's why:\n\n1.  **Personal Choice:** The decision to have children, or not to have children, is one of the most deeply personal choices a couple can make. It should be based on their desires, circumstances, and future plans, not on societal expectations or pressure.\n2.  **Marriage Redefined:** While historically marriage was often linked to procreation, modern understanding emphasizes companionship, love, mutual support, and partnership. A marriage can be full, rich, and meaningful without children.\n3.  **Diverse Reasons:** Couples may choose not to have children for a variety of valid reasons, including:\n    *   **Financial concerns:** Raising children is expensive.\n    *   **Career or lifestyle choices:** They may prioritize other passions, travel, or professional goals.\n    *   **Environmental concerns:** Some worry about their carbon footprint.\n    *   **Health issues:** One or both partners may have health conditions that make pregnancy or parenting difficult or risky.\n    *   **Personal preference:** They simply may not feel a desire to be parents.\n    *   **Overpopulation concerns.**\n    *   **Infertility:** Some couples may want children but are unable to conceive and choose not to pursue adoption or other paths to parenthood.\n4.  **No One Else's Business:** Ultimately, a couple's decision about building their family is theirs alone. It does not negatively impact anyone else and should be respected.\n5.  **Fulfillment Beyond Parenthood:** Couples can find immense fulfillment, joy, and purpose in their relationship, their careers, their hobbies, their community involvement, and many other aspects of life beyond raising children.\n\nIn summary, a marriage is defined by the two people in it and their shared commitment. Whether or not they choose to have children does not diminish the validity, strength, or happiness of their union."
      }
    ],
    role: Role.model
  },
  {
    parts: [
      {
        text: "Absolutely! It is completely and entirely **ok** for a married couple to not have children.\n\nHere's why:\n\n1.  **Personal Choice:** The decision to have children, or not to have children, is one of the most deeply personal choices a couple can make. It should be based on their desires, circumstances, and future plans, not on societal expectations or pressure.\n2.  **Marriage Redefined:** While historically marriage was often linked to procreation, modern understanding emphasizes companionship, love, mutual support, and partnership. A marriage can be full, rich, and meaningful without children.\n3.  **Diverse Reasons:** Couples may choose not to have children for a variety of valid reasons, including:\n    *   **Financial concerns:** Raising children is expensive.\n    *   **Career or lifestyle choices:** They may prioritize other passions, travel, or professional goals.\n    *   **Environmental concerns:** Some worry about their carbon footprint.\n    *   **Health issues:** One or both partners may have health conditions that make pregnancy or parenting difficult or risky.\n    *   **Personal preference:** They simply may not feel a desire to be parents.\n    *   **Overpopulation concerns.**\n    *   **Infertility:** Some couples may want children but are unable to conceive and choose not to pursue adoption or other paths to parenthood.\n4.  **No One Else's Business:** Ultimately, a couple's decision about building their family is theirs alone. It does not negatively impact anyone else and should be respected.\n5.  **Fulfillment Beyond Parenthood:** Couples can find immense fulfillment, joy, and purpose in their relationship, their careers, their hobbies, their community involvement, and many other aspects of life beyond raising children.\n\nIn summary, a marriage is defined by the two people in it and their shared commitment. Whether or not they choose to have children does not diminish the validity, strength, or happiness of their union."
      }
    ],
    role: Role.model
  },
  {
    parts: [
      {
        text: "Absolutely! It is completely and entirely **ok** for a married couple to not have children.\n\nHere's why:\n\n1.  **Personal Choice:** The decision to have children, or not to have children, is one of the most deeply personal choices a couple can make. It should be based on their desires, circumstances, and future plans, not on societal expectations or pressure.\n2.  **Marriage Redefined:** While historically marriage was often linked to procreation, modern understanding emphasizes companionship, love, mutual support, and partnership. A marriage can be full, rich, and meaningful without children.\n3.  **Diverse Reasons:** Couples may choose not to have children for a variety of valid reasons, including:\n    *   **Financial concerns:** Raising children is expensive.\n    *   **Career or lifestyle choices:** They may prioritize other passions, travel, or professional goals.\n    *   **Environmental concerns:** Some worry about their carbon footprint.\n    *   **Health issues:** One or both partners may have health conditions that make pregnancy or parenting difficult or risky.\n    *   **Personal preference:** They simply may not feel a desire to be parents.\n    *   **Overpopulation concerns.**\n    *   **Infertility:** Some couples may want children but are unable to conceive and choose not to pursue adoption or other paths to parenthood.\n4.  **No One Else's Business:** Ultimately, a couple's decision about building their family is theirs alone. It does not negatively impact anyone else and should be respected.\n5.  **Fulfillment Beyond Parenthood:** Couples can find immense fulfillment, joy, and purpose in their relationship, their careers, their hobbies, their community involvement, and many other aspects of life beyond raising children.\n\nIn summary, a marriage is defined by the two people in it and their shared commitment. Whether or not they choose to have children does not diminish the validity, strength, or happiness of their union."
      }
    ],
    role: Role.model
  }
];

export const useMessageStore = defineStore('message', {
  state: () => ({
    messages: dummyData
  }),
  actions: {
    add(message: Message) {
      this.messages.push(message);
    }
  }
  // const messagesRef: Ref<Array<Message>> = ref(dummyData);
  // function addMessage(message: Message) {
  //   messagesRef.value.push(message)
  // }

  // return { messagesRef, addMessage }
})
