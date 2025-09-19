import React from 'react';

export default function MessageBubble({ sender, text }) {
  const isUser = sender === 'user';
  return (
    <div className={`p-3 rounded max-w-md ${isUser ? 'bg-blue-100 self-end' : 'bg-gray-200 self-start'}`}>
      {text}
    </div>
  );
}
