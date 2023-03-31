import React, { useState } from 'react'
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const BarcodeSnannerQr = () => {
  const [encenderFlash, setEncenderFlash] = useState(false)  
  return (
    <div> 
      <button onClick={() => {setEncenderFlash(!encenderFlash)}}>Enceder flash</button>
       <BarcodeScannerComponent
    width={500}
    height={500}
    delay={0}
    onUpdate={(err, result) => {
      if (result) alert(result);
    }}
    torch = {encenderFlash}
  />
  </div>
  )
}

export default BarcodeSnannerQr