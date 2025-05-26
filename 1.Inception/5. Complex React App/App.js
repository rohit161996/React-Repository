// <div id="parent">
//     <div id="children">
//         <h1> I am H1 tag</h1>
//     </div>
// </div>

/*
*  par is a Object, it is a ReactElement
*  ReactElement is an Object which the browser understands
*  ReactElement(Object) => HTML(Browser Understands)
*/

// -------------------------- Nested Div --------------------------------
const par = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        React.createElement(
            "h1",
            {},
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
        [React.createElement("h1", {}, "I am H1 Tag"),
        React.createElement("h2", {}, "I am H2 Tag")
        ]
    )
);


const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(par1);


// ---------------------- Array of Children ------------------------------
const par2 = React.createElement(
    "div",
    { id: "parent2" },
    [React.createElement("div", { id: "child2" },
        [React.createElement("h1", {}, "I am H1 Tag"),
        React.createElement("h2", {}, "I am H2 Tag")]
    ),
    React.createElement("div", { id: "child3" },
        [React.createElement("h1", {}, "I am H1 Tag"),
        React.createElement("h2", {}, "I am H2 Tag")]
    )
    ]
);


const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(par2);

// JSX is there to make our life much better






