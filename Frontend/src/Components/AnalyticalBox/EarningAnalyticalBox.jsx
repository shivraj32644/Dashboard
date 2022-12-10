import { Box } from "@chakra-ui/react";
import React from "react";
import styles from "./Styles/RightAnalytical.module.css";
import { BarChart } from "../Chart/BarChart";


// * This is Earning Analytical Box with Bar Chart which present in right side
export const EarningAnalyticalBox = () => {
  return (
    <Box className={styles.container}>
      <p>Earning</p>
      <div className={styles.charBox}>
        <div className={styles.priceDetail}>
          <p>Saved this month</p>
          <p>$12,281</p>
          <p style={{ width: "124px" }}>
            {" "}
            Your payment will be updated by the system.
          </p>
        </div>
        <div className={styles.barGraph}>
          <BarChart />
        </div>
      </div>
    </Box>
  );
};
