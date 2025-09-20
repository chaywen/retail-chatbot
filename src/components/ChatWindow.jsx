import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.svg';
import { InputBox } from './InputBox';

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = {
      sender: 'user',
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMessage]);
    setInput('');
  };

  // ✅ 自动滚动到底部
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="relative flex flex-col flex-1 min-w-0 h-screen bg-gradient-to-b from-black via-purple-900 to-black overflow-hidden font-sans">
      {/* Radial layers */}
      <div className="radial-layer w-96 h-96 top-10 left-20 animate-[pulse-radial_8s_ease-in-out_infinite]"></div>
      <div className="radial-layer w-72 h-72 top-40 right-10 animate-[pulse-radial_10s_ease-in-out_infinite]"></div>
      <div className="radial-layer w-64 h-64 bottom-20 left-1/2 -translate-x-1/2 animate-[pulse-radial_12s_ease-in-out_infinite]"></div>

      {/* Welcome message */}
      {messages.length === 0 && (
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center space-y-3 px-4">
          <img src={logo} alt="LameBot Logo" className="h-8 w-auto" />
          <h1 className="text-base font-semibold text-purple-300">How can we assist you today?</h1>
          <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
            Get expert guidance powered by LameBot AI agents specializing in retail, sales, and negotiation.
            Choose the agent that suits your needs and start your conversation with ease.
          </p>
        </div>
      )}

      {/* Message bubbles */}
      {messages.length > 0 && (
        <div
          ref={scrollRef}
          className="relative z-10 flex flex-col flex-1 px-4 py-6 space-y-4 overflow-y-auto"
        >
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-end space-x-2 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                  msg.sender === 'user' ? 'bg-gray-500' : 'bg-purple-500'
                }`}>
                  {msg.sender === 'user' ? 'U' : 'A'}
                </div>
                <div className={`max-w-xs px-4 py-2 rounded-xl shadow-md text-sm ${
                  msg.sender === 'user' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-800'
                }`}>
                  <div>{msg.text}</div>
                  <div className="text-[10px] text-gray-400 mt-1 text-right">{msg.timestamp}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ✅ Optimized InputBox with spacing */}
      <div className="relative z-10 mb-6 px-4">
        <InputBox
          value={input}
          onChange={setInput}
          onSend={sendMessage}
        />
      </div>
    </div>
  );
}
