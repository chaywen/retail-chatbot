import { useState } from "react";
import Draggable from "react-draggable";
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';

function App() {
  const [showChatUI, setShowChatUI] = useState(false);

  return (
    <div className="w-screen h-screen bg-gray-100">
      {/* 💬 Draggable Floating Button */}
      <Draggable>
        <button
          onClick={() => setShowChatUI(!showChatUI)}
          className="fixed bottom-4 right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg z-[9999]"
        >
          💬
        </button>
      </Draggable>

      {/* 🧠 Full Chat UI */}
      {showChatUI && (
        <div className="fixed inset-0 flex flex-col md:flex-row bg-white z-[9998]">
          <Sidebar />
          <ChatWindow />
        </div>
      )}
    </div>
  );
}

export default App;
