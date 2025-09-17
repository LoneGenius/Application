"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();

    if (!input.trim()) return;

    const newMessage = { role: "user", content: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput("");
    setIsTyping(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: updatedMessages }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("API error:", errorText);
      setIsTyping(false);
      return;
    }

    const reader = res.body?.getReader();
    if (!reader) return;

    const decoder = new TextDecoder();
    let assistantReply = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split("\n").filter((line) => line.trim().startsWith("data:"));

      for (const line of lines) {
        const data = line.replace("data: ", "").trim();

        if (data === "[DONE]") {
          setIsTyping(false);
          break;
        }

        try {
          const json = JSON.parse(data);
          const delta = json.choices?.[0]?.delta?.content || "";
          assistantReply += delta;

          setMessages([
            ...updatedMessages,
            { role: "assistant", content: assistantReply },
          ]);
        } catch (err) {
          console.error("Could not parse stream chunk:", line, err);
        }
      }
    }
  }

  return (
    <main className="p-6 font-[Poppins] bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800 tracking-tight">
        🤖 Chat with AI-Ku
      </h1>

      {/* Chat Box */}
      <div className="border p-4 rounded-2xl mb-4 h-96 overflow-y-auto bg-white shadow-md">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className={`flex mb-3 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-[75%] shadow-md leading-relaxed text-sm md:text-base ${
                msg.role === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-100 text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.content}
            </div>
          </motion.div>
        ))}

        {/* Typing animation */}
        {isTyping && (
          <div className="flex items-center space-x-1 text-gray-500 ml-2 mt-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]"></span>
          </div>
        )}
      </div>

      {/* Input Box */}
      <form onSubmit={sendMessage} className="flex gap-2">
        <input
          className="flex-1 border px-4 py-3 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 outline-none 
                     text-gray-900 placeholder-gray-400 bg-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition text-white px-5 py-3 
                     rounded-xl shadow-md font-semibold"
        >
          Send
        </button>
      </form>
    </main>
  );
}
