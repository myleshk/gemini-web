import { Role } from "./Role";
import type { MessagePart } from "./MessagePart";

export interface Message {

    role: Role;

    parts: MessagePart[];


}