import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router.js";
import "./styles.css";

function App() {
  return <div className="App">Hi</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
