import React from "react";
import ReactDom from "react-dom/client";
import CounterUsingClass from "./playground/counterUsingClass";

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteIndividualOption =
      this.handleDeleteIndividualOption.bind(this);
    this.state = { options: [] };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {}

    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      console.log("componentDidUpdate");
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteIndividualOption(optionToRemove) {
    this.setState((preState) => ({
      options: preState.options.filter((option) => {
        return optionToRemove !== option;
      }),
    }));
  }

  handlePick() {
    let randomIndex = Math.floor(Math.random() * this.state.options.length);
    let chosenOption = this.state.options[randomIndex];
    alert(chosenOption);
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter valid value";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists!";
    }
    this.setState((prevState) => ({
      options: prevState.options.concat([option]),
    }));
  }

  render() {
    const subtitle = "Put your life in the hands of the computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteIndividualOption={this.handleDeleteIndividualOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};
Header.defaultProps = {
  title: "Indecision",
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      {props.options.map((item) => (
        <Option
          key={item}
          option={item}
          handleDeleteIndividualOption={props.handleDeleteIndividualOption}
        />
      ))}
      <button
        onClick={props.handleDeleteOptions}
        disabled={props.options.length === 0}
      >
        Remove all
      </button>
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      <ul>
        <li>
          {props.option}
          <button
            onClick={(e) => {
              props.handleDeleteIndividualOption(props.option);
            }}
          >
            x
          </button>
        </li>
      </ul>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      error: undefined,
    };
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let optionText = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(optionText);

    this.setState(() => ({ error: error }));
    event.target.elements.option.value = "";
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="option" maxLength={10} />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

const root = ReactDom.createRoot(document.getElementById("app"));
//root.render(<IndecisionApp />);
root.render(<CounterUsingClass />);
