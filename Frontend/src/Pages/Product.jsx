import React from 'react'
import { Skeleton } from "@chakra-ui/react";
import styles from '../Styles/global.css'
export const Product = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,56,11,121,,14,13];
  return (
    <div className="mainBox">
      <h1>Product</h1>
      <div className="SkeletonContainer">
        {arr.map((e) => (
          <div className="skeleton" key={e}>
          <Skeleton startColor='#ffb142' endColor='#cc8e35' width={'200px'} height='200px' />
          </div>
        ))}
      </div>
    </div>
  );
}
