/* React code creating element using React Library */
// {} is the place where we give attributes to the tabs
// const heading = React.createElement("h1", {}, "Hello World From React!");
const heading = React.createElement(
    "h1", 
    {   id : "heading",     // Props -> attributes
        xyz : "abc"
    }, 
    "Hello World From React!");     // Props -> children

// heading is an object of Java script 
// having attributes
// having children 
console.log(heading);

/* Now we have to modify the DOM using the React DOM Library */
const root = ReactDOM.createRoot(document.getElementById("root"));

/* Convert the heading object and place it in the root */
root.render(heading);


// When we perform a certain operation in our page in the browser then the DOM changes 
// i.e the DOM tree changes it is the most expensive operation in the browser.

// React works on the principle that do not write a lot of HTML in our program 
// Manipulate the DOM using the Javascript












