import { Box, Typography } from '@mui/material';
import React from 'react';

function Word() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          letterSpacing: 4,
          fontWeight: '700',
        }}
      >
        word
      </Typography>
    </Box>
  );
}

export default Word;
