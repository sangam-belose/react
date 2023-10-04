import React from "react";
import ReactDom from "react-dom/client";
import { Counter } from "./playground/counter";
import { Visiblity } from "./playground/build-it-visible";

console.log(`Running first react project!`);

let app = {
  title: "React Cart",
  subtitle: "Welcome to react shopping cart!",
  options: ["option1", "option2", "option3"],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  console.log("form submit called");
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  alert(app.options[randomNum]);
};

const Template = () => {
  return (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>
        {app.options && app.options.length > 0
          ? "here are your options!"
          : "NO options"}
      </p>
      <button disabled={app.options.length == 0} onClick={onMakeDecision}>
        What should I do?
      </button>

      {app.options.map((option, index) => (
        <li key={index}>{option}</li>
      ))}
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("app"));
root.render(<Template />);
root.render(<Visiblity />);
