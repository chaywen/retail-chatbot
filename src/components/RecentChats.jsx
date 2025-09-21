import { useEffect, useState } from "react";

export default function RecentChats() {
  const [recentChats, setRecentChats] = useState([]);

  useEffect(() => {
    const loadChats = () => {
      const stored = JSON.parse(localStorage.getItem("recentChats") || "[]");
      console.log("📥 Loaded recentChats:", stored);
      setRecentChats(Array.isArray(stored) ? [...stored] : []);
    };

    loadChats();
    window.addEventListener("recentChatsUpdated", loadChats);
    return () => window.removeEventListener("recentChatsUpdated", loadChats);
  }, []);

  return (
    <div className="p-4">
      <h4 className="text-md font-semibold mb-2 text-purple-600">Recent Chats</h4>

      {recentChats.length === 0 ? (
        <div className="text-xs text-gray-400 italic">No chats found</div>
      ) : (
        <div className="flex flex-col gap-2 text-sm text-gray-800">
          {recentChats.map((chat) => {
            const preview = chat?.messages?.[0]?.text || "No preview";
            const timestamp = new Date(chat.id).toLocaleString();

            return (
              <div key={chat.id} className="border p-2 rounded shadow-sm">
               

