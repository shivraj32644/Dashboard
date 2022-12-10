import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./Styles/MidRecentTrans.module.css";
import { LineChart } from "../Chart/LineChart";
import { recentTransactionData } from "../../Data.js";

// * This is mid recent Transaction box in which we used line chart

export const MidRecentTransaction = () => {
  const [data, setData] = useState({
    labels: recentTransactionData.map((e) => e.Month),
    datasets: [
      {
        type: "line",
        label: "Bar Dataset",
        data: recentTransactionData.map((e) => e.Amount),

        height: "100%",
        width: "100%",

        fill: true,
        tension: 0.5,
        borderColor: "#2624FF",
        pointRadius: 0,
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
        display: false,
        grid: {
          drawOnChartArea: false,
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          drawOnChartArea: false,
          drawBorder: false,
          display: false,
          // drawTicks:false,
        },
        ticks: {
          font: {
            size: 10,
          },
          maxRotation: 0,
          minRotation: 0,
        },
      },
    },
  };

  return (
    <Box className={styles.container}>
      <p className={styles.title}> Recent Transaction </p>
      <Box className={styles.chartBox}>
        <Box className={styles.details}>
          <p>Accounts reached</p>
          <p>11,756</p>
          <Box className={styles.tabs}>
            <h3 style={{ width: "25px" }}>Day</h3>
            <h3>Week</h3>
            <h3 style={{ color: "#000" }}>Month</h3>
            <h3>Year</h3>
          </Box>
        </Box>

        <Box className={styles.chart}>
          <LineChart data={data} opt={opt} />
        </Box>
      </Box>
    </Box>
  );
};
