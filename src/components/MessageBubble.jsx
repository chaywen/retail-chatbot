import React from 'react';
import { motion } from 'framer-motion';

export const MessageBubble = ({ msg }) => {
  const isUser = msg.sender === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} px-2`}
    >
      <div className={`flex items-end space-x-2 ${isUser ? 'flex-row-reverse' : ''}`}>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-md ${
          isUser ? 'bg-gray-600' : 'bg-purple-600'
        }`}>
          {isUser ? 'U' : 'A'}
        </div>

        <div className={`max-w-sm px-4 py-2 rounded-2xl shadow-lg text-sm ${
          isUser ? 'bg-gradient-to-br from-purple-700 to-purple-500 text-white' : 'bg-white text-gray-800'
        }`}>
          <div>{msg.text}</div>
          <div className="text-[10px] text-gray-400 mt-1 text-right">{msg.timestamp}</div>
        </div>
      </div>
    </motion.div>
  );
};
