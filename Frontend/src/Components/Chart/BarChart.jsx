import { CheckboxGroup } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { chart as ChartJS } from "chart.js/auto";

export const BarChart = ({ data, opt }) => {
  return <Bar data={data} options={opt} />;
};
