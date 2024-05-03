import React, { useEffect, useRef } from 'react';

const TradingNews = () => {
    const container = useRef();

    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "feedMode": "all_symbols",
          "isTransparent": false,
          "displayMode": "regular",
          "autosize": true,
          "height": 500,
          "colorTheme": "dark",
          "locale": "en"
        }
      `;
      container.current.appendChild(script);
    }, []);
  
    return (
      <div className="tradingview-widget-container" ref={container}></div>
    );
}

export default TradingNews;