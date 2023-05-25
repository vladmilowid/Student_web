// реализация жизнненго цикла 

import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log('constructor');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    console.log('render');
    return (
      <button onClick={this.handleClick}>
        Click me ({this.state.counter})
      </button>
    );
  }
}

export default Button;
