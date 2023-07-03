import React from "react";
import ReactDOM from "react-dom/client";

// jsx
const jsxheading = (
  <h1 className="head" tabIndex="5">
    Hiii Vaibhav
  </h1>
);

// console.log(jsxheading);
// const root = ReactDOM.createRoot(document.getElementById("root")); 
// root.render(jsxheading);


// react componant
const Headingcomponant = () =>(
<div id="container">
  <title/>
  <h1 className="heading"> React is a functinal componant</h1>
</div>
)
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(<Headingcomponant/>);
