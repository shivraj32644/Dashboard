import { Box } from '@chakra-ui/react'
import React from 'react'
import styles from '../Styles/analytical.module.css'
import { LeftAnalyticalBox } from './LeftAnalyticalBox'
import { RightAnalyticalBox } from './RightAnalyticalBox'

export const AnalyticalBox = () => {
  return (
      <Box className={styles.container}>
      <LeftAnalyticalBox />
      <RightAnalyticalBox/>
    </Box>
  )
}
