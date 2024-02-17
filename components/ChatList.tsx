import { type Message } from "ai";

// import { Separator } from '@/components/ui/separator'
import { ChatMessage } from "@/components/ChatMessage";

export interface ChatList {
  messages: Message[];
  screenshot: string;
  isLoading: boolean;
}

export function ChatList({ messages, screenshot, isLoading }: ChatList) {
  if (!messages.length) {
    return null;
  }

  return (
    <div className="relative px-[11px] ">
      {messages.map((message, index) => {
        if (message.role === "data") {
          return null;
        }

        return (
          <div key={index} className="">
            <ChatMessage message={message} />
          </div>
        );
      })}
    </div>
  );
}
