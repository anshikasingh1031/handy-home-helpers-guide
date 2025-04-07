
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  isTyping?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, isTyping = false }) => {
  return (
    <div className={cn(
      "flex w-full gap-3 mb-4",
      isUser ? "flex-row-reverse" : "flex-row"
    )}>
      <Avatar className="h-8 w-8 shrink-0">
        {isUser ? (
          <>
            <AvatarImage src="" />
            <AvatarFallback className="bg-primary text-primary-foreground">
              <User size={16} />
            </AvatarFallback>
          </>
        ) : (
          <>
            <AvatarImage src="" />
            <AvatarFallback className="bg-accent1 text-primary-foreground">
              <Bot size={16} />
            </AvatarFallback>
          </>
        )}
      </Avatar>
      <div className={cn(
        "rounded-lg p-3 max-w-[80%]",
        isUser ? "bg-primary text-primary-foreground" : "bg-muted",
      )}>
        {isTyping ? (
          <div className="flex space-x-1 items-center h-6">
            <div className="w-2 h-2 rounded-full bg-current animate-pulse" style={{ animationDelay: "0ms" }}></div>
            <div className="w-2 h-2 rounded-full bg-current animate-pulse" style={{ animationDelay: "300ms" }}></div>
            <div className="w-2 h-2 rounded-full bg-current animate-pulse" style={{ animationDelay: "600ms" }}></div>
          </div>
        ) : (
          <p className="text-sm whitespace-pre-wrap">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
