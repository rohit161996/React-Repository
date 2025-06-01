## Monolith vs Microservice Architecture
- In the Monolith  Architecture the Entire Project is compiled for a single change.
- Entire team works on a single repository.

- In the Microservice Architecture the Project is divided into components.
- Each component is interacting with another component.
- A component can be written in a different language, Like UI can be written in React, 
  Backend can be written in Java, database can be written in python, sending mail can be in GoLang.

## On port 
- localhost:1234 UI Service
- localhost:1000 Backend Service
- localhost:3000 SMS Service

These services run on different port numbers and domain name is different for these port numbers.

## How react application will make a call to Backend API?
- There are two approaches to Render the UI on the Web Page
1. Load Page -> Call API -> Render UI
2. Load Page -> Render UI -> Call API -> Render UI

## React has a fast approach to render UI.

## useEffect Hook?
- useEffect is a special React hook used to perform side effects like API calls, logging, subscriptions, etc.

- It is just like a normal function.

- It takes two arguments:
  - A callback function (the side effect)
  - A dependency array (controls when the effect runs)
 
- This useEffect() is called when the UI Component is rendered, as soon as the UI is rendered it will call the callback function.

E.g.
    useEffect(()=>{
        console.log("useEffect is called");
    },[]);

    console.log("Body rendered");

- In the above example the Body Rendered will be printed first.
- useEffect() is used when we have to implement the 2nd approach to call the Backend API, using the fetch() with promises.

- Install the Plugin to see the data in the console log otherwise it will throw error.

const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
}

useEffect(() => {
    fetchData();
}, []);

## Shimmer UI
- Shimmer UI is used by various big web designers to render UI without data till it gets the data from the API. 
- Shimmer Component is Component created which gives user impression that the page is being loaded.


// Conditional Rendering
if (listOfRestaurants === null) {
    // return <h1>Loading...</h1>;
    return (
        <Shimmer />
    );
}

## Why we use State Variable or Why we do not use normal Javascript variable?
- Normal Javascript variable does not have the capability to Re-render the React Component, so 
  it is not changing the UI if it is normal variable.
- Re-rendering of the variable can only be done by the useState variable.
- It will re-render the whole component.

## How the value of the variable is changed if it is a const variable in useState()?
- The value of the variable is not changing, the component where the variable is used is re-rendered and the 
  variable is defined again with a new value.
- This is why we need state variable.

## What is re-rendering a component?
- It is calling the component again.


## How to build the search functionality on the basis of input box?
- Create a button.
  <button onClick={}>

- Bind the value of the input box with the state variable.
  const [searchText, setSearchText] = useState("");

- Create the input box.
  <input type="text" className="search-box" value={searchText}>

This will not work without the onChange() as the value of the input box is bind to the state variable, and it will not let it change.

## React Reconciliation?
- Re-rendering happens on every character typed in the input box.
- But the DOM manipulation is very efficient in the case of react.
- React only takes the changes in the DOM and updates the DOM.

## React Fibre?
- React Fiber is a complete reimplementation of React's core reconciliation algorithm. It aims to improve performance, especially in
  complex applications, by enabling incremental rendering. 

onChange={(e) => {
    // whenever the input text changes update the state variable
    setSearchText(e.target.value);
}}

onClick={() => {
    // Filter the restaurant cards and update the UI
    
    // searchText
    console.log(searchText);

    const filteredRestaurant = listOfRestaurants.filter(
        // (res) => res.info.name === searchText
        // convert both the search option and the name to lowercase
        (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    
    setListOfRestaurants(filteredRestaurant);
}}

## Problem with the search:
- This need the entire exact string
  (res) => res.info.name === searchText

- This will work fine with every case
  (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())

- Now the search space is lost if we have searched for some restaurant.
  To solve this create a new state variable to update and search on the previous state variable.




