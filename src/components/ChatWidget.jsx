import { useState } from "react";
import { sendMessage } from "../utils/api";

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    const reply = await sendMessage(input);
    setMessages([...messages, { user: input }, { bot: reply.text }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-20 right-4 bg-white shadow-lg rounded-lg w-full max-w-sm h-[80vh] p-4 overflow-y-auto z-50">
      <div className="mb-2 font-bold text-purple-600">Retail Chatbot</div>
      <div className="flex flex-col gap-2">
        {messages.map((msg, i) => (
          <div key={i} className={`text-sm ${msg.user ? "text-right" : "text-left"}`}>
            {msg.user || msg.bot}
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border rounded-l px-2 py-1"
        />
        <button onClick={handleSend} className="bg-purple-600 text-white px-3 rounded-r">
          ➤
        </button>
      </div>
    </div>
  );
}
