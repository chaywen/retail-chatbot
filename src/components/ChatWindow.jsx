import React, { useState } from 'react';
import './ChatWindow.css';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello 👋 Welcome to our store. What can we help you with today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
    // 模拟 bot 回复
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: 'Thanks for your message! We\'ll get back to you shortly.' }]);
    }, 1000);
  };

  return (
    <div className="chat-window">
      <div className="chat-header">Retail Chatbot</div>
      <div className="chat-body">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>{msg.text}</div>
        ))}
      </div>
      <div className="chat-footer">
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type your message..." />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;