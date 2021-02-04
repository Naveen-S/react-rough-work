import React, { Component, PureComponent } from 'react';

const Temp = (props) => {
  console.log('In temp component', props.val);
  return <h1>{props.val}</h1>;
};

// Way 2: use pure component instead of Component
// Pure component does shallow comparison so need to be careful when using it with nested state.
export default class Pure extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      val: 1,
    };
  }

  componentDidMount() {
    // Even though the value didnt change component rerenders.
    // how to avoid this?
    setInterval(() => {
      this.setState({ val: 1 });
    }, 2000);
  }

  // Way 1
  /*
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.val === nextState.val) {
      return false;
    } else {
      return true;
    }
  }
  */

  render() {
    console.log('In class component');
    return (
      <div>
        <Temp val={this.state.val} />
      </div>
    );
  }
}
