import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import styles from "./Styles/LeftAnalyticalBox.module.css";
import { ReminderBox } from "../ReminderBox";
import { recentTransactionData } from "../../Data";
import { LineChart } from "../Chart/LineChart";


// * This is left analytical box with line chart which present left side of reminder box

export const LeftAnalyticalBox = () => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    fetch(`https://sales-dashboard.cyclic.app/transaction`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
          setFetchData(res)
      }).catch((err) => {
      
    })
  },[])


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
        pointRadius: 1,
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
        // display:false,
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
      <Box className={styles.box}>
        <p className={styles.title}>Analytics</p>
        <div className={styles.chartBox}>
          <div className={styles.sortMenu}>
            <div>
              <button>Income ↓</button>
            </div>
            <div>
              <h3>Sort by </h3>
              <button>Month ↓</button>
            </div>
          </div>
          <div className={styles.chart}>
            <LineChart data={data} opt={opt} />
          </div>
        </div>
      </Box>
      <ReminderBox />
    </Box>
  );
};
