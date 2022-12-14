import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./Styles/RightAnalytical.module.css";
import { BarChart } from "../../Chart/BarChart";
import { savedMoney } from "../../../Data.js";

// * This is Earning Analytical Box with Bar Chart which present in right side
export const EarningAnalyticalBox = () => {
  const [data, setData] = useState({
    labels: savedMoney.map((e) => e.day),
    datasets: [
      {
        type: "bar",
        label: "Bar Dataset",
        data: savedMoney.map((e) => e.saved),
        backgroundColor: ["#00D1FF"],
        height: "300px",
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        width: "5px",
        barPercentage: 0.5,
      },

      {
        type: "bar",
        label: "Line Dataset",

        data: savedMoney.map((e) => e.expense),
        backgroundColor: ["#0038FF"],
        height: "300px",
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        width: "5px",
        barPercentage: 0.5,
      },
    ],
  });

  const opt = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawOnChartArea: false,
          display: false,
          drawBorder: false,
        },
      },
      x: {
        grid: {
          drawOnChartArea: false,
          drawBorder: false,
          display: false,
          // drawTicks:false,
        },
      },
    },
  };



  return (
    <Box className={styles.container}>
      <p>Earning</p>
      <div className={styles.charBox}>
        <div className={styles.priceDetail}>
          <p>Saved this month</p>
          <p>$12,281</p>
          <p style={{ width: "124px" }}>
            {" "}
            Your payment will be updated by the system.
          </p>
        </div>
        <div className={styles.barGraph}>
          <BarChart data={data} opt={opt} />
        </div>
      </div>
    </Box>
  );
};
