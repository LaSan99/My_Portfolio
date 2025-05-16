import React, { useEffect } from 'react';

const FloatingRobot = () => {
  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.95/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 w-[200px] h-[200px] z-50">
      <spline-viewer url="https://prod.spline.design/UU12ilQCoLjyVNhH/scene.splinecode"></spline-viewer>
    </div>
  );
};

export default FloatingRobot; 