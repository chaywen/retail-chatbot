import React from 'react';
import logo from '../assets/logo.svg';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  return (
    <div className="w-1/4 bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white p-4 flex flex-col justify-between h-screen font-sans">
      <div>
        {/* Logo */}
        <img src={logo} alt="LameBot Logo" className="h-12 w-auto mb-4" />

        {/* Begin Chat */}
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-xl mb-4 flex items-center justify-center transition-all">
          ➕ Begin a New Chat
        </button>

        {/* Search */}
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-700 text-white placeholder-gray-400 px-3 py-2 rounded-xl mb-6 outline-none"
        />

        {/* Category */}
        <h2 className="text-sm font-semibold mb-2 tracking-wide text-gray-300">Category</h2>
        {['General', 'Sales', 'Negotiation', 'Marketing'].map((cat) => (
          <button
            key={cat}
            className="w-full bg-gray-800 hover:bg-purple-600 transition-all text-white py-2 px-4 rounded-xl mb-2 flex items-center justify-between"
          >
            <span>{cat}</span>
            <span className="text-gray-400">•••</span>
          </button>
        ))}

        {/* Recent Chats */}
        <h2 className="text-sm font-semibold mt-6 mb-2 tracking-wide text-gray-300">Recent Chats</h2>
        <ul className="space-y-2">
          {['How can I increase the num...', 'What’s the best approach t...'].map((chat, idx) => (
            <li key={idx} className="bg-gray-800 hover:bg-gray-700 p-2 rounded-xl cursor-pointer transition-all">
              {chat}
            </li>
          ))}
        </ul>
      </div>

      {/* User Profile */}
      <button className="mt-6 flex items-center text-gray-400 hover:text-white transition-all">
        <Cog6ToothIcon className="h-5 w-5 mr-2" />
        User Profile
      </button>
    </div>
  );
}
