import { Box, TextField } from '@mui/material';
import { useInput } from '../hooks/hooks';

function Input() {
  const { inputText, onChangeInput } = useInput();

  return (
    <Box sx={{ width: 500, maxWidth: '100%', m: 2 }}>
      <TextField
        fullWidth
        id="outlined-controlled"
        value={inputText}
        placeholder="Enter a valid word"
        onChange={onChangeInput}
      />
    </Box>
  );
}

export default Input;
