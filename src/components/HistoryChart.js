import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import moment from "moment"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export default function HistoryChart() {
    const params = useParams();
    const [coinChartData, setCoinChartData] = useState([]);

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}/market_chart?vs_currency=usd&days=7`;


    useEffect(() => {
        axios.get(url)
            .then((response) => {
                const data = response.data.prices.map(value => ({
                    x: value[0],
                    y: value[1].toFixed(2)
                }));
                setCoinChartData(data);
            })
            .catch((err) => {
                console.log('Error:', err);
            });
    }, []);

const options = {
  responsive: true,
  maintainAspectRatio: false, // To allow the chart to exceed the container
  plugins: {
    legend: {
      display: true,
      position: 'top', // Adjust the position based on your preference
    }
  }
};

    const data = {
        labels: coinChartData.map(value=> moment(value.x).format('MMMDD')),
        datasets: [
            {
                fill: true,
                label: `${params.coinId}`,
                data: coinChartData.map(val=>val.y),
                borderColor: '#333333', // Border color
                backgroundColor: 'rgba(53, 162, 235, 0.2)'
            }
        ]
    }
    return ( 
        <Container>
            <Line options={options} data={data} />
        </Container>
    )
}

const Container = styled.div`
background-color: #CCCCCC;
width: 700px;
height: 400px;
    @media screen and (max-width: 1280px){
        width: 500px;
    }
    @media screen and (max-width: 540px){
        width: 370px;
        height: 300px;
    }
`;
