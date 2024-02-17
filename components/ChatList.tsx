import { type Message } from "ai";

import { ChatMessage } from "@/components/ChatMessage";

export interface ChatList {
  messages: Message[];
}

export function ChatList({ messages }: ChatList) {
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
