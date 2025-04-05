import { useWord } from '../hooks/hooks';
import { useTimer } from '../hooks/hooks';
import { Box, Typography } from '@mui/material';

function Word() {
  const { currentWord } = useWord();
  const { isStart } = useTimer();
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
        {isStart
          ? currentWord.word
              .split('')
              .sort(() => Math.random() - 0.5)
              .join('')
          : '...'}
      </Typography>
    </Box>
  );
}

export default Word;
