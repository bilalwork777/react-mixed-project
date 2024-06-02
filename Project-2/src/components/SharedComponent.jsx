// project-2/src/SharedComponent.js
import React, { useState } from 'react';

const SharedComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
        <p>shared components Project 2</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default SharedComponent;