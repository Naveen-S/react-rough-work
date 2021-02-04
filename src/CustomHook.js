import React from 'react';
import useLocalStorage from './useLocalStorage';
import useLogger from './useLogger';

const CustomHook = () => {
  const [name, setName] = useLocalStorage('name', '');
  useLogger(name);
  return (
    <input
      type='text'
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
    />
  );
};

export default CustomHook;
