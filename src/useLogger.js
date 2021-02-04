import React, { useEffect } from 'react';

const useLogger = (name) => {
  useEffect(() => {
    console.log(name);
  }, [name]);
  return <div></div>;
};

export default useLogger;
