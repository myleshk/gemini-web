import type { MessagePart } from "@/models/MessagePart"
import type { Role } from "@/models/Role"

interface UsageMetadata {
    promptTokenCount: number,
    candidatesTokenCount: number,
    totalTokenCount: number,
    promptTokensDetails: {
        modality: string,
        tokenCount: number
    }[],
    thoughtsTokenCount: number
};

export default interface GenerateContentResponse {
    candidates: {
        content: {
            parts: MessagePart[],
            role: Role
        },
        finishReason: string,
        index: number
    }[],
    usageMetadata: UsageMetadata,
    modelVersion: string,
    responseId: string
};