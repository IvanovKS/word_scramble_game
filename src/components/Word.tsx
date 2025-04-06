import { useEffect, useState } from 'react';
import { useWord } from '../hooks/hooks';
import { useTimer } from '../hooks/hooks';
import { Box, Typography } from '@mui/material';

function Word() {
  const { currentWord } = useWord();
  const [shownWord, setShownWord] = useState<string>('...');
  const { isStart } = useTimer();
  useEffect(() => {
    if (isStart) {
      const shuffledWord = currentWord.word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
      setShownWord(shuffledWord);
    }
  }, [isStart, currentWord.word]);
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
        {isStart ? shownWord : '...'}
      </Typography>
    </Box>
  );
}

export default Word;
