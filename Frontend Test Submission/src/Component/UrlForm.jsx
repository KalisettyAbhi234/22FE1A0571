
import React, { useState } from "react";

const UrlForm = ({ onAddUrl }) => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [expiry, setExpiry] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!originalUrl.trim()) {
      alert("Enter a valid URL");
      return;
    }

    onAddUrl(originalUrl, expiry, keyword);
    setOriginalUrl("");
    setExpiry("");
    setKeyword("");
  };

  return (
    <form className="url-form" onSubmit={handleSubmit}>
      <input
        type="url"
        placeholder="Enter original URL"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Expiry"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
      />
      <input
        type="text"
        placeholder="Keyword (optional)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UrlForm;
