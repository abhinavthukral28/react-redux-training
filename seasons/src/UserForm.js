import React from "react";

class Clock extends React.Component {
  state = { time: null };
  componentDidMount() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
      this.setState({ time: this.time });
    }, 1000);
  }

  render() {
    return <div className="time">The time is: {this.state.time}</div>;
  }
}

export default Clock;
