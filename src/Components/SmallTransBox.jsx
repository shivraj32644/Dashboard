import React from 'react'
import style from '../Styles/SmallTransBox.module.css'
import { Box, useDisclosure } from '@chakra-ui/react'
import team from '../Assets/team.png'
import { useState } from 'react'
import { TransferButton } from './TransferButton'
export const SmallTransBox = () => {
  const [amt, setAmt] = useState(450)
  
  
  return (
    <Box className={style.container} >
      <h1>Recent Transaction</h1>
      <Box className={style.details}>
        
        <Box className={style.line}></Box>
        <Box className={style.heading}>
          <img src={team} alt="team" />
          <p>Transfer to your team.</p>
        </Box>
        <Box className={style.btn} >
          <h1><span>$</span> {amt}</h1>
          {/* <button onClick={() => setAmt(0)} >Transfer</button> */}
          <TransferButton amt = {amt} setAmt={setAmt}  />
        </Box>
        <Box className={style.icon}></Box>

      </Box>
    </Box>
  )
}
