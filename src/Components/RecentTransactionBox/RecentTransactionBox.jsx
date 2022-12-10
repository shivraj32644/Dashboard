import { Box } from "@chakra-ui/react";
import React from "react";
import style from "./Styles/transaction.module.css";
import { LeftRecentTransaction } from "./LeftRecentTransaction";
import { MidRecentTransaction } from "./MidRecentTransaction";

// * This is the parent component of transaction boxes

export const RecentTransactionBox = () => {
  return (
    <Box className={style.container}>
      <LeftRecentTransaction/>
      <MidRecentTransaction />
    </Box>
  );
};
