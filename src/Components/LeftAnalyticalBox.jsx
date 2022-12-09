import { Box } from '@chakra-ui/react'
import React from 'react'
import styles from '../Styles/leftAnalyticalBox.module.css'
import { ReminderBox } from './ReminderBox'
export const LeftAnalyticalBox = () => {
  return (
      <Box className={styles.container} >
          <Box className={styles.chartBox} >
              
          </Box>
            <ReminderBox/>

      </Box>
  )
}
