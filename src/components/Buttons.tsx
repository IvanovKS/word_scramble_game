import { Button, Stack } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { useWord } from '../hooks/hooks';
import { useTimer } from '../hooks/hooks';
import { useInput } from '../hooks/hooks';
import { useState } from 'react';

function Buttons() {
  const notify = (elem1: string, elem2: string): void => {
    const property = elem1 === elem2 ? 'success' : 'error';
    const text = elem1 === elem2 ? `You are right!` : `Try again!`;
    toast[property](text, {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  const [disabled, setDisabled] = useState(true);

  const { setNewWord, currentWord } = useWord();
  const { startTimer } = useTimer();
  const { inputText } = useInput();
  const onClickRefresh = (): void => {
    setNewWord();
    startTimer();
    setDisabled(false);
  };
  const onClickCheck = (): void => {
    notify(inputText, currentWord.word);
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
        disabled={disabled}
      >
        Check word
      </Button>
      <ToastContainer />
    </Stack>
  );
}

export default Buttons;
