'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ChatPage() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { role: 'user', content: input };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!res.ok) throw new Error(await res.text());

      const reader = res.body?.getReader();
      if (!reader) return;

      const decoder = new TextDecoder();
      let assistantReply = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n').filter((line) => line.trim().startsWith('data:'));

        for (const line of lines) {
          const data = line.replace('data: ', '').trim();
          if (data === '[DONE]') {
            setIsTyping(false);
            break;
          }
          try {
            const json = JSON.parse(data);
            const delta = json.choices?.[0]?.delta?.content || '';
            assistantReply += delta;
            setMessages([...updatedMessages, { role: 'assistant', content: assistantReply }]);
          } catch {}
        }
      }
    } catch (err) {
      console.error(err);
      setIsTyping(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-6 font-[Poppins]">
      {/* Header */}
      <section className="max-w-3xl mx-auto text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500"
        >
          🤖 AI-Ku Chatbot
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
        >
          Your friendly reskilling companion. Type your question clearly or select a topic, such as career paths, skill development, or industry trends, to get personalized advice.
        </motion.p>
      </section>

      {/* Chat Box */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 mb-4">
        <div className="flex-1 p-6 overflow-y-auto h-[500px] space-y-4">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-[75%] shadow-md text-sm md:text-base leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                }`}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <div className="flex items-center space-x-1 ml-2 mt-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
            </div>
          )}
        </div>

        {/* Input Box */}
        <form onSubmit={sendMessage} className="flex gap-2 p-4 border-t border-gray-200">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-4 rounded-xl shadow-sm border focus:ring-2 focus:ring-blue-400 outline-none text-gray-900"
          />
          <button
            type="submit"
            disabled={isTyping}
            className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-5 py-3 rounded-xl shadow-md font-semibold transition"
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
