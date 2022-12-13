import React from 'react'
import { AnalyticalBox } from '../Components/AnalyticalBox/AnalyticalBox'
import { Navbar } from '../Components/Navbar'
import { RecentTransactionBox } from '../Components/RecentTransactionBox/RecentTransactionBox'
import { RightRecentTransactionBox } from '../Components/RecentTransactionBox/RightRecentTransactionBox'
import style from "../Styles/right.module.css";
import { Box } from "@chakra-ui/react";
export const Overview = () => {
  return (
    <Box className={style.container}>
      <Navbar />
      <AnalyticalBox />
      <Box className={style.verticalLine}></Box>
      <RecentTransactionBox />
      <RightRecentTransactionBox />
    </Box>
  )
}
