# Episode 1 : Inception

## React is a Library — What Does That Actually Mean?

1. **React can be integrated into specific parts of a webpage**
   You don't need to build your whole application with React. You can apply React to a single div or section of your page while the rest of the site continues to use traditional HTML, CSS, or JavaScript.

2. **It supports partial adoption**
   React can be used to enhance just a small part of your project (like a widget or a form) without rewriting the entire application.

3. **React can be loaded via a CDN**
   You can inject React into your app by including React and ReactDOM scripts through a CDN. This allows you to use React without installing it via npm or setting up a build tool like Webpack.

---

## 1. HTML Way of Writing Code

```html
<body>
    <div id="root">
        <h1>Hello World!</h1>
    </div>
</body>
```

---

## 2. JavaScript Way of Writing Code

```html
<body>
    <div id="root"></div>
    <script>
        // ---------- Create the element -------------
        // Create a heading element using the createElement()
        const heading = document.createElement("h1");

        // Insert the HTML into the heading variable
        heading.innerHTML = "Hello World from JavaScript!";

        // ---------- Add the element to the tag ------
        // Get the root Element using the id
        const root = document.getElementById("root");

        // Add the heading as a child to the root
        root.appendChild(heading);
    </script>
</body>
```

---

## 3. React Way of Writing Code

```html
<body>
    <!-- CDN are Content Delivery Networks -->
    <!-- These are the websites where React has been hosted and we are pulling the code into our code. -->

    <!-- We use tags to get these into our code -->
    <!-- Find the tags at the link -->
    <!-- https://legacy.reactjs.org/docs/cdn-links.html -->

    <!-- The following are the tags -->
    <!-- react.development.js is the core of react -->
    <script 
        crossorigin 
        src="https://unpkg.com/react@18/umd/react.development.js">
    </script>

    <!-- react-dom.development.js is the library used for DOM operations
         it is required to modify the DOM  -->
    <script 
        crossorigin 
        src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
    </script>

    <!-- There are 2 types of Developer 
         1. Building the React Library
         2. Building the React Applications. 
    -->

    <div id="root"></div>
    <script>
        /* React code creating element using React Library */
        const heading = React.createElement("h1", {}, "Hello World From React!");

        /* Now we have to modify the DOM using the React DOM Library */
        const root = ReactDOM.createRoot(document.getElementById("root"));
        
        /* Place the heading in the root */
        root.render(heading);
        
    </script>
</body>
```

---

## 4. Creating React App

### In App.js

```js
/* React code creating element using React Library
 * {} is the place where we give attributes to the tags
 */
const heading = React.createElement(
    "h1", 
    {   id : "heading",     // Props -> attributes
        xyz : "abc"
    }, 
    "Hello World From React!" // Props -> children
);

// heading is an object of JavaScript 
// having attributes and children
console.log(heading);

// Now we have to modify the DOM using the React DOM Library
const root = ReactDOM.createRoot(document.getElementById("root"));

// Convert the heading object and place it in the root
root.render(heading);

// When we perform a certain operation in our page in the browser then the DOM changes 
// i.e the DOM tree changes and it is the most expensive operation in the browser.

// React works on the principle that we do not write a lot of HTML in our program 
// Instead, manipulate the DOM using JavaScript
```

### In index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div id="root"></div>

    <!-- react.development.js is the core of react -->
    <script 
        crossorigin 
        src="https://unpkg.com/react@18/umd/react.development.js">
    </script>

    <!-- react-dom.development.js is the library used for DOM operations
         it is required to modify the DOM  -->
    <script 
        crossorigin 
        src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
    </script>

    <script src="./App.js"></script>
</body>
</html>
```

### In index.css

```css
h1 {
    color: red;
}
```

---

## 5. Create a Complex React App

### In App.js

```js
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
         React.createElement("h2", {}, "I am H2 Tag")]
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
         React.createElement("h2", {}, "I am H2 Tag")]),
     React.createElement("div", { id: "child3" },
        [React.createElement("h1", {}, "I am H1 Tag"),
         React.createElement("h2", {}, "I am H2 Tag")])
    ]
);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(par2);

// JSX is there to make our life much better
```

### In index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App Complex</title>
</head>
<body>
    <h1>Hello Before the Root</h1>
    <div id="root">
        <!-- If there is some tag here it will be replaced by Root.render() -->
    </div>
    <div id="root1"></div>    
    <div id="root2"></div>
    <h1>Hello After the Root</h1>

    <!-- If we import the file later it will not work -->
    <!-- First Import the React CDN -->
    <script 
        crossorigin 
        src="https://unpkg.com/react@18/umd/react.development.js">
    </script>
    <script 
        crossorigin 
        src="https://unpkg.com/react-dom@18/umd/react-dom.development.js">
    </script>

    <!-- Import the Javascript file -->
    <script src="./App.js"></script>
</body>
</html>
```

### In index.css

```css
/* Write the CSS in it */
```
