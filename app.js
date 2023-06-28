import React from "react";
import reactDom from "react-dom";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
    React.createElement("h3", {}, "I am a h3 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
    React.createElement("h3", {}, "I am a h3 tag"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// const heading = React.createElement("h1", {id: "heading"}, "hello world from React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
