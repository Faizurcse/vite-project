import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi'; // For send button icon
import { BsRobot } from 'react-icons/bs'; // For chatbot icon

function ChatbotWindow({ onClose }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = { sender: 'user', text: input };
      const botReply = {
        sender: 'bot',
        text: getBotReply(input), // Custom function for bot response
      };
      setMessages([...messages, userMessage, botReply]);
      setInput('');
    }
  };

  const getBotReply = (message) => {
    // Simple bot responses
    if (message.toLowerCase().includes('hello')) {
      return 'Hello! How can I help you today?';
    }
    if (message.toLowerCase().includes('introduce')) {
      return 'I am a helpful chatbot designed to assist you!';
    }
    return 'Sorry, I didn’t understand that. Could you rephrase?';
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        width: '350px',
        height: '500px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: '#6c63ff',
          color: 'white',
          padding: '15px',
          fontSize: '18px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BsRobot style={{ fontSize: '24px' }} />
          <span>Chatbot</span>
        </div>
        <span
          style={{ cursor: 'pointer', fontSize: '20px' }}
          onClick={onClose}
        >
          &times;
        </span>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          padding: '15px',
          overflowY: 'auto',
          backgroundColor: '#f4f4f4',
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent:
                message.sender === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: '10px',
            }}
          >
            <div
              style={{
                maxWidth: '70%',
                padding: '10px',
                borderRadius: '10px',
                backgroundColor:
                  message.sender === 'user' ? '#6c63ff' : '#e0e0e0',
                color: message.sender === 'user' ? 'white' : 'black',
                fontSize: '14px',
                lineHeight: '1.5',
              }}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          padding: '10px 15px',
          borderTop: '1px solid #ddd',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f9f9f9',
        }}
      >
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          style={{
            flex: 1,
            padding: '10px 15px',
            borderRadius: '20px',
            border: '1px solid #ddd',
            fontSize: '14px',
            outline: 'none',
          }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            marginLeft: '10px',
            padding: '10px 15px',
            backgroundColor: '#6c63ff',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FiSend style={{ fontSize: '20px' }} />
        </button>
      </div>
    </div>
  );
}

export default ChatbotWindow;
