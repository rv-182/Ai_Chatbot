import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

const InputBox = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    sendMessage(message);
    setMessage('');
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
      <TextField
        variant="outlined"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <Button variant="contained" color="primary" onClick={handleSend} sx={{ marginLeft: '10px' }}>
        Send
      </Button>
    </Box>
  );
};

export default InputBox;
