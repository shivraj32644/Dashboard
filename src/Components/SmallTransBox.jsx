import React from 'react'
import style from '../Styles/SmallTransBox.module.css'
import { Box, useDisclosure } from '@chakra-ui/react'
import team from '../Assets/team.png'
import { useState } from 'react'
import { TransferButton } from './TransferButton'
import man1 from '../Assets/man1.png'
import man2 from '../Assets/man2.png'
import man3 from '../Assets/man3.png'
import man4 from '../Assets/man4.png'
import women1 from '../Assets/women1.png'
import plusIcon from '../Assets/plusIcon.png'
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
        <Box className={style.icon}>
          <img style={{marginLeft:"0px"}}  src={man1} alt="man1" />
          <img  src={man2} alt="man2" />
          <img  src={man3} alt="man3" />
          <img  src={man4} alt="man4" />
          <img  src={women1} alt="women1" />
          <img  src={plusIcon} alt="plus" />
        </Box>

      </Box>
    </Box>
  )
}
