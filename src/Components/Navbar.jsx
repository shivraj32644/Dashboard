import { Box } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/navbar.module.css";
import search from "../Assets/search.png";
import hand from "../Assets/hand.png";
import email from '../Assets/email.png'
import drawer from '../Assets/drawer.png'
import userLogo from '../Assets/userLogo.png'
export const Navbar = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.leftBar}>
        <Box>
          <h1>Hello, John </h1>
          <img src={hand} alt="" />
        </Box>
        <Box>
          <img src={search} alt="" />
          <input type="text" placeholder="Search" />
        </Box>
      </Box>
      <Box className={styles.RightBar}>
        <img style={{marginLeft:"0px"}} src={email} alt="" />
        <img style={{marginLeft:"-10px"}} src={drawer} alt="" />
        <img style={{marginLeft:"-13px"}} src={userLogo} alt="" />
      </Box>
    </Box>
  );
};
