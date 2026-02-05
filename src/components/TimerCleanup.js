import { useState, useEffect } from 'react';

const TimerCleanup = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>Task 4: Timer with Cleanup</h3>
      <p>Waktu: {seconds} detik</p>
    </div>
  );
};

export default TimerCleanup;