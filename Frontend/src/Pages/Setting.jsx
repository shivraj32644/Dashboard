import React from 'react'
import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import styles from '../Styles/global.css'
export const Setting = () => {
  const arr = [1, 2, 3, 4,  8, 9,10,56,11,121,,14,13];
  return (
    <div className="mainBox">
      <h1>Setting</h1>
      <div className="SkeletonContainer">
        {arr.map((e) => (
          <div className="skeleton" key={e}>
            <Box padding="6" boxShadow="lg" bg="white">
              <SkeletonCircle  size="50" />
              <SkeletonText
                width={'200px'}
                mt="4"
                noOfLines={10}
                spacing="4"
                skeletonHeight="2"
              />
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
}
