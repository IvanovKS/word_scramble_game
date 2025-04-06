import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';

function Input() {
  const [text, setText] = useState<string>('');

  return (
    <Box sx={{ width: 500, maxWidth: '100%', m: 2 }}>
      <TextField
        fullWidth
        id="outlined-controlled"
        value={text}
        placeholder="Enter a valid word"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setText(event.target.value);
        }}
      />
    </Box>
  );
}

export default Input;
