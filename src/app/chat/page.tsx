'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });

  const [input, setInput] = useState('');

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Poppins', sans-serif" }}> {/* Header */} <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 shadow-lg mb-10"> <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-extrabold leading-snug bg-gradient-to-r from-yellow-300 via-pink-400 to-red-500 bg-clip-text text-transparent"
          >
            AI-Ku Chatbot
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-lg text-white/95 max-w-3xl mx-auto"
          >
            Your friendly reskilling companion — explore new skills, discover AI tools, and stay employable in the future of work.
          </motion.p>
        </div>
      </section>

      {/* DISCLAIMER SECTION */}
      <div className="max-w-4xl mx-auto px-6 mb-10 text-center bg-indigo-50 p-6 rounded-lg shadow-lg">
        <p className="text-gray-700 text-lg">
          This chatbot helps recommend reskilling ideas and tools to improve your career. Use it as an advisor, not a replacement for professional career advice. Type your question for personalized recommendations on career paths, skill development, or industry trends.
        </p>
      </div>

      {/* CHATBOX SECTION */}
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-gray-200">
        <div className="flex-1 p-6 space-y-4 overflow-y-auto h-[500px]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`px-4 py-2 rounded-2xl max-w-xs ${
                  message.role === 'user'
                    ? 'bg-yellow-300 text-gray-800 rounded-br-none'
                    : 'bg-gray-100 text-gray-900 rounded-bl-none'
                }`}
              >
                {message.parts.map((part, index) =>
                  part.type === 'text' ? (
                    <span key={index}>{part.text}</span>
                  ) : null
                )}
              </div>
            </div>
          ))}
        </div>

        {/* INPUT BOX */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) {
              sendMessage({ text: input });
              setInput('');
            }
          }}
          className="flex border-t border-gray-200 items-center p-4"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={status !== 'ready'}
            placeholder="Type your message..."
            className="flex-1 p-4 outline-none text-gray-700 rounded-md"
          />
          <button
            type="submit"
            disabled={status !== 'ready'}
            className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
