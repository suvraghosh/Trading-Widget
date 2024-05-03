import React , {useState} from 'react'

import './Header.css'
// import search from '../../Assets/search.png'

import  { FaBars } from 'react-icons/fa'; // Import arrow up icon from react-icons library
const Header = () => {
    
    const [navLeft, setNavLeft] = useState('-100%');
  
    const openToggle = () => {
      setNavLeft('0%');
    };
  
    const closeToggle = () => {
      setNavLeft('-100%');
    };

  return (    
    <div className='head'>    {/* Header div start */}
        {/* Header logo */}
        <div className="logo">
            <a href='/#'><h1>Trade<span>Hub</span></h1></a>
        </div>
        <button className="open-btn" onClick={openToggle}> <FaBars /></button>
        {/* Navlinks */}
        <nav id='mainNav' style={{ left: navLeft }}>
            <div className="navlinks">
                <button className="close-btn" onClick={closeToggle}>X</button>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/stocks'>Stocks</a></li>
                    <li><a href='/crypto'>Crypto</a></li>
                    <li><a href='/news'>News</a></li>
                    <li><a href='/#'>About Us</a></li>
                    <li><a href='/#'>Pricing</a></li>   
                </ul>
            </div>
            {/* Header search and button */}
            <div className="head-search-btn">
                <div className="btn-account-div">
                    <button className='btn-account'>Get A Demat Account</button>
                </div> 
            </div>
        </nav>
    </div>
  )
}

export default Header