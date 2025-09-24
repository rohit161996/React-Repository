import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement(render)
// Core of react
const heading = React.createElement("h1", { id: "heading" }, "Namaste React😁");

// When we render it to the DOM => It becomes HTML element
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

// ---------------------------------------------------------------------------------------- //

// React Element using JSX
// JSX code is transpiled before it reahes the JS Engine.
// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxHeading = (
    <h1 id="heading">
        Namaste React using JSX 😍
    </h1>);

root.render(jsxHeading);

// ---------------------------------------------------------------------------------------- //
// Functional Component
const Title = () => {
    return <h1>This is a Title Component</h1>;
}

const number = 10000;

// Functional Component
const HeadingComponent = () => {
    return (
        <div id="container">
            {number}
            {100+200}
            {console.log("djvsdjvnsdjknvjksdnvjknsd")}
            <Title/>
            <h1>This is a functional Component</h1>
        </div>
    );
}

root.render(<HeadingComponent/>);

// ---------------------------------------------------------------------------------------- //

const element = <span>Yo Yo Honey Singh</span>

// Functional Component
const Title1 = (
    <div>
        {element}
        <h1>This is a Title Component</h1>
    </div>
);

const number1 = 10000;

// Functional Component
const HeadingComponent1 = () => {
    return (
        <div id="container">
            {number1}
            {100+200}
            {console.log("djvsdjvnsdjknvjksdnvjknsd")}
            {Title1}
            <h1>This is a functional Component</h1>
        </div>
    );
}

root.render(<HeadingComponent1/>);