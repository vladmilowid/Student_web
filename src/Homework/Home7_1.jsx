import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  
// очищаем таймер
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

    render() {
        return (
            <div>
                <h1>Текущее время:</h1>
                <h2>{this.state.time}</h2>
      </div>
    );
    }
}

export default Clock;
