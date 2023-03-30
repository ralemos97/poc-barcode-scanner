import { Html5QrcodeScanner, Html5Qrcode } from "html5-qrcode";
import React, { useEffect, useRef } from "react";

const BarcodeScanner = ({ onScanSuccess, className, autoRequest = false, alternative = false, stop = false }) => {
  const permissionBtn = useRef();

  useEffect(() => {
    if (!stop) {
      if (alternative) {
        const html5qrcode = new Html5Qrcode("reader");
        html5qrcode.start(
          { facingMode: "environment" },
          { fps: 10, rememberLastUsedCamera: true, aspectRatio: 3.0 },
          onScanSuccess
        );
      } else {
        new Html5QrcodeScanner("reader", {
          fps: 10,
          rememberLastUsedCamera: true,
          aspectRatio: 3.0,
          videoConstraints: { facingMode: "environment" }, 
        }).render(onScanSuccess);
      }
    }
  }, []);

  useEffect(() => {
    if (autoRequest && !permissionBtn.current) {
      permissionBtn.current = document.getElementById("reader__camera_permission_button");
      if (permissionBtn.current) permissionBtn.current.click();
    }
  }, []);

  return (
    <div className={className}>
      {!stop && (
        <>
          <div className="anim-scan shake-vertical"></div>
          <div id="reader" className="render-camara-picking-pedidos m-2"></div>
        </>
      )}
    </div>
  );
};

export default BarcodeScanner;
