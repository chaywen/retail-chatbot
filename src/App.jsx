const API_URL = "https://nfhuqnv2h6.execute-api.us-east-1.amazonaws.com";
import { useState } from "react";
import Draggable from "react-draggable";
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';

function App() {
  const [showChatUI, setShowChatUI] = useState(false);

  return (
    <div className="relative w-screen h-screen bg-gray-100 overflow-hidden">
      {/* 💬 Draggable Floating Button */}
      <Draggable bounds="parent">
        <div className="fixed bottom-4 right-4 z-[9999]">
          <button
            onClick={() => setShowChatUI(!showChatUI)}
            className="bg-purple-600 text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition"
          >
            💬
          </button>
        </div>
      </Draggable>

      {/* 🧠 Full Chat UI */}
      {showChatUI && (
        <div className="fixed inset-0 z-[9998] flex flex-col md:flex-row bg-white shadow-xl">
          <Sidebar />
          <ChatWindow />
        </div>
      )}
    </div>
  );
}

export default App;
export const API_URL = "https://nfhuqnv2h6.execute-api.us-east-1.amazonaws.com";
