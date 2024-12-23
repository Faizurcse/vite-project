import React from 'react';
import { FiMessageCircle } from 'react-icons/fi'; // Import the chat icon

function ChatButton({ onClick }) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        backgroundColor: '#6c63ff',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
      }}
      onClick={onClick}
    >
      <FiMessageCircle
        style={{
          width: '30px',
          height: '30px',
          color: 'white',
        }}
      />
    </div>
  );
}

export default ChatButton;
