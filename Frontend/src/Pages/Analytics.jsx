import { Skeleton } from "@chakra-ui/react";
import styles from '../Styles/global.css'
import React from "react";
export const Analytics = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,56,11,121,,14,13];
  return (
    <div className="mainBox">
      <h1>Analytics</h1>
      <div className="SkeletonContainer">
        {arr.map((e) => (
          <div className="skeleton" key={e}>
          <Skeleton startColor='pink.500' endColor='orange.500' width={'200px'} height='200px' />
          </div>
        ))}
      </div>
    </div>
  );
};
