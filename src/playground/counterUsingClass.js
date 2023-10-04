import React from "react";

export default class CounterUsingClass extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    try {
      const count = parseInt(localStorage.getItem("count"), 10);

      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (error) {
      console.log("error reading count");
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  addOne() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }

  minusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }

  reset() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

CounterUsingClass.defaultProps = {
  count: 0,
};
