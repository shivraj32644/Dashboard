import { Box } from '@chakra-ui/react'
import React from 'react'
import { AnalyticalBox } from '../Components/AnalyticalBox'
import { Navbar } from '../Components/Navbar'
import style from '../Styles/right.module.css'
export const RightSection = () => {
  return (
    <Box className={style.container}>

      <Navbar />
      <AnalyticalBox/>
    </Box>
  )
}
