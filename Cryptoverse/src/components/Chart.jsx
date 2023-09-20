import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
)

const Chartt = ({ coin }) => {

  const [chartData, setChartData] = useState([]);
  const coinid = coin.id;

  useEffect(() => {

    const charturl = `https://api.coingecko.com/api/v3/coins/${coinid}/market_chart?vs_currency=usd&days=1`;
    axios.get(charturl).then((res) => {

      setChartData(res.data.prices)

    }).catch((err) => console.log("notfound"))
  }, [coinid])

  const formattedChartData = chartData.map((coin) => {
    const date = new Date(coin[0]);
    const timeInHours = date.getHours() + date.getMinutes() / 60; // Convert time to hours
    return {
      time: timeInHours,
      price: coin[1],
    };
  });

  const options = {
    responsive: true, // Enable responsiveness
    maintainAspectRatio: false, // Do not maintain aspect ratio
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.9)',
        },
        ticks: {
          color: 'gray',
          
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.9)',
        },
        ticks: {
          color: 'gray',
        },
      },
    },
  };

  const data = {
    labels: formattedChartData.map((data) => `${(data.time.toFixed(1))} hrs`),
    datasets: [
      {
        data: formattedChartData.map((data) => data.price),
        
        borderColor: "blue",
        backgroundColor: '',
        pointRadius: 0, // Set point radius to 0 to remove points
      },
    ],
  };

  return (
    <div>
      <div style={{ padding: '20px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  )
}

export default Chartt
