# Episode 5: Let's Get Hooked

## Components in Our App

* These are the structural building blocks of our application UI.

1. Header
   1.1. Logo – Brand identity displayed at the top.
   1.2. Nav Items – Navigation links or menus.

2. Body
   2.1. Search – Search bar to find specific restaurants.
   2.2. Restaurant Container – Section where a list of restaurants is shown.
   2.2.1. Restaurant Card – Card component to display each restaurant's info.
   2.2.1.1. Image – Shows a picture of the restaurant or food.
   2.2.1.2. Name of Restaurant – Displays the restaurant's name.
   2.2.1.3. Star Rating – Average rating score of the restaurant.
   2.2.1.4. Cuisine etc. – Type of food served, cost, and location.

3. Footer
   3.1. Copyright – Legal info or year and brand notice.
   3.2. Links – Important external or internal links.
   3.3. Address – Physical address of the business (optional).
   3.4. Contact – Contact info like email, phone number.

## Cleaning the code and making modules for code

* Make separate files for separate components to improve code modularity and readability.

## Where to keep all the main code?

* In the `/src` folder – This is the root folder for all source code.

## Where to place all the components?

* Place all the components in a single folder called `/src/Components` – Keeps UI-related logic organized.

## Where to read for React structure?

* [React FAQ - Project Structure](https://legacy.reactjs.org/docs/faq-structure.html) – Official guidance on organizing files and folders in a React app.

## What name should be given to the Component file?

* Same as the component name.
* Some developers name the file as `Header.js` and some name it `Header.jsx`.
* It makes no difference to name file as `.jsx` or `.js` – it's a convention.

## How to give the component in some other file?

1. Place the component in some other file.
2. Export the component from the component file using:

```js
export default Header;
```

3. Import the component in the file where you want it using:

```js
import Header from './Header';
```

## Do not keep all the hardcoded data in the Component

* URL links, constants, or static data should not be inside UI components.
* Put them in a config or utils folder.
* File names for such modules should start with a small letter.
* Export the data from `data.js`, and import it where needed.

## There are 2 types of import and export

### 1. Named Export

```js
export const react_object1;
export const react_object2;
```

Import using:

```js
import { react_object2 } from 'file_name';
```

Use as:

```js
{ react_object2 }
```

### 2. Default Export

```js
const react_object1;
const react_object2;

export default { react_object1, react_object2 };
```

Import using:

```js
import Component from 'file_path';
```

Use as:

```js
{ Component.react_object2 }
```

## Can we use default export and named export together?

Yes, you can use both in a single file:

**config.js**

```js
const CDN_URL = "https://example.com/cdn/";
const LOGO_URL = "https://example.com/logo.jpg";
const APP_NAME = "FoodExpress";

export { LOGO_URL };        // named export
export default CDN_URL;     // default export
```

**anotherFile.js**

```js
import CDN_URL, { LOGO_URL } from './config';
```

## Keep your file under 100 lines, if not write another component.

* This makes your code more maintainable and readable.

## Feature - Button (Top rated restaurants) → In Body

* Create a button that when clicked filters and shows top rated restaurants.
* Use `onClick()` function to modify the list using filter logic.

## NOTE:

* We should not change the constant variable – `const` means the reference should not be modified directly.

## Why React is fast?

* React is fast because of efficient DOM updates.
* Only the changed parts of the UI are re-rendered.
* The UI layer reacts to changes in the data layer.

## React Powers:

* Normal variables (like `let`) do not trigger DOM updates.
* `const` values are immutable.

## Super powerful React variable:

* **State Variable** – Enables UI updates on data change.
* Functional Component → Normal JavaScript Function.
* React Object → Normal JavaScript Object.
* React Hook → A JavaScript utility that adds React-specific behavior.

## React Hooks

* Hooks are special utility functions in React introduced by Meta.
* Available via the `react` package inside `node_modules`.

## Two Most Important Hooks

### useState()

* Used to create a state variable.
* Returns a pair: current state and a function to update it.
* Default value can be passed as a parameter.
* Update function is usually prefixed with `set` (camelCase).

### useEffect()

* Used to perform side-effects (like API calls, subscriptions) in components.

## Import the Hooks

Hooks are imported from the react package:

```js
import { useState } from 'react';
```

Examples:

```js
const [listOfRestaurants] = useState([null]);
```

```js
const [listOfRestaurants] = useState([
  data: {}
]);
```

## Pass the value of the state variable changed in the function

```js
setListOfRestaurants(filteredList);
```

## Whenever the state variable changes React re-renders the component

* This ensures the UI is always in sync with the data.

## React makes the DOM operations fast with the help of hooks

* State and effect hooks ensure minimal and efficient re-rendering.

## Reconciliation Algorithm (React Fiber):

* React builds a **Virtual DOM** using React.createElement.
* **Diff Algorithm** calculates differences between the previous and current virtual DOM.
* **React Fiber** (Reconciliation Algorithm) updates only changed parts in the real DOM.

[https://github.com/acdlite/react-fiber-architecture](https://github.com/acdlite/react-fiber-architecture)

## Virtual DOM was made popular by React.

* It helps in improving performance by minimizing actual DOM manipulation.

## Array Destructuring:

```js
const arr = useState(resObj);
const [listOfRestaurants, setListOfRestaurants] = arr;

// Equivalent to:
const listOfRestaurants = arr[0];
const setListOfRestaurants = arr[1];
```
