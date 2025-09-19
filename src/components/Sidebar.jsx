import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-1/4 bg-black text-white p-4 flex flex-col justify-between h-screen">
      <div>
        <h1 className="text-2xl font-bold mb-6">LameBot</h1>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Category</h2>
          <button className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded mb-2">
            General
          </button>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Recent Chats</h2>
          <ul className="space-y-2">
            {['What is the price of iPhone 14 Pro?', 'How to increase sales?', 'Best negotiation tips'].map((chat, idx) => (
              <li key={idx} className="bg-gray-800 hover:bg-gray-700 p-2 rounded cursor-pointer">
                {chat}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 text-sm text-gray-400">User Profile</div>
    </div>
  );
}
