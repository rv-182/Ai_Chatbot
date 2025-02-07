import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import ChatWindow from './ChatWindow';
import InputBox from './InputBox';
import axios from 'axios';

const App = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = async (message) => {
    const newMessage = { user: 'You', text: message };
    setMessages([...messages, newMessage]);

    try {
      const response = await axios.post('http://localhost:8000/chat', { question: message });
      const botMessage = { user: 'Bot', text: response.data.answer };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Container sx={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
       <strong><center>AI-Powered Chatbot</center></strong>
        
         
      </Typography>
      <ChatWindow messages={messages} />
      <InputBox sendMessage={sendMessage} />
    </Container>
  );
};

export default App;
