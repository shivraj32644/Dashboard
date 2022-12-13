import logo from './logo.svg';
import './App.css';
import { Box, Container } from '@chakra-ui/react';
import { Sidebar } from './Components/Sidebar';
import { Overview } from './Pages/Overview';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <Box className="container">
      
      <Sidebar />
      <AllRoutes/>
    </Box>
  );
}

export default App;
