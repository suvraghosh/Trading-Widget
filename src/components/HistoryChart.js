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
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom', // Move legend to bottom for better visibility
                labels: {
                    color: 'white', // Set legend label color
                    font: {
                        size: 12, // Adjust legend label font size
                        weight: 'bold' // Make legend label bold
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: 'white', // Set color of horizontal grid lines
                    borderWidth: 1 // Add border to horizontal grid lines
                },
                ticks: {
                    color: 'white', // Set color of x-axis labels
                    font: {
                        size: 10 // Adjust x-axis label font size
                    }
                }
            },
            y: {
                grid: {
                    color: '#DDDDDD', // Set color of vertical grid lines
                    borderWidth: 1 // Add border to vertical grid lines
                },
                ticks: {
                    color: 'white', // Set color of y-axis labels
                    font: {
                        size: 10 // Adjust y-axis label font size
                    }
                }
            }
        }
    };
    const data = {
        labels: coinChartData.map(value => moment(value.x).format('MMMDD')),
        datasets: [
            {
                fill: true,
                label: `${params.coinId}`,
                data: coinChartData.map(val => val.y),
                borderColor: 'white', // Border color
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
  background-color: transparent; /* Change background color */
  border-radius: 8px; /* Add border radius */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Add box shadow */
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
