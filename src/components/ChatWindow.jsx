import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.svg';
import { InputBox } from './InputBox';
import { MessageBubble } from './MessageBubble';

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: 'user',
      text: input,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
  };

  const handleNewChat = () => {
    if (messages.length === 0) {
      console.log("⚠️ No messages to save.");
      setMessages([]);
      setInput('');
      return;
    }

    const recent = JSON.parse(localStorage.getItem("recentChats") || "[]");
    const newEntry = {
      id: Date.now(),
      messages: messages.map((msg) => ({
        sender: msg.sender,
        text: msg.text,
        timestamp: msg.timestamp,
      })),
    };

    try {
      localStorage.setItem("recentChats", JSON.stringify([...recent, newEntry]));
      console.log("✅ Saved to localStorage:", [...recent, newEntry]);
      window.dispatchEvent(new Event("recentChatsUpdated"));
    } catch (e) {
      console.error("❌ Failed to save to localStorage:", e);
    }

    setMessages([]);
    setInput('');
    console.log("🔄 New chat triggered from Sidebar");
  };

  useEffect(() => {
    const clearChat = () => handleNewChat();
    window.addEventListener("triggerNewChat", clearChat);
    return () => window.removeEventListener("triggerNewChat", clearChat);
  }, []);

  useEffect(() => {
    const loadChat = (e) => {
      const chat = e.detail;
      if (Array.isArray(chat.messages)) {
        setMessages(chat.messages);
      }
    };

    window.addEventListener("loadChat", loadChat);
    return () => window.removeEventListener("loadChat", loadChat);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="relative flex flex-col flex-1 min-w-0 h-screen bg-gradient-to-br from-white via-purple-100 to-white overflow-hidden font-sans">
      {/* Radial layers */}
      <div className="radial-layer w-96 h-96 top-10 left-20 animate-[pulse-radial_8s_ease-in-out_infinite]"></div>
      <div className="radial-layer w-72 h-72 top-40 right-10 animate-[pulse-radial_10s_ease-in-out_infinite]"></div>
      <div className="radial-layer w-64 h-64 bottom-20 left-1/2 -translate-x-1/2 animate-[pulse-radial_12s_ease-in-out_infinite]"></div>

      {/* Welcome message */}
      {messages.length === 0 && (
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center space-y-3 px-4">
          <img src={logo} alt="LameBot Logo" className="h-8 w-auto" />
          <h1 className="text-base font-semibold text-purple-600">How can we assist you today?</h1>
          <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
            Get expert guidance powered by LameBot AI agents specializing in retail, sales, and negotiation.
            Choose the agent that suits your needs and start your conversation with ease.
          </p>
        </div>
      )}

      {/* Messages */}
      {messages.length > 0 && (
        <div
          ref={scrollRef}
          className="relative z-10 flex flex-col flex-1 px-4 py-6 space-y-4 overflow-y-auto"
        >
          {messages.map((msg, idx) => (
            <MessageBubble key={idx} msg={msg} />
          ))}
        </div>
      )}

      {/* Input */}
      <div className="relative z-10 mb-6 px-4">
        <InputBox value={input} onChange={setInput} onSend={sendMessage} />
      </div>
    </div>
  );
}
