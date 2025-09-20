import React, { useRef } from 'react';
import './input.css';
import { SendButton } from './SendButton';
import { FiMic, FiPaperclip } from 'react-icons/fi';

export const InputBox = ({ value, onChange, onSend }) => {
  const fileInputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && value.trim()) {
      onSend();
    }
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('📎 Uploaded file:', file.name);
      // 你可以在这里触发上传逻辑或预览
    }
  };

  const handleVoiceClick = () => {
    console.log('🎤 Voice input triggered');
    // 你可以在这里集成 Web Speech API 或语音识别逻辑
  };

  return (
    <div className="input-container glassmorphism">
      <button className="icon-button" onClick={handleVoiceClick} aria-label="Voice">
        <FiMic size={18} />
      </button>

      <button className="icon-button" onClick={handleFileClick} aria-label="Upload">
        <FiPaperclip size={18} />
      </button>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
        className="input-field"
      />

      <SendButton onClick={onSend} disabled={!value.trim()} />

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  );
};
