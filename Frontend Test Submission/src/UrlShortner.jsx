import React, { useState } from 'react';
import Link from 'react';
const UrlShortner = () => {
    const [url, setUrl] = useState("");
    const [expiryTime, setExpiryTime] = useState(0);
    const [keyword, setKeyword] = useState("");
    const [shortUrl, setShortUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const baseUrl = 'https://short.ly';
        if(keyword.trim() === "") {
            const generatedUrl = Math.random(32).toString(32).substring(2,7);
            setShortUrl(`${baseUrl}/${generatedUrl}`);
        }
        else {
            setShortUrl(`${baseUrl}/${keyword}`);
        }
        
        
        
        setUrl("");
        setExpiryTime("");
        setKeyword("");
    };
    return (
        <div>
            <h1>Url Shortener</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={url} placeholder='Enter original url' required onChange={(e) => setUrl(e.target.value)}/>
                <input type="number" defaultValue="30" value={expiryTime} placeholder='Enter Expiry Time (in minutes)' onChange={(e) => setExpiryTime(e.target.value)}/>
                <input type="text" value={keyword} placeholder='Enter keyword' onChange={(e) => setKeyword(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        <p>{shortUrl}</p>
        </div>
    )
}

export default UrlShortner;