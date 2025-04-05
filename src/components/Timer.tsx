import { Box, Typography } from '@mui/material';
import { useTimer } from '../hooks/hooks';

function Timer() {
  const { timeLeft } = useTimer();
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
        {timeLeft}
      </Typography>
    </Box>
  );
}

export default Timer;
