import { Button, Stack } from '@mui/material';
import React from 'react';

function Buttons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" sx={{ color: 'white' }}>
        Refresh word
      </Button>
      <Button variant="contained" sx={{ color: 'white' }}>
        Check word
      </Button>
    </Stack>
  );
}

export default Buttons;
