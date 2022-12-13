import logo from './logo.svg';
import './App.css';
import { Box, Container } from '@chakra-ui/react';
import { Sidebar } from './Components/Sidebar';
import { Overview } from './Pages/Overview';

function App() {
  return (
    <Box className="container">
      <Box className="verticalLine"></Box>
      <Sidebar />
      <Overview/>
    </Box>
  );
}

export default App;
