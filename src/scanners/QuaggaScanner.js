import React, { useEffect } from 'react'
import Quagga from 'quagga-scanner';

const QuaggaScanner = () => {

  useEffect(() => {
    Quagga.init({
      "inputStream": {
        "type": "LiveStream",
        "constraints": {
          "width": { "min": 450 },
          "height": { "min": 300 },
          "facingMode": "environment",
          "aspectRatio": { "min": 1, "max": 4 }
        },
        target: document.querySelector('#yourElement')
      },
      "locator": {
        "patchSize": "medium",
        "halfSample": true
      },
      "numOfWorkers": 2,
      "frequency": 10,
      "decoder": {
        "readers": ["ean_reader"]
      },
      "locate": true
    }, function(err) {
        if (err) {
            console.log(err);
            return
        } 
        console.log("Initialization finished. Ready to start");
        Quagga.start();
    });

    Quagga.onDetected((r) => {

      alert("Scan realizado : " + JSON.stringify(r) )

    });

  }, [])

  return (
    <div id="yourElement">QuaggaScanner</div>
  )
}

export default QuaggaScanner