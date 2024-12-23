import React, { useState } from 'react';
import ChatButton from './components/ChatButton'; // Import the button
import ChatbotWindow from './components/ChatbotWindow'; // Import the chatbot window

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Function to toggle the chatbot window
  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div>
      {/* Conditionally render the ChatButton based on whether the chatbot is open */}
      {!isChatbotOpen && <ChatButton onClick={toggleChatbot} />}

      {/* Conditionally render the ChatbotWindow based on whether it's open */}
      {isChatbotOpen && <ChatbotWindow onClose={toggleChatbot} />}
    </div>
  );
}

export default App;
