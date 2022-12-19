import React from "react";
import { Box, Skeleton } from "@chakra-ui/react";
import styles from "../Styles/global.css";
import { RiskTable } from "../Components/RiskRewardComponents/RiskTable";
export const RiskReward = () => {
  return (
    <Box textAlign={'center'}>
      <h1 style={{fontSize:"28px",fontWeight:700}} >Risk & Reward Matrix – Liquid Funds</h1>
      <RiskTable />
    </Box>
  );
};
