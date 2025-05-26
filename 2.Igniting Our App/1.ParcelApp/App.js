import React from "react";
import ReactDOM from "react-dom/client";

// -------------------------- Nested Div --------------------------------
const par = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement(
            "h1",
            {key : "h1-1"},
            "I am H1 Tag"
        )
    )
);

console.log(par);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(par);

// ---------------------- Array of Children ------------------------------
const par1 = React.createElement(
    "div",
    { id: "parent1" },
    React.createElement(
        "div",
        { id: "child1" },
        [React.createElement("h1", {key : "h1-2"}, "I am H1 Tag"),
        React.createElement("h2", {key : "h1-3"}, "I am H2 Tag")
        ]
    )
);


const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(par1);


// ---------------------- Array of Children ------------------------------
const par2 = React.createElement(
    "div",
    { id: "parent2" },
    [React.createElement("div", { id: "child2", key:"child2" },
        [React.createElement("h1", {key : "h1-4"}, "I am H1 Tag"),
        React.createElement("h2", {key : "h1-5"}, "I am H2 Tag")]
    ),
    React.createElement("div", { id: "child3", key:"child3"  },
        [React.createElement("h1", {key : "h1-6"}, "I am H1 Tag"),
        React.createElement("h2", {key : "h1-7"}, "I am H2 Tag")]
    )
    ]
);


const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(par2);

// JSX is there to make our life much better

