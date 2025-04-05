import { Box, Typography } from '@mui/material';
import { useWord } from '../hooks/hooks';
import { useTimer } from '../hooks/hooks';

function Help() {
  const { currentWord } = useWord();
  const { isStart } = useTimer();
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
        Help:
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
        {isStart ? currentWord.hint : 'click the button "Refresh word"'}
      </Typography>
    </Box>
  );
}

export default Help;
