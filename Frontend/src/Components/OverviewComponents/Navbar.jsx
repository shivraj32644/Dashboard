import { Box } from "@chakra-ui/react";
import React from "react";
import styles from "../../Styles/navbar.module.css";
import search from "../../Assets/search.png";
import hand from "../../Assets/hand.png";
import email from '../../Assets/email.png'
import drawer from '../../Assets/drawer.png'
import userLogo from '../../Assets/userLogo.png'
import { UserDetail } from "./UserDetail";
import { suggestionData } from "../../Data";
import { useState } from "react";
export const Navbar = () => {
  const [data,setData]= useState([])
  const debounceFunction = (fun,delay) => {
    return (...args) => {
      setTimeout(() => {
        fun.apply(this, args);
      },delay)
    }
  }
  const suggestionFunction = (e) => {
    var filterArr = suggestionData.filter((event) => event.match(e) ? e : null)
    setData(filterArr);
  }

  let userSearch = debounceFunction(suggestionFunction, 900)
  console.log(data);

  return (
    <Box className={styles.container}>
      <Box className={styles.leftBar}>
        <Box>
          <h1>Hello, John </h1>
          <img src={hand} alt="" />
        </Box>
        <Box>
          <img src={search} alt="" />
          <input onChange={(e)=>userSearch(e.target.value)}  type="text" placeholder="Search" />
          
        </Box>
        {/* <Box
            border={'1px solid black'}
          height='300px'
          marginTop={'50px'}
          zIndex="60000"
          bg={'blue'}
          width={'340px'}
          marginLeft='332px'
          >
            {data.map((e) => <p>{e}</p> )}
          </Box> */}
      </Box>
      <Box className={styles.RightBar}>
        <img style={{marginLeft:"0px"}} src={email} alt="" />
        <img style={{marginLeft:"-10px"}} src={drawer} alt="" />
        {/* <img style={{marginLeft:"-13px"}} src={userLogo} alt="" /> */}
        <UserDetail/>
      </Box>
    </Box>
  );
};
