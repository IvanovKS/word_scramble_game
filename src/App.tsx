import Input from './components/Input';
import Button from './components/Button';
import Timer from './components/Timer';
import Help from './components/Help';
import { Box, Container } from '@mui/material';

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <Help />
        <Timer />
        <Input />
        <Button />
      </Box>
    </Container>
  );
}

export default App;
