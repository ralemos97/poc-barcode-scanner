
import './App.css';
import QuaggaScanner from './scanners/QuaggaScanner';

import ScanbotWebSDK from './scanners/ScanbotWebSDK';

function App() {
  return (
    
    <div className="App">
        {/* <BarcodeScanner onScanSuccess={(e) => {alert("Lectura realizada HTML5-QRCode: " + JSON.stringify(e))}}/> */}
        {/* <ScanbotWebSDK/> */}
        <QuaggaScanner/>
    </div>
    
  );
}

export default App;
