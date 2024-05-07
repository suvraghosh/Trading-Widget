import React, {useState,useEffect} from "react";
import axios from "axios";
import { Routes,Route} from "react-router-dom";
import Coins from "./components/Coins";
import Coin from "./routes/Coin";
import TradingViewWidget from "./components/TradingViewWidget";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer/Footer"
import TradingNews from "./components/TradingNews";
import { HashLoader } from 'react-spinners';
import './index.css';

function App() {
  const [coins,setCoins] = useState([]);

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en"


  useEffect(()=>{
    axios.get(url)
    .then((res)=>{
      setCoins(res.data)
      // console.log(res.data[0]);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
        {
          loading ? (
            <div className="loader-container">
              <HashLoader color="#36d7b7" loading={loading} size={40} />
            </div>
          ) : (
            <>    
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/news" element={<TradingNews />} />
                <Route path="/crypto" element={<Coins coins={coins} />} />
                <Route path="/stocks" element={<TradingViewWidget />} />
                <Route path="coin" element={<Coin />}>
                  <Route path=":coinId" element={<Coin />} />
                </Route>
              </Routes>
              <Footer />
            </>
          )
        }
    </>
  );
}

export default App;
