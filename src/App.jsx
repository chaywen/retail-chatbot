import React from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';

export default function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}
