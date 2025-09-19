import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-1/4 bg-white border-r p-4 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-6">LameBot</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Category</h2>
        <ul className="space-y-1">
          {['General', 'Sales', 'Negotiation', 'Marketing'].map((cat) => (
            <li key={cat} className="cursor-pointer hover:underline">{cat}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Recent Chats</h2>
        <ul className="space-y-2">
          <li className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">How can I increase the number of sales?</li>
          <li className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">What's the best approach to negotiation?</li>
        </ul>
      </div>
    </div>
  );
}
