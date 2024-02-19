"use client";
import { ChatRequestOptions, CreateMessage, type Message } from "ai";

import { ChatMessage } from "@/components/ChatMessage";
import { useState } from "react";

export interface ChatList {
  messages: Message[];
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions | undefined
  ) => Promise<string | null | undefined>;
}

export function ChatList({ messages, append }: ChatList) {
  const [isAppended, setIsAppended] = useState(false);
  if (!messages.length) {
    return null;
  }

  async function appendMessage() {
    await append({
      role: "system",
      content: "Generating image...",
    });
  }

  return (
    <div className="relative px-[11px] ">
      {messages.map((message, index) => {
        if (message.content.endsWith("}") && !isAppended) {
          appendMessage();
          setIsAppended(true);
        }
        if (message.role === "data" || message.content.startsWith("{")) {
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
