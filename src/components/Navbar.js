import React from 'react'
import styled from 'styled-components'
import {BsCoin} from "react-icons/bs"
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <Container>
        <StyledLink to="/">
        <div className='navbar'>
            <div className='nav-items'>
                <BsCoin className='icon'/>
                <p>Crypto<span className='purple'>Pulse</span></p>
                <p>Products</p>
                <p>Prices</p>
                <p>Company</p>
            </div>
            <button>
                GET STARTED
            </button>
        </div>
        </StyledLink>
    </Container>
  )
}

const Container = styled.div`
background-color: #393737;
font-family: Verdana, Geneva, Tahoma, sans-serif;
    .navbar{
        height: 9vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: white;
        padding: 0px 30px;
        .nav-items{
            display: flex;
            align-items: center;
            .icon{
                font-size: 2rem;
                fill: #fabe65;
                padding-right: 10px;
            }
            .purple{
                color: #e17c5c;
            }
            p{
                margin-right: 25px;
                color: #fffef1;
            }
        }
        button {
            border-radius: .25rem;
            text-transform: uppercase;
            font-weight: 400;
            padding-left: 25px;
            padding-right: 25px;
            color: #f2b132;
            -webkit-clip-path: polygon(0 0,0 0,100% 0,100% 0,100% calc(100% - 15px),calc(100% - 15px) 100%,15px 100%,0 100%);
            clip-path: polygon(0 0,0 0,100% 0,100% 0,100% calc(100% - 15px),calc(100% - 15px) 100%,15px 100%,0 100%);
            height: 40px;
            font-size: 0.7rem;
            line-height: 14px;
            letter-spacing: 1.2px;
            transition: .2s .1s;
            background: radial-gradient(190.82% 190.82% at 50% 100%, rgba(254, 173, 15, 1) 0%, rgba(168, 112, 64, 0.62) 18.09%);
            border: 1px solid #a17731;
            overflow: hidden;
                &:hover {
                cursor: pointer;
                transition: all .3s ease-in;
                padding-right: 30px;
                padding-left: 30px;
                }
            }
    }
    @media screen and (max-width: 640px){
        .navbar{
            button{
                display: none;
            }
        }
    }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;