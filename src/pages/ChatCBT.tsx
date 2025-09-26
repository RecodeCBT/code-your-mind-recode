// src/pages/ChatCBT.tsx
import ChatInterface from "@/components/ChatInterface"; // make sure this path matches exactly
import Navigation from "@/components/Navigation";

export default function ChatCBT() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navigation />
      <ChatInterface />
    </div>
  );
}
