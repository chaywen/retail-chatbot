import React from 'react';
import { FiSend } from 'react-icons/fi';
import './input.css';

export const SendButton = ({ onClick, disabled }) => {
  return (
    <button
      className={`send-button ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-label="Send"
    >
      <FiSend size={20} />
    </button>
  );
};
