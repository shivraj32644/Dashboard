import { Box } from '@chakra-ui/react'
import React from 'react'
import styles from '../Styles/RightRecentTrans.module.css'
import DurationTab from './DurationTab'

export const RightRecentTrans = () => {
  return (
    <Box className={styles.container} >
      <p className={styles.title}> Recent Transaction </p>
      <Box className={styles.chartBox} >
        <Box className={styles.details} >
          <p>Accounts reached</p>
          <p>11,756</p>
          <Box className={styles.tabs}>
          {/* <h3>Day</h3>
          <h3>Week</h3>
          <h3>Month</h3>
          <h3>Year</h3> */}
          <DurationTab/>
        </Box>
        </Box>
        
        <Box>
          </Box>
      </Box>
      </Box>
  )
}
