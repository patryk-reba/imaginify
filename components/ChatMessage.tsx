import { cn } from "@/lib/utils";
import { IconOpenAI, IconUser } from "@/components/icons";

export function ChatMessage({ message, ...props }) {
  console.debug("ChatMessage", message);
  return (
    <div className={cn("group relative mb-4 flex items-start")} {...props}>
      <div
        className={cn(
          "flex  select-none rounded-md border shadow",
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
