import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
const Ref = () => {
  // const inputRef = React.createRef('');
  const inputRef = useRef('');

  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <div>Refs in react</div>
      <label htmlFor='refInput'> Name </label>
      <input type='text' name='refInput' ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
      <div>
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
};

export default Ref;
