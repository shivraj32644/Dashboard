import { Box } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/sidebar.module.css";
import img1 from "../Assets/img1.png";
export const Sidebar = () => {
  return (
    <Box className={styles.mainBar}>
      <Box className={styles.rectangle}></Box>
      <Box className={styles.line}></Box>
      <Box className={styles.subMainBar}>
        <Box className={styles.logo}><h1>LOGO</h1>  </Box>
        <Box className={styles.child}>
          <Box className={styles.child1}>
            <Box className={styles.frameI}>
              <Box className={styles.subFrameI}>
                <img src={img1} alt="" />
              </Box>
              <p>Overview</p>
            </Box>
            <Box className={styles.frameII}>
              <Box className={styles.subFrameII}>
                <img src={img1} alt="" />
              </Box>
              <p>Overview</p>
            </Box>
            <Box className={styles.frameIII}>
              <Box className={styles.subFrameIII}>
                <img src={img1} alt="" />
              </Box>
              <p>Overview</p>
            </Box>
            <Box className={styles.frameIV}>
              <Box className={styles.subFrameIV}>
                <img src={img1} alt="" />
              </Box>
              <p>Overview</p>
            </Box>
            <Box className={styles.frameV}>
              <Box className={styles.subFrameIV}>
                <img src={img1} alt="" />
              </Box>
              <p>Overview</p>
            </Box>
            <Box className={styles.frameVI}>
              <Box className={styles.subFrameVI}>
                <img src={img1} alt="" />
              </Box>
              <p>Overview</p>
            </Box>
           
          </Box>
          <Box className={styles.child2}>
            
          <Box className={styles.frameI}>
              <Box className={styles.subFrameI}>
                <img src={img1} alt="" />
              </Box>
              <p>Overview</p>
            </Box><Box className={styles.frameI}>
              <Box className={styles.subFrameI}>
                <img src={img1} alt="" />
              </Box>
              <p>Overview</p>
            </Box><Box className={styles.frameI}>
              <Box className={styles.subFrameI}>
                <img src={img1} alt="" />
              </Box>
              <p>Overview</p>
            </Box>


        </Box>
        </Box>

      </Box>
    </Box>
  );
};
