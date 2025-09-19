import React, { useState } from 'react';
import MessageBubble from './MessageBubble';

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'How can we assist you today?' },
    { sender: 'user', text: 'What is the price of iPhone 17 Pro?' },
    { sender: 'bot', text: 'The iPhone 17 Pro starts at RM 5,499 for 256GB.' },
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
  };

  return (
    <div className="flex flex-col flex-1 p-4">
      <div className="flex-1 overflow-y-auto space-y-2 mb-4">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-l px-3 py-2"
          placeholder="Type your question here"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
