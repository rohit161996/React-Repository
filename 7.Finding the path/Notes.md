## When is the use effect called?
- useEffect is a Hook having two arguments :-
  - 1. Callback function
  - 2. Dependency array
- If the 2nd argument is not there the callback function is executed everytime the component renders i.e. RestaurantMenu renders.
- If the second argument is present the useEffect is called when the second arguments state changes since it has statevariables
- It is called after every rendering of the component in which it is defined.

- If no dependency array => useEffect is called on every render of the component in which it is present.
- If the dependency array = [],  the useEffect is called on initial render and just once.
- If we have defined the dependency array like [], then useEffect is called only once.
- The useEffect will be called when there is a change in dependency array.
- If dependency array = [btnNameReact], Every time the btnNameReact changes the useEffect() hook is called.
- If we have a non empty dependency array, then useEffect is called on every event of the change in the dependency array

## What are the best practises to use useState() hook?
- It is used for creating local state variables for functional components, so this is why DO NOT DECLARE OR USE IT OUTSIDE 
  THE FUNCTIONAL COMPONENT => It will throw an error.
  
- Try to define or write the useState() on the top after the function is declared to avoid the inconsistency in the code, 
  - JavaScript is the synchronous single threaded language(Runs line by line).
  - It does not have any inconsistency.

- DO NOT CREATE useState variable inside :
  1. if{} else{}
  2. for{} 
  3. functions(){}.
  It is allowed but do not do this, because it will generate inconsistency in the program.

- It signifies that there is a state variable sometimes in the program(when if condition is true) and sometimes there are 
  no variables which leads to inconsistency.
  
- DO NOT MESS UP WITH THE REACT, REACT WILL MESS WITH YOUR CODE (use best practises given by react).

## Routes :-
- We will be using an npm javascript library to create routes.
- https://reactrouter.com/home [Documentation]
- Command to install react router :- 
  -> npm i react-router-dom@6.22.3
              or
  -> npm install react-router-dom@6.22.3
- It will add packages into package.json and package-lock.json

## Creating a About Us Page.
0. The router will be created in App.js (root level component of the App).
  
1. import the createBrowserRouter in the App.js because it will create the Routing Configuration for us, configuration 
     means information that will define what will happen on a specific route.
  -> import {createBrowserRouter} from "react-router-dom";

2. Create a configuration which is a list of Objects which contain the 
   1. Path where the url goes
   2. Component which is rendered with the path 
- const appRouter = createBrowserRouter(
  [{
        path : "/",
        <!-- Loading the Home Page -->
        element : <AppLayout/>
   },
   {
        path : "/about",
        element : <About/>
   },
   {
        path : "/contact",
        element : <Contact/>
   }
  ])

3. RouterProvider component of the react-router-dom is imported and it will provide the configuration to the app.
- Now RouterProvider passes the configuration built with the createBrowserRouter to render different Components on the page.
- root.render(<RouterProvider router={appRouter} />)

- Create browser router creates a configuration.

- Earlier we were rendering the AppLayout directly.
- root.render(<AppLayout />);

4. There are several types of Routers like createHashRouter, createMemoryRouter, createStaticRouter available on
  https://reactrouter.com/home [Documentation]
- But createBrowserRouter is preferred for the usage as per our usecase different usecase will have different router.

## NOTE :-
- Use react-router-dom version 6.22.3
  npm i react-router-dom@6.22.3

## How to create Router:
1.  Create routing configuration using createBrowserRouter.
2.  render the RouterProvider with configuration created.

## Using rafce to generate the functional component

## What if we visit a page with a url which does not exist?
- It throws a page with error that Error 404 Page Not Found.
- This page is created and handled by react-router-dom internally.

## To display the error page:
- Add the errorElement to the createBrowserRouter which will display the Component Error  ({ errorElement : <Error/>});
- import Error in the App.js 
- Create a component Error.

