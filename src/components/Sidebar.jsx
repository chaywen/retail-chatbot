import React, { useEffect, useState } from 'react';
import {
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import logo from '../assets/logo.svg';
import './sidebar.css';

export default function Sidebar() {
  const [recentChats, setRecentChats] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // ✅ 新增搜索状态

  useEffect(() => {
    const loadChats = () => {
      const stored = JSON.parse(localStorage.getItem("recentChats") || "[]");

      const sorted = Array.isArray(stored)
        ? [...stored].sort((a, b) => b.id - a.id)
        : [];

      console.log("📥 Sidebar loaded chats:", sorted);
      setRecentChats(sorted);
    };

    loadChats();
    window.addEventListener("recentChatsUpdated", loadChats);
    return () => window.removeEventListener("recentChatsUpdated", loadChats);
  }, []);

  const handleNewChat = () => {
    window.dispatchEvent(new Event("triggerNewChat"));
  };

  // ✅ 过滤 recentChats 根据搜索关键词
  const filteredChats = recentChats.filter((chat) => {
    const preview = chat?.messages?.[0]?.text || '';
    return preview.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="sidebar-container">
      {/* Logo */}
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>

      {/* Begin New Chat */}
      <button className="sidebar-button primary" onClick={handleNewChat}>
        <PlusIcon className="h-5 w-5 mr-2" />
        Begin a New Chat
      </button>

      {/* Search */}
      <div className="search-box">
        <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Categories */}
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

      {/* Recent Chats */}
      <div className="recent-section">
        <p className="category-title">Recent Chats</p>
        <ul className="recent-list">
          {filteredChats.length === 0 && (
            <li className="recent-item text-gray-400 italic">No matching chats</li>
          )}

          {filteredChats.map((chat) => {
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
