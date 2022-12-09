import { CheckboxGroup } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { savedMoney } from "../Data.js";
import { chart as ChartJS } from "chart.js/auto";

export const BarChart = () => {
  // console.log(savedMoney)
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
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawOnChartArea: false,
          display: false,
          drawBorder: false,
          
        }
     },
      x: {
        grid: {
          drawOnChartArea: false,
          drawBorder: false,
          display:false,
          // drawTicks:false,
        }
      }
    }
   
  }

  return <Bar data={data} options={opt} />;
};
