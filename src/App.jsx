import React from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';

function App() {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}

export default App;
