import { cn } from "@/lib/utils";
import { IconOpenAI, IconUser } from "@/components/icons";
import type { Message } from "ai/react";

export function ChatMessage({ message }: { message: Message }) {
  return (
    <div className={cn("group relative mb-4 flex items-start")}>
      <div
        className={cn(
          "flex  select-none rounded-md border shadow mt-1",
          message.role === "user"
            ? "bg-background"
            : "bg-primary text-primary-foreground"
        )}
      >
        {message.role === "user" ? <IconUser /> : <IconOpenAI />}
      </div>

      <p className="text-base mx-2">{message.content}</p>
    </div>
  );
}
