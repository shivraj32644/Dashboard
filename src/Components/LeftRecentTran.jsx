import { Box } from "@chakra-ui/react";
import React from "react";
import style from "../Styles/LeftRecentTran.module.css";
import jikoImg from "../Assets/jiko.png";
export const LeftRecentTran = () => {
  return (
    <Box className={style.container}>
      <Box className={style.heading}>
        <p>Recent Transaction</p>
      </Box>
      <Box className={style.transactionBox}>
        <Box className={style.subTransactionBox}>
          <Box className={style.TransactionDetailBox}>
            <Box overflow={"hidden"}>
              <img src={jikoImg} alt="" />
            </Box>
            <Box>
              <Box>
                <p>Jiko Mobile App</p>
                <p>12 Nov 2021 4:45AM</p>
              </Box>
              <p>$15</p>
            </Box>
          </Box>

          <Box className={style.TransactionDetailBox}>
            <Box overflow={"hidden"}>
              <img src={jikoImg} alt="" />
            </Box>
            <Box>
              <Box>
                <p>Jiko Mobile App</p>
                <p>12 Nov 2021 4:45AM</p>
              </Box>
              <p>$15</p>
            </Box>
          </Box>
          <Box className={style.TransactionDetailBox}>
            <Box overflow={"hidden"}>
              <img src={jikoImg} alt="" />
            </Box>
            <Box>
              <Box>
                <p>Jiko Mobile App</p>
                <p>12 Nov 2021 4:45AM</p>
              </Box>
              <p>$15</p>
            </Box>
          </Box>
          <Box className={style.TransactionDetailBox}>
            <Box overflow={"hidden"}>
              <img src={jikoImg} alt="" />
            </Box>
            <Box>
              <Box>
                <p>Jiko Mobile App</p>
                <p>12 Nov 2021 4:45AM</p>
              </Box>
              <p>$15</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
