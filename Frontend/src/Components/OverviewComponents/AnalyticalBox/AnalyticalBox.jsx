import { Box } from "@chakra-ui/react";
import React from "react";
import styles from "./Styles/Analytical.module.css";
import { LeftAnalyticalBox } from "./LeftAnalyticalBox";
import { EarningAnalyticalBox } from "./EarningAnalyticalBox";

export const AnalyticalBox = () => {
  return (
    <Box className={styles.container}>
      <LeftAnalyticalBox />
      <EarningAnalyticalBox />
    </Box>
  );
};
