
import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { PaperClipIcon, MicrophoneIcon } from '@heroicons/react/24/outline';

export default function ChatWindow() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
  };

  return (
    <div className="relative flex flex-col flex-1 bg-white overflow-hidden font-sans">
      {/* Radial layers */}
      <div className="radial-layer w-96 h-96 top-10 left-20 animate-[pulse-radial_8s_ease-in-out_infinite]"></div>
      <div className="radial-layer w-72 h-72 top-40 right-10 animate-[pulse-radial_10s_ease-in-out_infinite]"></div>
      <div className="radial-layer w-64 h-64 bottom-20 left-1/2 animate-[pulse-radial_12s_ease-in-out_infinite]"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center space-y-3 px-4">
        <img src={logo} alt="LameBot Logo" className="h-8 w-auto" />
        <h1 className="text-base font-semibold text-purple-800">How can we assist you today?</h1>
        <p className="text-xs text-gray-600 max-w-sm leading-relaxed">
          Get expert guidance powered by LameBot AI agents specializing in retail, sales, and negotiation.
          Choose the agent that suits your needs and start your conversation with ease.
        </p>
      </div>

      {/* Input */}
      <div className="relative z-10 mt-4 flex items-center bg-black/30 rounded-full px-4 py-2 backdrop-blur-md shadow-inner border border-gray-700 mx-4 mb-6">
        <PaperClipIcon className="h-5 w-5 text-gray-300 hover:text-white mr-3 cursor-pointer" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-sm"
          placeholder="Type your question here"
        />
        <MicrophoneIcon className="h-5 w-5 text-gray-300 hover:text-white mx-3 cursor-pointer" />
        <button
          onClick={sendMessage}
          className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-all shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
