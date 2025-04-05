import { Button, Stack } from '@mui/material';
import { useWord } from '../hooks/hooks';
import { useTimer } from '../hooks/hooks';

function Buttons() {
  const { setNewWord } = useWord();
  const { startTimer } = useTimer();
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" sx={{ color: 'white' }} onClick={startTimer}>
        Refresh word
      </Button>
      <Button variant="contained" sx={{ color: 'white' }}>
        Check word
      </Button>
    </Stack>
  );
}

export default Buttons;
