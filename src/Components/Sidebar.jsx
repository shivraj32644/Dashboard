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
              <Box className={styles.subFrameII}>
                <img src={img1} alt="" />
              </Box>
              <p>Overview</p>
            </Box>
            <Box className={styles.frameIV}>
              <Box className={styles.subFrameII}>
                <img src={img1} alt="" />
              </Box>
              <p>Overview</p>
            </Box>
            <Box className={styles.frameV}>
              <Box className={styles.subFrameII}>
                <img src={img1} alt="" />
              </Box>
              <p>Overview</p>
            </Box>
            <Box className={styles.frameVI}>
              <Box className={styles.subFrameII}>
                <img src={img1} alt="" />
              </Box>
              <p>Overview</p>
            </Box>
           
          </Box>
          <Box className={styles.child2}>
            
          <Box className={styles.Child2frameI}>
              <Box className={styles.Child2subFrameI}>
                <img src={img1} alt="" />
              </Box>
              <p>Help</p>
            </Box>
            
            <Box className={styles.Child2frameII}>
              <Box className={styles.Child2subFrameI}>
                <img src={img1} alt="" />
              </Box>
              <p>Community</p>
            </Box>

            
            <Box className={styles.Child2frameIII}>
              <Box className={styles.Child2subFrameI}>
                <img src={img1} alt="" />
              </Box>
              <p>Settings</p>
            </Box>

            <Box className={styles.Child2frameIV}>
              <Box className={styles.Child2subFrameI}>
                <img src={img1} alt="" />
              </Box>
              <p>Logout</p>
            </Box>


        </Box>
        </Box>

      </Box>
    </Box>
  );
};
