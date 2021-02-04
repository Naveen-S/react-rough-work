import React, { useState, useEffect } from 'react';

const ListNumbers = ({ getNumbers }) => {
  const [items, setItems] = useState(getNumbers());

  useEffect(() => {
    console.log('update called');
    setItems(getNumbers());
  }, [getNumbers]);
  return (
    <div>
      {items.map((item, idx) => {
        return <div key={idx}> {item}</div>;
      })}
    </div>
  );
};

export default ListNumbers;
