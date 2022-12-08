import logo from './logo.svg';
import './App.css';
import { Box, Container } from '@chakra-ui/react';
import { Sidebar } from './Components/Sidebar';
import { MidSection } from './Section/MidSection';
import { RightSection } from './Section/RightSection';

function App() {
  return (
    <Box className="container">
      <Sidebar />
      <MidSection />
      <RightSection/>
    </Box>
  );
}

export default App;
