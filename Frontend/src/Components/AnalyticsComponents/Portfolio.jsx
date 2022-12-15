import React from 'react'
import { useState } from 'react'
import { portfolioData } from '../../Data'
import { PieChart } from '../Chart/PieChart'
export const Portfolio = () => {
    const [data, setdata] = useState({
        labels: portfolioData.map((e)=>e.name),
          datasets: [{
            label: 'Quantity',
            data: portfolioData.map((e)=>e.Quantity),
            backgroundColor: portfolioData.map((e)=>e.color),
            hoverOffset: 4
          }]
    })
    const opt = {
        
    }
  return (
    <PieChart data= {data} opt={opt} />
  )
}
