import React from 'react';
import { Button, Stack } from '@mui/material';
import { useWord } from '../hooks/hooks';

function Buttons() {
  const { setNewWord } = useWord();
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" sx={{ color: 'white' }} onClick={setNewWord}>
        Refresh word
      </Button>
      <Button variant="contained" sx={{ color: 'white' }}>
        Check word
      </Button>
    </Stack>
  );
}

export default Buttons;
