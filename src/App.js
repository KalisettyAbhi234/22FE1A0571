import React, { useState, useEffect } from "react";
import UrlForm from "./Component/UrlForm";
import UrlList from "./Component/UrlList";
import Logger from "./Component/Logger";
import "./styles/style.css";

const App = () => {
  const [urls, setUrls] = useState([]);
  const [logData, setLogData] = useState(null);

  const addUrl = (originalUrl, expiry, keyword) => {
    const shortCode = keyword || Math.random().toString(36).substring(2, 8);
    const shortUrl = `${window.location.origin}/${shortCode}`;

    
    let expiryTimestamp = null;
    if (expiry) {
      const parts = expiry.split(" "); 
      const value = parseInt(parts[0]);
      const unit = parts[1]?.toLowerCase();

      let ms = 0;
      if (unit.includes("day")) ms = value * 24 * 60 * 60 * 1000;
      else if (unit.includes("hour")) ms = value * 60 * 60 * 1000;
      else if (unit.includes("min")) ms = value * 60 * 1000;

      expiryTimestamp = Date.now() + ms;
    }

    const newUrl = {
      id: Date.now(),
      originalUrl,
      shortUrl,
      expiry: expiryTimestamp,
      keyword: keyword || "Auto",
      expired: false,
    };

    setUrls((prev) => [...prev, newUrl]);
    setLogData(newUrl); 
  };

  
  Logger("URL_ADDED", logData);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setUrls((prevUrls) =>
        prevUrls.map((url) =>
          url.expiry && Date.now() > url.expiry
            ? { ...url, expired: true }
            : url
        )
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <h1>URL Shortener</h1>
      <UrlForm onAddUrl={addUrl} />
      <UrlList urls={urls} />

      <div className="logs">
        <h2>Added Url Logs</h2>
        <ul>
          {JSON.parse(localStorage.getItem("logs") || "[]").map((log, idx) => (
            <li key={idx}>
              <strong>{log.event}</strong> at {log.time} <br />
              <code>{JSON.stringify(log.data)}</code>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;