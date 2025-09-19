import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-1/4 bg-white border-r p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Message History</h2>
      <ul className="space-y-2">
        <li className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">Chat with Alice</li>
        <li className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">Order Inquiry</li>
        <li className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">Support Ticket #123</li>
      </ul>
    </div>
  );
}
