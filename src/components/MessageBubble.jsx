import React from 'react';

export default function MessageBubble({ sender, text }) {
  const isUser = sender === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`p-3 rounded-lg max-w-md ${isUser ? 'bg-purple-200 text-right' : 'bg-gray-200 text-left'}`}>
        {text}
      </div>
    </div>
  );
}
