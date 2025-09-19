import React, { useState } from 'react';
import MessageBubble from './MessageBubble';
import { PaperClipIcon, MicrophoneIcon } from '@heroicons/react/24/outline';

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'The iPhone 14 Pro starts at RM 5,299 for 128GB.' },
    { sender: 'user', text: 'What is the price of iPhone 14 Pro?' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
  };

  return (
    <div className="flex flex-col flex-1 p-6 bg-white font-sans">
      {/* 顶部标签 */}
      <div className="self-center mb-4 bg-purple-100 text-purple-800 px-6 py-2 rounded-full font-semibold shadow-md text-sm tracking-wide">
        General
      </div>

      {/* 聊天内容 */}
      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} sender={msg.sender} text={msg.text} />
        ))}
      </div>

      {/* 输入区 */}
      <div className="flex items-center mt-4 bg-black/30 rounded-full px-4 py-2 backdrop-blur-md shadow-inner border border-gray-700">
        <PaperClipIcon className="h-5 w-5 text-gray-300 hover:text-white mr-3 cursor-pointer" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-sm"
          placeholder="Type your question here"
        />
        <MicrophoneIcon className="h-5 w-5 text-gray-300 hover:text-white mx-3 cursor-pointer" />
        <button
          onClick={sendMessage}
          className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-all shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
