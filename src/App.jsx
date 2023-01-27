import { useState } from "react";
import "./index.scss";
import QRCode from "qrcode";

function App() {
  const [url, setUrl] = useState();
  const [qrCode, setQrCode] = useState();

  const handleGenerateQrCode = () => {
    QRCode.toDataURL(url, (err, url) => {
      if (err) return console.log(err);

      console.log(url);
      setQrCode(url);
    });
  };

  const handleReset = () => {
    setQrCode();
  };

  return (
    <div>
      <h1 className="title">QR Code Generator</h1>
      <article className="l-design-widht">
        <div className="card">
          <h2>
            <svg className="icon" aria-hidden="true">
              <use xlink:href="#icon-coffee" href="#icon-coffee" />
            </svg>
            Enter URL
          </h2>
          <label className="input">
            <input
              className="input__field"
              type="text"
              placeholder="e.g. https://google.com"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
            />
          </label>
          <div className="button-group">
            <button onClick={handleGenerateQrCode}>Generate</button>
            <button type="reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </article>
      {qrCode && (
        <>
          <img className="qr-code" src={qrCode} alt="qrCode"></img>
          <a className="download" href={qrCode} download="qrCode.png">
            Download
          </a>
        </>
      )}

      <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
        <symbol id="icon-coffee" viewBox="0 0 20 20">
          <title>icon-coffee</title>
          <path
            fill="currentColor"
            d="M15,17H14V9h3a3,3,0,0,1,3,3h0A5,5,0,0,1,15,17Zm1-6v3.83A3,3,0,0,0,18,12a1,1,0,0,0-1-1Z"
          />
          <rect
            fill="currentColor"
            x="1"
            y="7"
            width="15"
            height="12"
            rx="3"
            ry="3"
          />
          <path
            fill="var(--color-accent)"
            d="M7.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,0,1-1.79.89Z"
          />
          <path
            fill="var(--color-accent)"
            d="M3.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,1,1-1.79.89Z"
          />
          <path
            fill="var(--color-accent)"
            d="M11.07,5.42a5.45,5.45,0,0,1,0-4.85,1,1,0,0,1,1.79.89,3.44,3.44,0,0,0,0,3.06,1,1,0,1,1-1.79.89Z"
          />
        </symbol>
      </svg>
    </div>
  );
}

export default App;
