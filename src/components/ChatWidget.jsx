import { useState, useEffect, useRef } from "react";
import { sendMessage } from "../utils/api";

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const reply = await sendMessage(input);
    setMessages([...messages, { user: input }, { bot: reply.text }]);
    setInput("");
    setLoading(false);
  };

  const handleNewChat = () => {
    if (messages.length > 0) {
      const recent = JSON.parse(localStorage.getItem("recentChats") || "[]");
      const newEntry = {
        id: Date.now(),
        messages: messages.map((msg) => ({
          sender: msg.user ? "user" : "bot",
          text: msg.user || msg.bot,
          timestamp: new Date().toLocaleTimeString(),
        })),
      };
      localStorage.setItem("recentChats", JSON.stringify([...recent, newEntry]));
      window.dispatchEvent(new Event("recentChatsUpdated"));
    }

    setMessages([]);
    setInput("");
    console.log("🔄 New chat triggered from Sidebar");
  };

  // ✅ 正确监听 Sidebar 发出的 triggerNewChat 事件（只注册一次）
  useEffect(() => {
    const clearChat = () => handleNewChat();
    window.addEventListener("triggerNewChat", clearChat);
    return () => window.removeEventListener("triggerNewChat", clearChat);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-20 right-4 w-full max-w-sm h-[80vh] bg-white shadow-lg rounded-lg p-4 overflow-y-auto z-50">
      <h3 className="text-lg font-semibold mb-2 text-purple-600">Retail Chatbot</h3>

      <button
        onClick={handleNewChat}
        className="text-xs text-purple-600 underline mb-2"
      >
        Begin a new chat
      </button>

      <div className="flex flex-col gap-2 text-sm text-gray-800">
        {messages.map((msg, i) => (
          <div key={i} className={msg.user ? "text-right" : "text-left"}>
            {msg.user || msg.bot}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="mt-4 flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-l px-2 py-1"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-purple-600 text-white px-3 rounded-r"
        >
          {loading ? "..." : "➤"}
        </button>
      </div>
    </div>
  );
}
