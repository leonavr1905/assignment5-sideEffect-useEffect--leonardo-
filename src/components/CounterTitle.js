import { useState, useEffect } from 'react';

const CounterTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count Changed");
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>Task 2 & 3: Toggle Message & Document Title</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default CounterTitle;