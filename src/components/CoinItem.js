import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {BiTrendingDown,BiTrendingUp} from "react-icons/bi";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function CoinItem({coins}) {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {loading ? (
        <SkeletonTheme baseColor="#202020" highlightColor="#444" height={50}>
          <Skeleton />
        </SkeletonTheme>
    ) : (
      <Container>
        <p className=''>{coins.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={coins.image} alt='' />
            <p>{coins.symbol.toUpperCase()}</p>
        </div>
        <p className=''>${coins.current_price.toLocaleString()}</p>
        <p style={{ color: coins.price_change_percentage_24h < 0 ? '#ea3943' : '#16c784'}}>
          {coins.price_change_percentage_24h < 0 ? <BiTrendingDown/> : <BiTrendingUp />}
          {Math.abs(coins.price_change_percentage_24h).toFixed(2)}%
        </p>
        <p className='hide-mobile'>${coins.market_cap.toLocaleString()}
        </p>
        <p className='hide-mobile'>${coins.total_volume.toLocaleString()}</p>
    </Container>
    )}
    </>
  )
}

const Container = styled.div`
  background-color: #232021;
  color: white;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  font-family: Tahoma, sans-serif;
  background-color: #1d2127;
  border-radius: 2px 2px 0px 0px;
  border-bottom: 1px solid #333;
  margin: 0.1rem 1rem;
  padding: .7rem 1rem;
  font-weight: 700;
  &:hover {
    transform: scale(1.01);
    transition: .3s ease-in-out;
    cursor: pointer;
  }
  img {
    height: 25px;
    margin-right: 8px;
    padding-right: 5px;
    width: auto;
  }
  .img-symbol {
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* Adjust for responsiveness */
  }
`;