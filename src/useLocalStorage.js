import React, { useState, useEffect } from 'react';

const getItemForKey = (key, initialValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) {
    return savedValue;
  }
  if (initialValue instanceof Function) {
    return initialValue();
  }
  return initialValue;
};

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getItemForKey(key, initialValue);
  });

  useEffect(() => {
    let val = JSON.stringify(value);
    if (val) {
      localStorage.setItem(key, val);
    }
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
