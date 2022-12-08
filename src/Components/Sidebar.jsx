import { Box } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/sidebar.module.css";
import img1 from "../Assets/img1.png";
export const Sidebar = () => {
  return (
    <Box
     
      className={styles.sidebar}
    >
      <Box className={styles.logo}>
        <h1>LOGO</h1>
      </Box>
      <Box className={styles.bar}>
        <Box className={styles.box1}>
          <Box className={styles.item}>
            <img src={img1} alt="" />
            <h3>Overview</h3>
          </Box>
          <Box className={styles.item}>
            <img src={img1} alt="" />
            <h3>Overview</h3>
          </Box>
          <Box className={styles.item}>
            <img src={img1} alt="" />
            <h3>Overview</h3>
          </Box>
          <Box className={styles.item}>
            <img src={img1} alt="" />
            <h3>Overview</h3>
          </Box>
          <Box className={styles.item}>
            <img src={img1} alt="" />
            <h3>Overview</h3>
          </Box>
                    </Box>
                    {/* Line */}

                    <div className={styles.line}> </div>
                    
                    {/* lower box */}
        <Box className={styles.box2}>
          <Box className={styles.item2}>
            <img src={img1} alt="" />
            <h3>Overview</h3>
          </Box>
          <Box className={styles.item2}>
            <img src={img1} alt="" />
            <h3>Overview</h3>
          </Box>
          <Box className={styles.item2}>
            <img src={img1} alt="" />
            <h3>Overview</h3>
          </Box>
          <Box className={styles.item2}>
            <img src={img1} alt="" />
            <h3>Overview</h3>
          </Box>
          <Box className={styles.item2}>
            <img src={img1} alt="" />
            <h3>Overview</h3>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
