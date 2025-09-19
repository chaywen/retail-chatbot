import React, { useState } from 'react';
import MessageBubble from './MessageBubble';

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
    <div className="flex flex-col flex-1 p-6 bg-white">
      {/* 顶部标签 */}
      <div className="self-center mb-4 bg-purple-100 text-purple-800 px-6 py-2 rounded-full font-semibold">
        General
      </div>

      {/* 聊天内容 */}
      <div className="flex-1 overflow-y-auto space-y-4">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} sender={msg.sender} text={msg.text} />
        ))}
      </div>

      {/* 输入区 */}
      <div className="flex items-center mt-4 bg-black/30 rounded-full px-4 py-2 backdrop-blur-md">
        <button className="text-gray-300 hover:text-white mr-3">📎</button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
          placeholder="type your Question Here"
        />
        <button className="text-gray-300 hover:text-white mx-3">🎤</button>
        <button
          onClick={sendMessage}
          className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full"
        >
          ➡️
        </button>
      </div>
    </div>
  );
}