## Mentos Way to Display the Error:
- useRouteError() Hook is used to display the error provided by react-router-dom.
- This hook will help us to display more information about the error.
- We will get the error we are getting for the page and show more information to the user.
- It is a mature library which keeps getting updated.

## How to identify the hook?
- It starts with the word use.

## How to keep the Header Intact?
- Using the Children Routes.
 
## How to create the Children Routes?
- Create a list of Children Paths in the createBrowserRouter's parent element's subsection children.
- It is a list of paths.
- const appRouter = createBrowserRouter([
    {
        path: "";
        element: "";
        children:[
            {
                path: "";
                element : "";
            }
        ]
    }
  ]);

## How to place the children in the component to be replaced?
- It is done with the help of Outlet Component provided by the react-router-dom.
- <Outlet/>
- Outlet is replaced by the parent component's children.

## What should be used to redirect to a page(render a component) in react?
- The <a></a> anchor tag should not be used to redirect to a page in react, because it reloads the page.
- The <Link/> component should be used to redirect as it does not loads the page.
- The Link tag works just like an anchor tag but it does not loads the page.
- <Link to="/contact">Contact Us</Link>.
- Single Page Application - The pages are not reloading only the components are re-rendering.

## There are two types of Routing:
1. Client Side Routing
   There is no Network call when we call a page, the client is re-rendering, because it already has the 
   component and it does not have to call the server for the page.

2. Server Side Routing
   There is a Network call when we call the page, the client is calling server for the page and the server 
   sends the page back to the client.

## Making a page for a restaurant.
- We have a dynamic route for every restaurant we have.
- Every restaurant will have its own page.
0. Analyze the structure of the page
   - www.swiggy.com/restaurant/hotel_name like 
   - path: "/restaurants/:resId",

1. Create the component of the Restaurant Menu <RestaurantMenu />
   - It is restaurant menu page.
   - This component will be used for every restaurant with the id attached to it in the routes.

2. Make the configuration of it.
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Body />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
                {
                    path: "/contact",
                    element: <Contact />,
                },
                {
                  <!-- Loading the restaurant menu in the page -->
                    path: "/restaurants/:resId",
                    element: <RestaurantMenu />,
                },
            ],
            errorElement: <Error />,

        },
    ])

:resId will be changed with the restaurant, and it will make the page dynamic according to the new restaurant.

## To take the data into the page 
- useEffect() Hook is used with the fetch().
- fetch() will return a promise.
- It is handled by the async await method.
- Pass the API name to the fetch function.
- Once the data is fetched, it should be stored in the state variable to automatically update the UI.
- Initialize the state variable and store the data into the variable once the state variable is updated.

## To resolve the problem of not drilling down the json data GraphQL is used.
- When we want to do underfetching and overfetching the data.
- It only loads the data which is required in the application.

## Shimmer UI 
### Cannot destructure name variable in RestaurantMenu.js file.
- Fix :- 
- Remove the ternary operator from return of JSX and return the Shimmer UI before the getting the data in the variables.'
- Changing the restaurant id will be changing the page.
  if (resInfo === null) return (<Shimmer />);

## Data inconsistency in swiggy api
- There is a lot of inconsistency in the swiggy api's.

## Making the page change on id change and the item clickable.
- It is done with the help of useParams() to make the resId dynamic.
- const {resId} = useParams();
- Change the url and make it generic.
  const data = await fetch(constants.CORS_PLUGIN + constants.URL + resId + constants.REMAINING_URL);
  <Link
      to={"/restaurants/" + restaurant.info.id}
      key={restaurant.info.id}>
      <RestaurantCard
          // When a parent tag is applied key should be in the parent
          // key={restaurant.info.id}  // Use a unique identifier
          resData={restaurant}
      />
  </Link>

## NOTE:-
- <Link to=""/> is a component provided by react-router-dom, but when we see it on the HTML page it gives <a href>. 
- 

