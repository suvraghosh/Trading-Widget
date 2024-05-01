import React from 'react';
import styled from 'styled-components';
import CoinItem from './CoinItem';
import { Link } from 'react-router-dom';
import Coin from '../routes/Coin';


export default function Coins({coins}) {
  return (
    <Container>
        <div>
            <div className='heading'>
                <p className=''>#</p>
                <p className='coin-name'>Coin</p>
                <p className=''>Price</p>
                <p className=''>24h</p>
                <p className='hide-mobile'>Market Cap</p>
                <p className='hide-mobile'>Volume</p>
            </div>

            {coins.map((coin) => (
                <StyledLink to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
                    <CoinItem coins={coin} />
                </StyledLink>
            ))}

        </div>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1140px;
  margin: auto;
  color: #ffffff;
  .heading {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    background-color: #1d2127;
    box-shadow: 0px 0px 12px #333;
    border-radius: 8px;
    margin: 2rem 1rem;
    padding: .7rem 1rem;
    font-weight: 700;
    font-size: 1rem;
  }
  .coin-name {
    margin-left: -4rem;
  }
  @media screen and (max-width: 720px) {
    .heading {
      grid-template-columns: 1fr;
    }
    .hide-mobile {
      display: none;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  /* Add other styles as needed */
`;