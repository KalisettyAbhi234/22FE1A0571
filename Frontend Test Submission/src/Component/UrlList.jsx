import React from "react";

const UrlList = ({ urls }) => {
  return (
    <div className="url-list">
      <h2>Shortened Link</h2>
      {urls.length === 0 ? (
        <p>No links added so far....</p>
      ) : (
        <ul>
          {urls.map((url) => (
            <li key={url.id}>
              <p>
                <strong>Original Link:</strong>{" "}
                <a
                  href={url.originalUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: url.expired ? "gray" : "blue" }}
                >
                  {url.originalUrl}
                </a>
              </p>
              <p>
                <strong>Shortened Link:</strong>{" "}
                {url.expired ? (
                  <span style={{ color: "red" }}>Expired</span>
                ) : (
                  <a href={url.originalUrl} target="_blank" rel="noreferrer">
                    {url.shortUrl}
                  </a>
                )}
              </p>
              <p>
                <strong>Expiry:</strong>{" "}
                {url.expiry
                  ? new Date(url.expiry).toLocaleTimeString()
                  : "30"}
              </p>
              <p>
                <strong>Keyword:</strong> {url.keyword}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UrlList;
