import React from 'react';
import logo from '../assets/logo.svg';

export default function Sidebar() {
  return (
    <div className="w-1/4 bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white p-4 flex flex-col justify-between h-screen">
      <div>
        {/* Logo */}
        <img src={logo} alt="LameBot Logo" className="h-12 w-auto mb-4" />

        {/* Begin Chat + Search */}
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg mb-4 flex items-center justify-center">
          ➕ Begin a New Chat
        </button>
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-700 text-white placeholder-gray-400 px-3 py-2 rounded-lg mb-6 outline-none"
        />

        {/* Category */}
        <h2 className="text-lg font-semibold mb-2">Category</h2>
        {['General', 'Sales', 'Negotiation', 'Marketing'].map((cat) => (
          <button
            key={cat}
            className="w-full bg-gray-800 hover:bg-purple-600 transition-colors text-white py-2 px-4 rounded-lg mb-2 flex items-center justify-between"
          >
            <span>{cat}</span>
            <span className="text-gray-400">•••</span>
          </button>
        ))}

        {/* Recent Chats */}
        <h2 className="text-lg font-semibold mt-6 mb-2">Recent Chats</h2>
        <ul className="space-y-2">
          {['How can I increase the num...', 'What’s the best approach t...'].map((chat, idx) => (
            <li key={idx} className="bg-gray-800 hover:bg-gray-700 p-2 rounded cursor-pointer">
              {chat}
            </li>
          ))}
        </ul>
      </div>

      {/* User Profile */}
      <button className="mt-6 flex items-center text-gray-400 hover:text-white">
        ⚙️ User Profile
      </button>
    </div>
  );
}
