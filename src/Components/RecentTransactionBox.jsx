import { Box } from '@chakra-ui/react'
import React from 'react'
import style from '../Styles/transaction.module.css'
import { LeftRecentTran } from './LeftRecentTran'
import { RightRecentTrans } from './RightRecentTrans'
export const RecentTransactionBox = () => {
  return (
    <Box className={style.container}>
      <LeftRecentTran />
      <RightRecentTrans/>
    </Box>
  )
}
