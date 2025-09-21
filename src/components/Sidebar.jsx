import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import {
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import './sidebar.css';

export default function Sidebar() {
  const [recentChats, setRecentChats] = useState([]);

  useEffect(() => {
    const loadChats = () => {
      const stored = JSON.parse(localStorage.getItem("recentChats") || "[]");
      console.log("📥 Sidebar loaded chats:", stored);
      setRecentChats(Array.isArray(stored) ? [...stored] : []);
    };

    loadChats();
    window.addEventListener("recentChatsUpdated", loadChats);
    return () => window.removeEventListener("recentChatsUpdated", loadChats);
  }, []);

  const handleNewChat = () => {
    window.dispatchEvent(new Event("triggerNewChat"));
  };

  return (
    <div className="sidebar-container">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>

      <button className="sidebar-button primary" onClick={handleNewChat}>
        <PlusIcon className="h-5 w-5 mr-2" />
        Begin a New Chat
      </button>

      <div className="search-box">
        <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      <div className="category-section">
        <p className="category-title">Categories</p>
        <ul className="category-list">
          {['General', 'Sales', 'Negotiation', 'Marketing'].map((cat) => (
            <li key={cat} className="category-item">
              <ChatBubbleLeftRightIcon className="h-4 w-4 mr-2" />
              {cat}
            </li>
          ))}
        </ul>
      </div>

      <div className="recent-section">
        <p className="category-title">Recent Chats</p>
        <ul className="recent-list">
          {recentChats.length === 0 && (
            <li className="recent-item text-gray-400 italic">No chats yet</li>
          )}

          {recentChats.map((chat) => {
            const preview = chat?.messages?.[0]?.text || "New chat";
            const timestamp = chat?.messages?.at(-1)?.timestamp || "";
            return (
              <li
                key={chat.id}
                className="recent-item cursor-pointer flex justify-between items-center"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent("loadChat", { detail: chat }));
                }}
              >
                <span>{preview.slice(0, 40)}</span>
                <span className="text-xs text-gray-400 ml-2">{timestamp}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
