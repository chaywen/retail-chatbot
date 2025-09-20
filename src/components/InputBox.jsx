import React from 'react';
import './input.css';
import { SendButton } from './SendButton';

export const InputBox = ({ value, onChange, onSend }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && value.trim()) {
      onSend();
    }
  };

  return (
    <div className="input-container glassmorphism">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        className="input-field"
      />
      <SendButton onClick={onSend} disabled={!value.trim()} />
    </div>
  );
};
