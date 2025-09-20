import { useState } from "react";
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import ChatWidget from './components/ChatWidget';

function App() {
  const [showApp, setShowApp] = useState(false);

  return (
    <div className="w-screen h-screen bg-gray-100">
      {/* Floating Button (always visible) */}
      <button
        onClick={() => setShowApp(!showApp)}
        className="fixed bottom-4 right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg z-50"
      >
        💬
      </button>

      {/* Full Chat App (conditionally rendered) */}
      {showApp && (
        <div className="flex flex-col md:flex-row w-full h-full">
          <Sidebar />
          <ChatWindow />
          <ChatWidget />
        </div>
      )}
    </div>
  );
}

export default App;
