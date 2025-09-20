import React from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';

function App() {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen bg-gray-100">
      {/* Sidebar for desktop, collapsible or hidden on mobile */}
      <Sidebar />

      {/* Main chat area */}
      <ChatWindow />
    </div>
  );
}

export default App;
