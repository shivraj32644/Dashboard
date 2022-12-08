import React from 'react'
import style from '../Styles/SmallTransBox.module.css'
import { Box } from '@chakra-ui/react'
export const SmallTransBox = () => {
  return (
    <Box className={style.container} >
        <h1>Recent Transaction</h1>
    </Box>
  )
}
