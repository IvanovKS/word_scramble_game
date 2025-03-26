import { Box, Typography } from '@mui/material';
import { CountTimer } from '../types/types';
import { FC, useEffect } from 'react';

const Timer: FC<CountTimer> = ({
  isActive,
  seconds,
  setSeconds,
  resetTimer,
}) => {
  useEffect(() => {
    if (!isActive) return;
    if (seconds === 0) {
      resetTimer();
      return;
    }
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isActive, seconds, setSeconds, resetTimer]);
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
        {seconds}
      </Typography>
    </Box>
  );
};

export default Timer;
