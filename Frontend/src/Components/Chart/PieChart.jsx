import React from 'react'
import { Doughnut} from 'react-chartjs-2'
import { chart as ChartJS } from 'chart.js'
export const PieChart = ({data, opt }) => {
  return (
    <Doughnut data={data} options={opt} />
  )
}
