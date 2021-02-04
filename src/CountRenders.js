import React, { useEffect, useState, useRef } from 'react';

const CountRenders = () => {
  const [times, setTimes] = useState(0);
  const [name, setName] = useState('');
  const renderRef = useRef(0);

  useEffect(() => {
    // This will cause infinite loop.
    // setTimes((prevTimes) => prevTimes + 1);
    renderRef.current = renderRef.current + 1;
  });

  return (
    <div>
      <input
        type='text'
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <p>Name: {name}</p>
      <p> Times rerendered : {renderRef.current}</p>
    </div>
  );
};

export default CountRenders;
