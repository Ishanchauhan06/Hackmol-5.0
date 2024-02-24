import React, { useState } from "react";
import QrReader from "react-qr-scanner";

const previewStyle = {
  height: 700,
  width: 600,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Scanner = () => {
  const [result, setResult] = useState("No result");
  const handleScan = (data) => {
    if (data?.text) {
        setResult(data.text);
        alert('QR code is scanned successfully')
    }
  };

  const handleError = (err) => {
    alert('Error occured', err)
    console.error(err);
  };

  return (
    <div className="qr-reader">
      <h1>Scan QR Code</h1>
      <QrReader
        delay={100}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <h1>OUTPUT:</h1>
      <p>{result}</p>
    </div>
  );
};

export default Scanner;
