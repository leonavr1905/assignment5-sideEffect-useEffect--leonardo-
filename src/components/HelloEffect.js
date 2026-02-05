import { useEffect } from 'react';

const HelloEffect = () => {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>Task 1: First useEffect (Run Once)</h3>
      <p>Cek console untuk melihat pesan "Component Mounted".</p>
    </div>
  );
};

export default HelloEffect;