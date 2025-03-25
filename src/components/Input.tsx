import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';

function Input() {
  const [name, setName] = useState('');

  return (
    <Box sx={{ width: 500, maxWidth: '100%', m: 2 }}>
      <TextField
        fullWidth
        id="outlined-controlled"
        value={name}
        placeholder="Enter a valid word"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
      />
    </Box>
  );
}

export default Input;
