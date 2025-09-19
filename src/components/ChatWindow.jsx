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

      {/* 输入框 */}
      <div className="flex mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-l px-3 py-2"
          placeholder="Type your question here"
        />
        <button
          onClick={sendMessage}
          className="bg-purple-600 text-white px-4 py-2 rounded-r hover:bg-purple-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
