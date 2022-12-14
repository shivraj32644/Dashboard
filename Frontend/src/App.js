import logo from './logo.svg';
import './App.css';
import { Box, Container, useBreakpointValue } from '@chakra-ui/react';
import { Sidebar } from './Components/OverviewComponents/Sidebar';
import { Overview } from './Pages/Overview';
import { AllRoutes } from './Routes/AllRoutes';
import { AiOutlineMenu } from "react-icons/ai";
function App() {
  const variant = useBreakpointValue(
    {
      base: true,
      md: false,
      lg:false
    },
  )
  return (
    <Box className="container">
      {variant ? <>
        <AiOutlineMenu/>
      </> : <>
      <Sidebar />
      </>}
      
      <AllRoutes/>
    </Box>
  );
}

export default App;
