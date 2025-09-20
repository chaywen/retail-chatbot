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

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-20 right-4 w-full max-w-sm h-[80vh] bg-white shadow-lg rounded-lg p-4 overflow-y-auto z-50">
      <h3 className="text-lg font-semibold mb-2 text-purple-600">Retail Chatbot</h3>

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
