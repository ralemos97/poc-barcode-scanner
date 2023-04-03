
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import BarcodeScanner from './scanners/BarcodeScanner';
import BarcodeSnannerQr from './scanners/BarcodeSnannerQr';
import BarcodeZXing from './scanners/BarcodeZXing';
import QuaggaScanner from './scanners/QuaggaScanner';

import ScanbotWebSDK from './scanners/ScanbotWebSDK';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter basename='poc-barcode-scanner'>
      
        <NavBar />
        <Routes >
            <Route path="/" element={<BarcodeSnannerQr/>} />
            <Route path="/quagga" element={<QuaggaScanner />} />
            <Route path="/html5qr" element={ <BarcodeScanner onScanSuccess={(e) => {alert("Lectura realizada HTML5-QRCode: " + JSON.stringify(e))}}/> } />
            <Route path="/xzing" element={<BarcodeZXing/> } />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
