## Components in Our App

1. Header
   1.1. Logo
   1.2. Navigation Items

2. Body
   2.1. Search
   2.2. Restaurant Container
   2.2.1. Restaurant Card

3. Footer
   3.1. Copyright
   3.2. Links
   3.3. Address
   3.4. Contact

---

### Parcel HMR

Parcel provides Hot Module Replacement (HMR), allowing the app to update instantly without full reloads.

---

## Standard Component Format

```jsx
const AppLayout = () => {
  return (
    <div></div>
  );
};
```

---

## Ways to Style a Component

1. **External CSS (index.css)**
2. **Inline styles in JSX**

```jsx
<div className="res-card" style={{ backgroundColor: "red" }}></div>
```

3. **Using a style object**

```jsx
const styleCard = { backgroundColor: "red" };

const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <h3>Meghna Foods</h3>
    </div>
  );
};
```

---

## Creating Dynamic Cards in React

Use **props** to make components dynamic.

### Props in React

* Props are like function arguments passed to components.
* They are sent as attributes and accessed via the `props` object.

**Example:**

```jsx
<RestaurantCard
  resname="McDonald's"
  cuisine="American"
/>
```

```jsx
const RestaurantCard = (props) => {
  return (
    <div>
      {props.resname}<br />
      {props.cuisine}
    </div>
  );
};
```

### Destructuring Props

```jsx
const RestaurantCard = ({ resname, cuisine }) => {
  return (
    <div>
      {resname}<br />
      {cuisine}
    </div>
  );
};
```

### Best Practice

```jsx
const RestaurantCard = (props) => {
  const { resname, cuisine } = props;
  return (
    <div>
      {resname}<br />
      {cuisine}
    </div>
  );
};
```

---

## Backend Integration

### Fetching JSON Data:

0. Data typically comes as a JSON response.
1. Use browser plugins or DevTools to inspect network requests.
2. Navigate: Inspect → Network Tab → Fetch/XHR → Reload Page.
3. Find API endpoint, open it, and copy the response data for local testing.

---

## Config-Driven UI

* The UI is powered by backend JSON data (aka config).
* Different regions or users may receive different UIs based on config.

**Example Config JSON:**

```json
{
  "statusCode": 0,
  "data": {
    "statusMessage": "done successfully",
    "pageOffset": {
      "nextOffset": "CJhlELQ4KIDQwPHy2OelazCnEzgD",
      "widgetOffset": {
        "NewListingView_category_bar_chicletranking_TwoRows": "",
        "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
        "Restaurant_Group_WebView_SEO_PB_Theme": "",
        "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "9",
        "inlineFacetFilter": "",
        "restaurantCountWidget": ""
      }
    },
    "cards": [],
    "firstOffsetRequest": true,
    "cacheExpiryTime": 240,
    "nextFetch": 1
  },
  "tid": "f7bf6d4f-7316-4926-8371-16650cc70ba2",
  "sid": "ktue50a6-805a-41a0-a1ef-2f4be0648df8",
  "deviceId": "4afd8a8e-1cb4-15bb-65eb-d5317ddd58d3",
  "csrfToken": "1ZKvnAV2wCP5-pjCLmGuAq_q_FK4scVMAjzFtJWQ"
}
```

* UI updates dynamically based on this config.

---

## Manually Integrate Data to Frontend

```jsx
const data = { /* JSON data */ };
<Component resData={data} />;

const Component = ({ resData }) => {
  const { resObj } = resData;
  return <div>{resObj.name}</div>;
};
```

---

## Image CDN Handling

* Swiggy and similar platforms use a CDN.
* Use: `imageBaseURL + imageId`

---

## Optional Chaining in React

Use optional chaining for safe access:

```jsx
const { cloudinaryImageId, name, avgRating, cuisines, areaName, costForTwo } = resData?.info;
```

---

## Rendering Multiple Components

* Use `.map()` to render multiple cards dynamically.

### Example:

```jsx
{restaurantList.map((restaurant) => (
  <RestaurantCard key={restaurant.id} resData={restaurant} />
))}
```

---

## Importance of `key` in `.map()`

* Helps React identify which items changed/added/removed.
* Without a unique key, React re-renders unnecessarily.

### Key Prioritization:

1. Unique ID (✅ Best)
2. Index (❌ Anti-pattern, only use if no ID is available)
3. No Key (🚫 Worst case)

**React 19+ throws warning/errors if key is missing.**

---

## Alternative to the Key

* You can use the index of the array as a key, but React's official documentation advises against it.
* This is because the **order of items may change**, leading to inconsistent rendering behavior.

> "Index as a key is an anti-pattern"

If you don't have a unique key, your **last fallback** should be to use an ID (like `restaurant.id`).

### Key Priority Summary:

**\[Not using keys] <<<<< \[Index as a key] <<<<< \[Unique Id]**

---


## Optional Chaining (`?.`)

Optional Chaining is a JavaScript feature that allows you to access deeply nested properties in objects without having to check each level manually.

### Why Use Optional Chaining?

* To avoid runtime errors when trying to access a property of `undefined` or `null`.
* It simplifies code by removing repetitive checks.

### Syntax

```js
object?.property
object?.[expression]
object?.method?.()
```

### Examples

```js
const user = {
  name: "John",
  address: {
    city: "Delhi"
  }
};

console.log(user.address?.city);        // "Delhi"
console.log(user.contact?.phone);       // undefined
console.log(user.contact.phone);        // ❌ Error: Cannot read properties of undefined
```

### Optional Chaining with Function Calls

```js
const person = {
  getName: () => "Alice"
};

console.log(person.getName?.());        // "Alice"

const emptyObj = {};
console.log(emptyObj.getName?.());      // undefined (does not throw error)
```

### Nested Optional Chaining

```js
const employee = {
  profile: {
    contact: {
      email: "emp@example.com"
    }
  }
};

console.log(employee.profile?.contact?.email); // "emp@example.com"
console.log(employee.profile?.address?.street); // undefined
```

### Use with Arrays

```js
const data = {
  users: [
    { name: "Alice" },
    { name: "Bob" }
  ]
};

console.log(data.users?.[1]?.name); // "Bob"
console.log(data.users?.[2]?.name); // undefined
```

### Summary

* Optional chaining helps write safe and clean access code.
* Use it when you're unsure if a property exists or not.
* Prevents the app from crashing due to `undefined` or `null` access.

> ✅ Best Practice: Use optional chaining only when necessary to avoid masking real issues in data structure.
