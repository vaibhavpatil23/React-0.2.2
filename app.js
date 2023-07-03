import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", { id: "heading" }, "vaibhav patil");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// jsx
const jsxheading = <h1 className="head" tabIndex="5">Hiii Vaibhav</h1>;

console.log(
  jsxheading
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);
