import logo from './logo.svg';
import './App.css';
import { Box, Container } from '@chakra-ui/react';
import { Sidebar } from './Components/Sidebar';
import { MidSection } from './Section/MidSection';

function App() {
  return (
    <Box className="container">
      <Sidebar />
      <MidSection />
      
    </Box>
  );
}

export default App;
