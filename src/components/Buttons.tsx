import { Button, Stack } from '@mui/material';
import { useWord } from '../hooks/hooks';
import { useTimer } from '../hooks/hooks';
import { useInput } from '../hooks/hooks';

function Buttons() {
  const { setNewWord, currentWord } = useWord();
  const { startTimer } = useTimer();
  const { inputText } = useInput();
  const onClickRefresh = (): void => {
    setNewWord();
    startTimer();
  };
  const onClickCheck = (): void => {
    if (inputText === currentWord.word) {
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
