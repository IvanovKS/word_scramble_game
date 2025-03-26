import { FC } from 'react';
import { Button, Stack } from '@mui/material';
import { useWord } from '../hooks/hooks';
import { ButtonPropsClick } from '../types/types';

const Buttons: FC<ButtonPropsClick> = ({ onClick }) => {
  const { setNewWord } = useWord();
  const clickNewWord = () => {
    setNewWord();
    if (onClick) onClick();
  };
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        sx={{ color: 'white' }}
        onClick={clickNewWord}
      >
        Refresh word
      </Button>
      <Button variant="contained" sx={{ color: 'white' }}>
        Check word
      </Button>
    </Stack>
  );
};

export default Buttons;
