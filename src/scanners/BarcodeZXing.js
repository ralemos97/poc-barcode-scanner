import React from 'react'
import { useZxing } from "react-zxing";

const BarcodeZXing = () => {
  const {
    ref,
    torch: { on, off, isOn, isAvailable },
  } = useZxing({
    onResult : (r) => {
      alert(r.getText());
    }
  });

  return (
    <>
      <video ref={ref} />
      {isAvailable ? (
        <button onClick={() => (isOn ? off() : on())}>
          {isOn ? "Turn off" : "Turn on"} torch
        </button>
      ) : (
        <strong>Unfortunately, torch is not available on this device.</strong>
      )}
    </>
  );
}

export default BarcodeZXing