import { useState } from "react";
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';

function App() {
  const [showChatUI, setShowChatUI] = useState(false);

  return (
    <div className="w-screen h-screen bg-gray-100">
      {/* 💬 Floating Button */}
      <button
        onClick={() => setShowChatUI(!showChatUI)}
        className="fixed bottom-4 right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg z-50"
      >
        💬
      </button>

      {/* 🧠 Chat Interface (only appears after button is clicked) */}
      {showChatUI && (
        <div className="flex flex-col md:flex-row w-full h-full">
          <Sidebar />
          <ChatWindow />
        </div>
      )}
    </div>
  );
}

export default App;
