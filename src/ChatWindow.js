import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const ChatWindow = ({ messages }) => {
  return (
    <Box sx={{ height: '70vh', overflowY: 'scroll', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <List>
        {messages.map((message, index) => (
          <ListItem key={index} alignItems="flex-start">
            <ListItemText primary={message.user} secondary={message.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChatWindow;
