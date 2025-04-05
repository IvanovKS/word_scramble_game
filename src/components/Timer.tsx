import { Box, Typography } from '@mui/material';
import React from 'react';

function Timer() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ m: 1 }}>
        Time left:
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          backgroundColor: 'secondary.main',
          letterSpacing: 1,
          fontWeight: '700',
          m: 1,
        }}
      >
        30
      </Typography>
    </Box>
  );
}

export default Timer;
