import React, { useState } from 'react'
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const BarcodeSnannerQr = () => {
  const [encenderFlash, setEncenderFlash] = useState(false)  
  return (
    <div> 
       <BarcodeScannerComponent
          width={500}
          height={500}
          delay={0}
          onUpdate={(err, result) => {
            if (result) alert(result);
          }}
          torch = {encenderFlash}
        />
      <button onClick={() => {setEncenderFlash(!encenderFlash)}}>Enceder flash</button>
  </div>
  )
}

export default BarcodeSnannerQr