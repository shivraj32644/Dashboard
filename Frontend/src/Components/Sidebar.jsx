import { Box } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/sidebar.module.css";
import img1 from "../Assets/img1.png";
import analytics1 from "../Assets/analytics1.png";
import community from "../Assets/community.png";
import help from "../Assets/help.png";
import logout from "../Assets/logout.png";
import payout from "../Assets/payout.png";
import product from "../Assets/product.png";
import schedule from "../Assets/schedule.png";
import setting from "../Assets/setting.png";
import statement from "../Assets/statement.png";


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
                <img src={product} alt="" />
              </Box>
              <p>Product</p>
            </Box>
            <Box className={styles.frameIII}>
              <Box className={styles.subFrameII}>
                <img src={analytics1} alt="" />
              </Box>
              <p>Analytics</p>
            </Box>
            <Box className={styles.frameIV}>
              <Box className={styles.subFrameII}>
                <img src={schedule} alt="" />
              </Box>
              <p>Schedule</p>
            </Box>
            <Box className={styles.frameV}>
              <Box className={styles.subFrameII}>
                <img src={payout} alt="" />
              </Box>
              <p>Payout</p>
            </Box>
            <Box className={styles.frameVI}>
              <Box className={styles.subFrameII}>
                <img src={statement} alt="" />
              </Box>
              <p>Statement</p>
            </Box>
           
          </Box>
          <Box className={styles.child2}>
            
          <Box className={styles.Child2frameI}>
              <Box className={styles.Child2subFrameI}>
                <img src={help} alt="" />
              </Box>
              <p>Help</p>
            </Box>
            
            <Box className={styles.Child2frameII}>
              <Box className={styles.Child2subFrameI}>
                <img src={community} alt="" />
              </Box>
              <p>Community</p>
            </Box>

            
            <Box className={styles.Child2frameIII}>
              <Box className={styles.Child2subFrameI}>
                <img src={setting} alt="" />
              </Box>
              <p>Settings</p>
            </Box>

            <Box className={styles.Child2frameIV}>
              <Box className={styles.Child2subFrameI}>
                <img src={logout} alt="" />
              </Box>
              <p>Logout</p>
            </Box>


        </Box>
        </Box>

      </Box>
    </Box>
  );
};
