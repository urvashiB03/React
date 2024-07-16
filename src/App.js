import React from 'react';
import VideoCall from './components/videoCall';
import ChatBot from './components/chatbot';

const App = () => {
  return (
    <div>
      <h1>Customer Support</h1>
      <VideoCall />
      <ChatBot />
    </div>
  );
};

export default App;
