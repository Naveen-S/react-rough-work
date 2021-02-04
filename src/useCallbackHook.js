import React, { useState, useCallback, useMemo } from 'react';
import ListNumbers from './ListNumbers';

const useCallbackHook = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(true);

  const themeStyle = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#fff' : '#000',
  };

  // Even when the dark state changes the function get recreated
  // due to referential equality, this triggers the useEffect of List numbers component
  // which is unneccessary update. To avoid we can use useCallback hook

  // without useCallback
  /*   const getNumbers = () => {
    return [number, number + 1, number + 2];
  }; */

  // with useCallback
  const getNumbers = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  // To do exact same thing with useMemo
  /*  const getNumbers = useMemo(() => {
    return () => {
      return [number, number + 1, number + 2];
    };
  }, [number]);
 */

  // So the difference between useMemo and useCallback is that useMemo returns the value of the function, whereas useCallback returns the function itself!

  return (
    <div style={themeStyle}>
      <button
        onClick={() => {
          setDark((prevDark) => !prevDark);
        }}>
        Toggle Theme
      </button>
      <input
        type='number'
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />

      <ListNumbers getNumbers={getNumbers} />
    </div>
  );
};

export default useCallbackHook;
