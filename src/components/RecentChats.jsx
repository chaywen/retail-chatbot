import { useEffect, useState } from "react";

export default function RecentChats() {
  const [recentChats, setRecentChats] = useState([]);

  useEffect(() => {
    const loadChats = () => {
      const stored = JSON.parse(localStorage.getItem("recentChats") || "[]");
      setRecentChats(stored);
    };

    loadChats(); // 初始加载

    window.addEventListener("recentChatsUpdated", loadChats); // 监听事件
    return () => window.removeEventListener("recentChatsUpdated", loadChats); // 清理监听
  }, []);

  return (
    <div className="p-4">
      <h4 className="text-md font-semibold mb-2 text-purple-600">Recent Chats</h4>
      <div className="flex flex-col gap-2 text-sm text-gray-800">
        {recentChats.map((chat) => (
          <div key={chat.id} className="border p-2 rounded shadow-sm">
            <div className="font-bold text-xs text-gray-500 mb-1">
              {new Date(chat.id).toLocaleString()}
            </div>
            <div className="text-xs text-gray-700">
              {chat.messages[0]?.text?.slice(0, 40) || "No preview"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

