
import './App.css';
import BarcodeSnannerQr from './scanners/BarcodeSnannerQr';
import BarcodeZXing from './scanners/BarcodeZXing';
import QuaggaScanner from './scanners/QuaggaScanner';

import ScanbotWebSDK from './scanners/ScanbotWebSDK';

function App() {
  return (
    
    <div className="App">
        {/* <BarcodeScanner onScanSuccess={(e) => {alert("Lectura realizada HTML5-QRCode: " + JSON.stringify(e))}}/> */}
        {/* <ScanbotWebSDK/> */}
        {/* <QuaggaScanner/> */}
        {/* <BarcodeSnannerQr/> */}
        <BarcodeZXing/>
    </div>
    
  );
}

export default App;
