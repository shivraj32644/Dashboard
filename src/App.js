import logo from './logo.svg';
import './App.css';
import { Box, Container } from '@chakra-ui/react';
import { Sidebar } from './Components/Sidebar';

function App() {
  return (
    <Box
      maxW={'1440px'}
      margin='auto'
      marginTop={'20px'}
      marginBottom='20px'
      border='1px solid black'
      height={'1024px'}
      display='flex'
      justifyContent={'space-between'}

    >
      <Sidebar />
      <Box
        width={'1193px'}
        border='1px solid black'
      height={'1024px'}
      >

      </Box>
    </Box>
  );
}

export default App;
