
import React, { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import ChatMessage from "@/components/ChatMessage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

// Sample responses for the HandyHelper bot
const botResponses = [
  "I'd recommend starting with a primer coat before applying your main paint color. This helps with adhesion and coverage.",
  "For bathroom leaks, first check if the problem is with the supply lines or the drain. Turn off the water and inspect all connections.",
  "When installing ceiling fans, make sure to turn off power at the breaker box first. Safety is always the top priority!",
  "For squeaky floors, try sprinkling talcum powder between the floorboards to reduce friction.",
  "The best tools for beginners are: hammer, screwdriver set, adjustable wrench, and a good quality tape measure.",
  "When staining wood, always go with the grain and apply thin, even coats for the best results.",
  "Energy-efficient appliances might cost more upfront but save money in the long run through reduced utility bills.",
  "For a budget-friendly kitchen update, consider painting cabinets and replacing hardware instead of a full renovation.",
  "Before laying tile, make sure your subfloor is clean, dry, and level to prevent cracking later.",
  "When choosing paint finishes, remember that matte is good for hiding imperfections, while semi-gloss works well in high-moisture areas like kitchens and bathrooms."
];

const initialMessages: Message[] = [
  {
    id: "welcome",
    text: "Hi there! I'm HandyHelper, your DIY assistant. How can I help with your home improvement project today?",
    isUser: false,
  }
];

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      // Choose a random response from our predefined list
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        isUser: false,
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botMessage]);
      
      toast({
        title: "New message",
        description: "HandyHelper has responded to your question",
      });
    }, 1500); // 1.5 second delay to simulate thinking
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col bg-background">
        <div className="container mx-auto px-4 py-8 flex-1 flex flex-col max-w-3xl">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-wood-dark">Ask HandyHelper</h1>
            <p className="text-muted-foreground">Get instant help with your DIY home projects</p>
          </div>
          
          <div className="flex-1 overflow-auto rounded-lg border bg-muted/20 p-4 mb-4">
            <div className="flex flex-col">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.text}
                  isUser={message.isUser}
                />
              ))}
              {isTyping && <ChatMessage message="" isUser={false} isTyping />}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <Input
              placeholder="Type your home improvement question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={!inputValue.trim() || isTyping}>
              <Send size={18} />
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChatBot;
