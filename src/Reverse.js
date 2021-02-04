import React from 'react';
import WithHOC from './WithHOC';

const Reverse = (props) => {
  const { value, reversed } = props;
  return (
    <div>
      <p>The word is : {value}</p>

      <p>Reversed word: {reversed}</p>
    </div>
  );
};

export default WithHOC(Reverse);
