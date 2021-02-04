import React from 'react';

const WithHOC = (WrappedComponent) => {
  const InnnerComponent = (props) => {
    const { value } = props;

    return (
      <WrappedComponent
        reversed={value.split('').reverse().join('')}
        {...props}
      />
    );
  };
  return InnnerComponent;
};

export default WithHOC;
