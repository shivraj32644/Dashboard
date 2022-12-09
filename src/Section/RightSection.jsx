import { Box } from '@chakra-ui/react'
import React from 'react'
import { AnalyticalBox } from '../Components/AnalyticalBox'
import { Navbar } from '../Components/Navbar'
import { SmallTransBox } from '../Components/SmallTransBox'
import { RecentTransactionBox } from '../Components/RecentTransactionBox'
import style from '../Styles/right.module.css'
export const RightSection = () => {
  return (
    <Box className={style.container}>

      <Navbar />
      <AnalyticalBox />
      <RecentTransactionBox/>
      <SmallTransBox/>
      
    </Box>
  )
}
