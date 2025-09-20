import React from 'react';
import logo from '../assets/logo.svg';
import { ChatBubbleLeftRightIcon, MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>

      <button className="sidebar-button primary">
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
          <li className="recent-item">How can I increase the num...</li>
          <li className="recent-item">What's the best approach t...</li>
        </ul>
      </div>
    </div>
  );
}
