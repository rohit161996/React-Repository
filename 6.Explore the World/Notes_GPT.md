# Episode 6: Explore the World

## Monolith vs Microservice Architecture

* In Monolith Architecture, the entire application is a single unit. Any small change requires recompiling and redeploying the entire app.

* Entire team works on a single repository and the codebase is tightly coupled.

* In Microservice Architecture, the application is split into multiple independent services.

* Each service (or component) is responsible for a specific functionality.

* Each service can be written in different languages (e.g., UI in React, Backend in Java, Email in GoLang).

## On Port

* Services run on different ports locally during development:

  * `localhost:1234` – UI Service
  * `localhost:1000` – Backend Service
  * `localhost:3000` – SMS Service

* These different ports mimic real-world service separation and represent different domain names.

## How React Application Makes a Call to Backend API

There are two ways the UI can be rendered:

1. Load Page → Call API → Render UI (delayed but data-bound)
2. Load Page → Render UI → Call API → Render UI (faster initial render)

## React Has a Fast Approach to Render UI

* It uses the second approach, which renders the structure first and then loads the data.

## useEffect Hook

* `useEffect()` is a special React Hook for performing side effects like API calls, logging, subscriptions.
* It takes two arguments:

  1. A callback function (executed after render)
  2. A dependency array (determines when to run the effect)

Example:

```js
useEffect(() => {
    console.log("useEffect is called");
}, []);

console.log("Body rendered");
```

* "Body rendered" logs first, then "useEffect is called" after render.
* `useEffect()` is ideal for calling backend APIs using `fetch()`.

```js
const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
}

useEffect(() => {
    fetchData();
}, []);
```

## Shimmer UI

* Used as a loading placeholder UI until the actual API data arrives.
* Gives users feedback that the page is loading.

Example:

```js
if (listOfRestaurants === null) {
    return <Shimmer />;
}
```

## Why We Use State Variable (Instead of Normal JS Variables)?

* Normal variables do not trigger UI updates in React.
* State variables using `useState()` re-render the component and update the UI.

## How State Variables Update if They Are `const`?

* `const` only means the reference cannot change.
* On each re-render, the variable is recreated with a new value.

## What is Re-rendering a Component?

* It means the function/component is called again due to state or prop change.

## How to Build Search Functionality with Input Box

1. Create a button with `onClick()` handler:

```js
<button onClick={handleSearch}>Search</button>
```

2. Bind the input value with a state variable:

```js
const [searchText, setSearchText] = useState("");
```

3. Create the input box:

```js
<input type="text" className="search-box" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
```

* `onChange` is necessary to update the state when typing.

## React Reconciliation

* Re-rendering happens on each keystroke.
* React's virtual DOM and diffing algorithm ensure efficient DOM updates.

## React Fiber

* React Fiber is the new reconciliation engine in React.
* It enables incremental rendering and prioritization of tasks.

Search Button Example:

```js
onClick={() => {
    const filteredRestaurant = listOfRestaurants.filter(
        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setListOfRestaurants(filteredRestaurant);
}}
```

## Problem with Search

* Exact match filters:

```js
(res) => res.info.name === searchText
```

* This fails if the case or extra space differs.

* Case-insensitive match (better approach):

```js
(res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
```

* If the user searches and no reset is possible, create a backup state variable for the original list.
