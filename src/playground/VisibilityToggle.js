import React from "react";

export default class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }

  toggleVisibility() {
    console.log("visibility called");
    this.setState((preState) => {
      return { visibility: !preState.visibility };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && <p>This are some details</p>}
      </div>
    );
  }
}
