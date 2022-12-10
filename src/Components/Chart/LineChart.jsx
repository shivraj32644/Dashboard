import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { recentTransactionData } from "../../Data.js";
import { chart as ChartJS } from "chart.js/auto";

export const LineChart = ({data,opt}) => {
  

  return <Line data={data} options={opt} />;
};
