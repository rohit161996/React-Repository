# Episode 3 Laying the foundation

## Creating a script to start our project in Dev Mode.
"scripts" : {
    "start" : "parcel index.html",
}

### Command to run the script
- npm run start
- npm start

## Creating a script to start our project in Production Mode.
"scripts" : {
    "build" : "parcel build index.html",
}

### Command to run the script
- npm run build
- npm build

We can see the package.json to see the scripts to run the new project.


## Need of JSX
- To avoid creating the element like the one given below, JSX is used.

- const heading = React.createElement(
    "h1", 
    { id: "heading" }, 
    "Namaste React😁");

## Difference b/w React and JSX
- React can be written without JSX, but JSX makes React code writing easier.
- JSX is not a part of React.

## Need of JSX
- JSX is a convension where we merge the Javascript and the HTML.
- JSX is not HTML inside Java Script, JSX is an HTML like or XML like syntax.
- JSX makes it easier to develop the code.

- This is not pure Java Script because it is not ES6. 
- `const jsxHeading = <h1 id="heading">Namaste React using JSX 😍</h1>;`

- JS Engine understands ES6 or ECMAScript.
- But it runs due to parser doing all the things.

- JSX code is transpiled before it reahes the JS Engine.

- Parcel tells Babel to do the Job of transpiling.

- (JSX) -> Babel -> (JS)

https://babeljs.io/

## Difference between the HTML and JSX
- In JSX there is no class it is "className".
- There is no 'single quotes'.
- Attributes are written in the camelCase.
- For multiline JSX we have to wrap it in the ();
- e.g. const jsxHeading = (```<h1 id="heading">Namaste React using JSX 😍 </h1>```);


## Components in React
There are two types of components in React:
1. Class Based Components. (Not Used)
2. Functional Components. (New Way of Writing Code)


## Functional Components
- It is a function in Java Script which is returning the JSX Component is a functional component.

const headingComponent = () => {
    return `<h1>This is a functional Component</h1>`;
}

const headingComponent = () => `<h1>This is a functional Component</h1>;

Both the above syntax are correct But use {} in the multiline components.

- Writing return is optional.

const headingComponent = () => {
    return (`<div><h1>This is a functional Component</h1></div>`);
}

const ReactElement = ();
const ReactFunctionalComponent = ()=>{ return};
const ReactFunctionalComponent = ()=> ();

- To render the Functional Component into the Page
root.render(<reactFunctionalComponent/>);

- To get a component somewhere in the code we can use <reactFunctionalComponent/> anywhere in the code to render.
- It can be used inside a components as well.


## Component Composition
- Writing the Component inside the Component is called Component Composition.

- We can write function also instead of the Arrow Function, but it is necessary to return it.
const HeadingComponent = function() => {
    return (
        `<div id="container"> <Title/> <h1>This is a functional Component</h1> </div> `
    );
}

## Super power of JSX 
- We can write any expression of Java Script in the {}.
- We can write a react element inside a react element as well.

## Cross Site Scripting
- If somebody wants to run a java script to someone's code it is called cross site scripting.
- It steels cookies, sessions.
So, the {element} will not directly run the code it will sanitize the data. It protects cross site scripting.

## NOTE:
- The functional component can also be written like:
`<Title/>` or `<Title></Title>`

- We can also call a function inside a JSX.
{Title()}


## Why code is readable?
- Due to JSX.

## Why Code is Faster?
- Due to the Bundle.



