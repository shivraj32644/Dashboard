import { Box } from "@chakra-ui/react";
import React from "react";
import { AnalyticalBox } from "../Components/AnalyticalBox/AnalyticalBox";
import { Navbar } from "../Components/Navbar";
import { RecentTransactionBox } from "../Components/RecentTransactionBox/RecentTransactionBox";
import { RightRecentTransactionBox } from "../Components/RecentTransactionBox/RightRecentTransactionBox";
import style from "../Styles/right.module.css";
export const RightSection = () => {
  return (
    <Box className={style.container}>
      <Navbar />
      <AnalyticalBox />
      <RecentTransactionBox />
      <RightRecentTransactionBox />
    </Box>
  );
};
