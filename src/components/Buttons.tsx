import { Button, Stack } from '@mui/material';
import { useWord } from '../hooks/hooks';
import { useTimer } from '../hooks/hooks';

function Buttons() {
  const avatar = 'avatAR '; // заглушка
  const { setNewWord, currentWord } = useWord();
  const { startTimer } = useTimer();
  const onClickRefresh = (): void => {
    setNewWord();
    startTimer();
  };
  const onClickCheck = (): void => {
    if (avatar.toLowerCase().trim() === currentWord.word) {
      console.log('yes');
    } else {
      console.log('no');
    }
  };
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        sx={{ color: 'white' }}
        onClick={onClickRefresh}
      >
        Refresh word
      </Button>
      <Button
        variant="contained"
        sx={{ color: 'white' }}
        onClick={onClickCheck}
      >
        Check word
      </Button>
    </Stack>
  );
}

export default Buttons;
