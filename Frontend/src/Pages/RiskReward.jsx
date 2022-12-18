import React from "react";
import { Box, Skeleton } from "@chakra-ui/react";
import styles from "../Styles/global.css";
import { RiskTable } from "../Components/RiskRewardComponents/RiskTable";
export const RiskReward = () => {
  return (
    <Box>
      <RiskTable />
    </Box>
  );
};
