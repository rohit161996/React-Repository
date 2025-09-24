# Let's Get Hooked
## Components in Our App
```text
1. Header
   1.1. Logo 
   1.2. Nav Items

2. Body
   2.1. Search
   2.2. Restaurant  Container
        2.2.1. Restaurant Card
               2.2.1.1. Image
               2.2.1.2. Name of Restaurant
               2.2.1.3. Star Rating 
               2.2.1.4  Cuisine etc.

3. Footer
   3.1. Copyright
   3.2. Links
   3.3. Address
   3.4. Contact
```

### Cleaning the code and making modules for code
- Make seperate files for seperate components.

### Where to keep all the main code?
- In the /src folder

### Where to place all the components?
- Place all the components in a single file called /src/Components

### Where to read for react structure?
- https://legacy.reactjs.org/docs/faq-structure.html

### What name should be given to the Component file?
- Same as the component name.
- Some developers name the file as Header.js and some people name the file as Header.jsx
- It makes no difference to name file as .jsx or .js

### How to give the component in some other file?
1. Place the Component in some other file.
2. Export the component from Component file using "export default Header".
3. Import the Component in the file where you want it.

### Do not keep all the hardcoded data in the Component.
- URL links will also not be kept in the Components config/ or utils/ etc.
- file name will start from small letter.
- Export the data from the data.js file
- Import the data in the required file.

## There are 2 types of import and export
1. Named Export 
```js
export const react_object1;
export const react_object2;

import {react_object2} from file_name;
```
- Use it using the import {react_object2}

2. Default Export
```js
const react_object1;
const react_object2;

export default {react_object1, react_object2};

import Component from 'file_path'
```
- Use it as {Component.react_object2}

## Can we use default export and named export together?
- config.js
```js
const CDN_URL = "https://example.com/cdn/";
const LOGO_URL = "https://example.com/logo.jpg";

const APP_NAME = "FoodExpress";

export { LOGO_URL };        // named export
export default CDN_URL;     // default export
```

- anotherFile.js
```js
import CDN_URL, { LOGO_URL } from './config';
```

## NOTE :
- Keep your file under 100 lines, if not write another component.

## Feature 
- Button (Top rated restaurants) -> In Body
- onClick() function should change the resObj.

## NOTE:-
- We should not change the constant variable.

## Why React is fast?
- It is beacuse of the DOM Manipulation, on every refresh.
- UI Layer changes on the basis of the Data Layer.

## React Powers:-
- Normal variables do not have the power to change the DOM like let variable.
- Hooks are the special functions provided by the React to make changes to the DOM like useState().
- const cannot be modified.

## Super powerful React variable :
- State Variable - Superpowerful variable
- Functional Component - Normal Javascript Function
- React Object - Normal Javascript Object
- React Hook - Normal Javascript function 

## React Hooks :
- Normal JS Utility Functions written by Meta Developers
- Installed by node_modules.

## Two Most Important Hooks 
- useState()
  - It is used to get superpowerful state variables in react.
  - It is used to create the state of the variable, component.
  - It returns the default value if it is mentioned to the variable.
  - The value can be modified by the special function mentioned as the second argument in the const variable.
  - The function name should be in camel case starts with set and be like setVariable.
  - E.g. 
  ```js
  const [var, setVar] = useState()
  ```

- useEffect()
  - The Hook has 2 arguments :
    - Callback function
    - Array
  - The callback function is called when the event in the array is triggered.
  - The function is invoked only once when the array is empty.

## Import the Hooks
- These are imported from the react package.
```js
   import {useState} from "react";

   const [listOfRestaurants] = useState([null]);
   const [listOfRestaurants] = useState([ data : {} ]);

 ```

## Pass the value of the state variable changed in the function
```js
setListOfRestaurants(filteredList);
```

## Whenever the state variable changes React re-renders the component.

## React makes the DOM operations fast with the help of hooks.

## Reconsiliation Algorithm (React Fibre):
- React makes the Virtual DOM from the HTML code provided, Virtual DOM is a collection of React Elements, like React.elements().
- Diff Algorithm comes into picture and it calculates the difference between the Old Virtual DOM and the New Virtual DOM.
- React Fibre or the Reconsiliation Algorithm then renders the output on the DOM, if the Diff is present.

https://github.com/acdlite/react-fiber-architecture

## Virtual DOM was made popular by React.


## Array Destructuring:
```js
const arr = useState(resObj);
const [listOfRestaurants, setListOfRestaurants] = arr;

const listOfRestaurants = arr[0];
const setListOfRestaurants = arr[1];
```


