import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import DOMPurify from "dompurify";
import HistoryChart from '../components/HistoryChart';

export default function Coin() {
    const params = useParams();
    const [coin, setCoin] = useState({})
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setCoin(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    },[url]);

    return (
        <Container>
            <div className='coin-container'>
                <div className='content'>
                    <div className='rank'>
                        <span className='rank-btn'>Rank #{coin.market_cap_rank}</span>
                    </div>
                    <div className='info'>
                        <div className='coin-heading'>
                            {coin.image ? <img src={coin.image.small} alt='coin-img' /> : null}
                            <p>{coin.name}</p>
                            <p>{coin.symbol}/USD</p>
                        </div>
                        <div className='coin-price'>
                            {coin.market_data ? <h2>${coin.market_data.current_price.usd}</h2> : null}
                        </div>
                    </div>
                </div>

                <div className='content'>
                    <table>
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>14d</th>
                                <th>30d</th>
                                <th>1yr</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}
                                </td>
                                <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_7d_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_14d_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_30d_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                                <td>{coin.market_data?.price_change_percentage_1y_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='content'>
                    <div className='stats'>
                        <div className='left'>
                            <div className='row'>
                                <h4>24 Hour low</h4>
                                {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd}</p> : null}
                            </div>
                            <div className='row'>
                                <h4>24 Hour High</h4>
                                {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd}</p> : null}
                            </div>
                        </div>

                        <div className='right'>
                            <div className='row'>
                                <h4>Market Cap</h4>
                                {coin.market_data ? <p>${coin.market_data.market_cap.usd}</p> : null}
                            </div>
                            <div className='row'>
                                <h4>Supply</h4>
                                {coin.market_data ? <p>${coin.market_data.circulating_supply}</p> : null}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='content'>
                    <div className='about'>
                        <h3>About</h3>
                        <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
                        }}>
                        </p>
                    </div>
                </div>
            </div>

            <HistoryChart />
        </Container>
    )
}

const Container = styled.div`
color: White;
display: grid;
grid-template-columns: 500px 700px;
margin: 0.7rem 20px;
column-gap: 40px;
font-family: Geneva, Tahoma, sans-serif;
    .coin-container{
        max-width: 500px;
        padding: .7rem 1rem;
        display: flex;
        flex-direction: column;
        border-radius: 8px;
            .content{
                max-width: 740px;
                margin: 0.6rem auto;
                padding: .7rem 1rem;
                display: flex;
                flex-direction: column;
                background-color: #26272b;
                box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
                border-radius: 8px;
                .rank{
                        .rank-btn{
                            border: 1px solid #ff930a;
                            box-shadow: 0px 0px 8px #ff930a;
                            background: radial-gradient(190.82% 190.82% at 50% 100%, rgba(254, 173, 15, 1) 0%, rgba(168, 112, 64, 0.62) 18.09%);
                            border-radius: 8px;
                            padding: .1rem;
                            position: relative;
                            bottom: 14px;
                        }
                }
                .info{
                    display: grid;
                    grid-template-columns: repeat(2,1fr);
                    .coin-heading{
                        display: flex;
                        align-items: center;
                        margin: 1rem 0;
                        p{
                            padding: 0 0.9rem;
                            text-transform: uppercase;
                        }
                    }
                    .coin-price{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
                table{
                    margin: .5rem 0;
                    td, th{
                        padding: 5px;
                        text-align: center;
                    }
                    th{
                        background-color:  #202020;
                    }
                }
                .stats{
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    .row{
                        display:flex;
                        justify-content: space-between;
                        border-bottom: 1px solid #808000;
                        margin: .6rem 0;
                        padding-bottom: .5rem;
                        h4{
                            margin-right: 10px;
                        }
                    }
                }
                .about{
                    h3{
                        margin: 1rem 0;
                    }
                }
            }
    }
    @media screen and (max-width: 1100px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media screen and (max-width: 480px){
        .content{
            width: 350px;
            margin: 0.6rem auto;
            padding: .7rem 1rem;
            .coin-price{
                font-size: 10px;
            }
        }
    }
`;