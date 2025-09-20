import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import ChatWidget from './components/ChatWidget';

function App() {
  const [showWidget, setShowWidget] = useState(false);

  return (
    <div className="relative flex flex-col md:flex-row w-screen h-screen bg-gray-100">
      {/* Sidebar for desktop */}
      <Sidebar />

      {/* Main chat area */}
      <ChatWindow />

      {/* Floating chat button */}
      <button
        onClick={() => setShowWidget(!showWidget)}
        className="fixed bottom-4 right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg z-50"
      >
        💬
      </button>

      {/* Floating chat widget */}
      {showWidget && <ChatWidget />}
    </div>
  );
}

export default App;
