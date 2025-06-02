import type { MessagePart } from "@/models/MessagePart";

export default interface GenerateContentRequest {
    contents: {
        parts: MessagePart[];
    }[]
}