# Episode 7: Finding the Path

## When is the useEffect Called?

* `useEffect` is a Hook having two arguments:

  1. A callback function
  2. A dependency array

* If the 2nd argument is not there, the callback function is executed **every time** the component renders (e.g., `RestaurantMenu`).

* If the second argument (dependency array) is present:

  * `[]` → `useEffect` is called only **once** on the initial render.
  * `[btnNameReact]` → `useEffect` is called **every time `btnNameReact` changes**.
  * `[state1, state2]` → `useEffect` is called whenever **any dependency in the array changes**.

## Best Practices for useState Hook

* `useState` is used to create **local state variables** for **functional components**.
* ❌ **Do NOT declare or use `useState` outside the functional component** — it will throw an error.
* ✅ Define `useState` **at the top of the component**, not inside:

  * `if/else`
  * `for` loops
  * inner functions

Using `useState` inside conditional blocks can lead to **inconsistencies** in the hook call order.

> "DO NOT MESS UP WITH REACT, OR REACT WILL MESS WITH YOUR CODE."

## Routes

* We use `react-router-dom` to handle routing in a React app.

**Install:**

```bash
npm install react-router-dom@6.22.3
```

* This will add routing dependencies to `package.json` and `package-lock.json`.

## Creating an About Us Page (Using React Router)

0. The router is created in `App.js`, the **root component**.
1. Import `createBrowserRouter`:

```js
import { createBrowserRouter } from "react-router-dom";
```

2. Create route configuration:

```js
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,  // Home page
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }
]);
```

3. Use `RouterProvider` to provide routing:

```js
import { RouterProvider } from "react-router-dom";
root.render(<RouterProvider router={appRouter} />);
```

4. You can also use other routers like `createHashRouter`, `createMemoryRouter`, etc., but `createBrowserRouter` is most common.

## NOTE :-

* Use react-router-dom version 6.22.3

  ```bash
  npm i react-router-dom@6.22.3
  ```

## How to create Router:

1. Create routing configuration using `createBrowserRouter`.
2. Render the `RouterProvider` with configuration created.

## Using rafce to generate the functional component

* Use VSCode shortcut `rafce` to quickly create a functional component template using ES7+ snippets extension.

## What if We Visit a Non-Existing URL?

* It throws a 404 Error Page.
* React Router automatically handles this if you use:

```js
errorElement: <Error />
```

## To display the error page:

* Add the `errorElement` to the `createBrowserRouter` configuration.
* Import and create an `Error` component.

## Mentos Way to Display Errors

* Use `useRouteError()` Hook from `react-router-dom` to fetch and show detailed error info.
* Helps in debugging route-level issues.

## Identifying a Hook

* Hooks always start with `use` (e.g., `useEffect`, `useParams`, `useState`, `useRouteError`).

## Keeping the Header Intact Across Pages

* Use **Nested Routing (Children Routes)**.

### How to Set Up Children Routes:

```js
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> }
    ]
  }
]);
```

* Use `<Outlet />` in `AppLayout` to render nested routes.

## Redirecting Between Pages

* ❌ Don't use `<a href="">`
* ✅ Use `<Link to="/contact">Contact Us</Link>` to avoid reloading the page.

## Routing Types

1. **Client-side Routing**

   * No network call
   * Components render directly from React memory

2. **Server-side Routing**

   * Every route change triggers a new HTTP request

## Making a Page for a Restaurant

0. **Analyze the structure of the page:**

   * e.g., `www.swiggy.com/restaurant/hotel_name`
   * Path format: `/restaurants/:resId`

1. **Create the component:**

```js
const RestaurantMenu = () => { ... };
```

2. **Update route configuration:**

```js
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> }
    ],
    errorElement: <Error />
  }
]);
```

3. **Access dynamic route parameter:**

```js
const { resId } = useParams();
```

4. **Fetch restaurant data:**

```js
const data = await fetch(constants.CORS_PLUGIN + constants.URL + resId + constants.REMAINING_URL);
```

5. **Link each restaurant to its page:**

```js
<Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
  <RestaurantCard resData={restaurant} />
</Link>
```

## Handling Loading and Errors (Shimmer UI)

* If `resInfo` is `null`, show a loading UI:

```js
if (!resInfo) return <Shimmer />;
```

## Swiggy API Inconsistencies

* Always handle missing data gracefully using null checks.

## GraphQL (Optional)

* Helps with **underfetching/overfetching** issues.
* Only fetches data that is required by the component.

## NOTE:

* `<Link to=""/>` is a component from `react-router-dom`, but renders as `<a href>` in the HTML.
* Pages look like they reload in HTML but they actually just re-render the component (SPA behavior).
