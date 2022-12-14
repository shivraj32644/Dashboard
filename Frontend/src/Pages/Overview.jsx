import React from 'react'
import { AnalyticalBox } from '../Components/OverviewComponents/AnalyticalBox/AnalyticalBox'
import { Navbar } from '../Components/OverviewComponents/Navbar'
import { RecentTransactionBox } from '../Components/OverviewComponents/RecentTransactionBox/RecentTransactionBox'
import { RightRecentTransactionBox } from '../Components/OverviewComponents/RecentTransactionBox/RightRecentTransactionBox'
import style from "../Styles/overview.module.css";
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
