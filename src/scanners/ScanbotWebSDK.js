import React, { useEffect } from 'react'
import ScanbotSDK from 'scanbot-web-sdk'

const ScanbotWebSDK = () => {
  useEffect(() => {
    debugger
    ScanbotSDK.initialize({
      licenseKey: '',
      engine: "/",
    }).then(r => {
      const config = {
        onBarcodesDetected: (e)  => {
          alert("Scan realizado : " + JSON.stringify(e) )
        },
        containerId: 'barcode-scanner-view',
      };

      r.createBarcodeScanner(config)
    });

  }, [])

  return (
    <div
    id='barcode-scanner-view'
    style={{ height: "70%", width: "70%" }}>
  </div>  
  )
}

export default ScanbotWebSDK