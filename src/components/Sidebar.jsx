import React from 'react';
import logo from '../assets/logo.svg';
import { Cog6ToothIcon, FolderIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  return (
    <div className="w-1/4 bg-gradient-to-b from-black via-zinc-900 to-purple-900 text-white p-4 flex flex-col justify-between h-screen font-sans">
      <div>
        <img src={logo} alt="LameBot Logo" className="h-10 w-auto mb-4" />

        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-xl mb-4 text-sm font-medium tracking-wide transition-all shadow-md">
          + Begin a New Chat
        </button>

        <input
          type="text"
          placeholder="Search"
          className="w-full bg-black/30 text-white placeholder-gray-400 px-3 py-2 rounded-xl mb-6 outline-none text-sm backdrop-blur-md shadow-inner"
        />

        <h2 className="text-sm font-semibold mb-2 tracking-wide text-gray-300">Category</h2>
        {['General', 'Sales', 'Negotiation', 'Marketing'].map((cat) => (
          <button
            key={cat}
            className="w-full bg-black/20 hover:bg-purple-600 transition-all text-white py-2 px-4 rounded-xl mb-2 flex items-center justify-between text-sm shadow-sm"
          >
            <div className="flex items-center space-x-2">
              <FolderIcon className="h-4 w-4 text-gray-300" />
              <span>{cat}</span>
            </div>
            <span className="text-gray-400">•••</span>
          </button>
        ))}

        <h2 className="text-sm font-semibold mt-6 mb-2 tracking-wide text-gray-300">Recent Chats</h2>
        <ul className="space-y-2">
          {['How can I increase the run...', 'What’s the best approach t...', 'What’s the best approach t...'].map((chat, idx) => (
            <li key={idx} className="bg-black/20 hover:bg-purple-700 p-2 rounded-xl cursor-pointer transition-all text-sm flex items-center space-x-2">
              <ChatBubbleLeftRightIcon className="h-4 w-4 text-gray-300" />
              <span>{chat}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-6 flex items-center text-gray-400 hover:text-white transition-all text-sm">
        <Cog6ToothIcon className="h-4 w-4 mr-2" />
        User Profile
      </button>
    </div>
  );
}
