import { useCallback, useState } from 'react';
import Input from './components/Input';
import Timer from './components/Timer';
import Help from './components/Help';
import Buttons from './components/Buttons';
import Word from './components/Word';
import {
  Box,
  Container,
  createTheme,
  ThemeProvider,
  Typography,
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6d00',
    },
    secondary: {
      main: '#ffd600',
    },
  },
});

function App() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(20);
  const startTimer = useCallback(() => setIsActive(true), []);
  const resetTimer = () => {
    setSeconds(20);
    setIsActive(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            bgcolor: '#ffda8f26',
            border: 2,
            borderRadius: 2,
            width: '800px',
            height: '450px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '10px 5px 10px 5px rgba(0,0,0,0.19)',
          }}
        >
          <Typography variant="h3" gutterBottom>
            Word Scramble Game
          </Typography>
          <Word />
          <Help />
          <Timer
            seconds={seconds}
            setSeconds={setSeconds}
            resetTimer={resetTimer}
            isActive={isActive}
          />
          <Input />
          <Box
            sx={{
              maxWidth: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Buttons onClick={startTimer} />
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
