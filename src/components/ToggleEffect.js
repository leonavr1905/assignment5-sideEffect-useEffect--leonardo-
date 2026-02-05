import { useState, useEffect } from 'react';

const ToggleEffect = () => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (isOn) {
      console.log("Effect is running");
    }
  }, [isOn]);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>Task 5: Conditional useEffect</h3>
      <button onClick={() => setIsOn(!isOn)}>
        Status: {isOn ? "ON" : "OFF"}
      </button>
      <p>{isOn ? "Cek console untuk log!" : "Status OFF, log tidak muncul."}</p>
    </div>
  );
};

export default ToggleEffect;