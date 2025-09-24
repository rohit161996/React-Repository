## How can we write our code in a much better way?

## Single Responsibility Principle - Modularity 
- Each Component which is a function or a class is a module and it should have a single responsibility.
- Example - The sole responsibilty of the RestaurantCard should be to display the Restaurant.
- Breaking down the code into modules makes it more maintainable and more testable.
- Modules are easy to test, since they are a small component.
- And we will have a test case for this component.

- The Code Becomes :-
 1. Reusable
 2. Maintainable 
 3. Testable

- There is no hard and fast rule to apply single responsibility principle, the code should be lighter, faster.
- The code should be readable.

## How to make the Page to follow Single Responsibility?
- We will take the responsibility from the component and place it in the Hook.
- Hook makes the Component become more modular and reusable.

## Custom Hooks
- Hooks are normal JavaScript function or special JavaScript Functions, given to us by react. 
- Some are provided by the react, but we can create some the hooks as well.
1. useState() - by react.
2. useEffect() - by react.
3. useParams() - by react-router-dom.
4. useRouteError() - by react-router-dom.

## What are Hooks?
- Hooks are normal JavaScript function or special JavaScript Functions, given to us by react. 
- Hooks are like utility functions, normal functions.
- We will just take out a responsibility from a component and extract it in a hook, such that our hook and the component becomes more modular and more readable.
- Hooks are helper functions.


## How to write Custom Hook and how it optimizes our code?
- In RestaurantMenu.js component we will write our own custom hook and we will use use our own custom menu component.

- RestaurantMenu Component is 
- 1. Fetching the data.
- 2. Displaying the data.

- It should bother only about displaying the data.

- The useParams() hook gets the parameters returns the parameter to the variable, we don't know the implementation of it, this what is a Hook, just a utility function.

- Create a hook called useRestaurantMenu() to fetch the data into our code and give it to the "resInfo" state variable.
  const resInfo = useRestaurantMenu();

- Now, the RestaurantMenu Component will not have to maintain it's state "resInfo".

- useRestaurantMenu() will take resId as argument and should give the resInfo in return.
  useRestaurantMenu(resInfo);

## Where to create the helper functions() Hook?
- It should be created in the "utils/useRestaurantMenu.js".
- Create a seperate file for a seperate hook.
- It gets the restaurant id like 123213123 -> returns the restaurant information.
- It is exported just like any other functional component. 
  Example: export default useRestaurantMenu;

## What has changed with the Custom Hooks?
- The <RestaurantMenu/> now only has to display the data with the help of the custom hook useRestaurantMenu().

## XYZ() is not a function error?
- Check whether array is passed to the map or not.

## To handle the errors on the console and the browser??
- Make sure to do the 
  1. Optional chaining - ?.
  2. Conditional Rendering -  || {};

Example :- const { name } = resInfo?.cards[2]?.card?.card?.info || {};

## Advantages of using a custom Hook?
- It is used to test the component really nicely.
- Now we have to test the useRestaurantMenu() to check issue if it occurs in fetching data.
- To find the issue in displaying the data we have to check the RestaurantMenu Component.

## Check that the user's internet connection in online or offline?
- To show the user that the internet connection is off.
- It will be done by the custom hook.

useOnlineStatus()
- It does not need any information from the caller.

## Event Listener
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- Find the syntax of the event listener here.

## How to simulate the offline experience in the browser?
- In the Inspect Element -> Network -> No Throttling
- Change it to Offline.

## How to use the custom hook to handle internet in the Body.js?
const onlineStatus = useOnlineStatus();
if(onlineStatus === false) return(<h1>Check Your Internet Connection!!!</h1>);

## How to use the custom hook to handle internet in the Header.js?
const onlineStatus = useOnlineStatus(true);

<li>
    Online Status : {onlineStatus? "🟢" : "🔴"} 
</li>

## NAMING CONVENTIONS ARE VERY IMPORTANT:-
1. Hooks should have their name starting with use (convention).
2. Components should have their name starting from capital letter (convention).

## How to Optimize the website with 1000...00's of COmponents?
- Most important part of the bundler i.e. parcel is to bundle a file(combine a file).
- It makes a single file, after combining the entire project.
- It is in the dist/ folder.

## Is it good or bad to have a single file?
- Example of Make My Trip.

## Cons:-
- The size of the file is too large in the front end.
- We have to break down the application into multiple javascript file.

## Chunking or Code Splitting or Dynamic Bundling or Lazy Loading or On Demand Loading:-
- To break down the application into smaller chunks.
- To scale the application and build large scale application.

## Bundle Can be created for [Make My Trip] Website??
- Flights
- Hotels
- Homestays
- HolidayPackages
- Trains

## How to build Bundles?
- App delivers Food, Grocery.
- Navigate to grocery delivery through the Header.js.
- Create the Grocery.js file.
- Create a seperate URL also in the App.js and Link in the Header.js.

BUT It will be in the Entire Bundle only now also.

## What to do to make it out of the bundle?
- We have to do "Chunking" or "Code Splitting" or "Dynamic Bundling" or "Lazy Loading" or "On Demand Loading" or "Dynamic Import".

## Lazy Loading or On Demand Loading.
- Whenever we require the page then only it will load otherwise it will not load.

## Caution :-
- DO NOT LOAD THE Grocery Component as :-
import Grocery from "./Components/Grocery";

- It should be loaded or lazy loaded as :-
import {lazy} from "react";

const Grocery = lazy(() => import("./components/Grocery"));

- Now, the Grocery has a seperate code.
- Which will be loaded on demand.
- When the Grocery Link is clicked then only it will be loaded.

## Error while loading:-
- If the time taken by the Grocery Page to load is too much then React will throw an error.
https://react.dev/reference/react/lazy

## Suspense :-
- We can wrap our component inside the Suspense Component.
- We will give it a place holder or a fallback.

## To reduce this BLOATING OF THE APP :-
- We do this Chunking, Code-Splitting or Dynamic Bundling or Lazy Loading.









