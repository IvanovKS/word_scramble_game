import Input from './components/Input';
import Timer from './components/Timer';
import Help from './components/Help';
import Buttons from './components/Buttons';
import Word from './components/Word';
import WordProvider from './context/WordContext';
import TimerProvider from './context/TimerContext';
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
  return (
    <TimerProvider>
      <WordProvider>
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
              <Timer />
              <Input />
              <Box
                sx={{
                  maxWidth: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Buttons />
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </WordProvider>
    </TimerProvider>
  );
}

export default App;
