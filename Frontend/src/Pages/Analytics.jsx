import { Box, Skeleton } from "@chakra-ui/react";
// import styles from '../Styles/global.css'
import React from "react";
import styles from '../Styles/analytical.module.css'
import { Portfolio } from "../Components/AnalyticsComponents/Portfolio";
import { portfolioData } from "../Data"; 
export const Analytics = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,56,11,121,,14,13];
  var amt = 0;
  for (var i = 0; i < portfolioData.length; i++){
    amt += portfolioData[i].Quantity * portfolioData[i].price;
  }
  console.log(amt)
  return (
    <div className={styles.container}>
      <h1>Analytics</h1>
      <Box
        
        className={styles.Portfolio}>
        <Portfolio />
        
        <Box
          width={'400px'}
          height='200px'
          // border={'1px solid black'}
        >
          <h2> Portfolio Value Rs {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(amt)} </h2>

        </Box>

      </Box>
    </div>
  );
};
