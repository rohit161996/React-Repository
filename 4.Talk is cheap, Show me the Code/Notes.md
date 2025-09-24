# Talk is Cheap Show me the Code

## Components in Our App
1. **Header Component**<br>
   1.1. Logo <br>
   1.2. Nav Items<br><br>

2. **Body Component**<br>
   2.1. Search<br>
   2.2. Restaurant  Container<br>
        2.2.1. Restaurant Card<br><br>

3. **Footer Component**<br>
   3.1. Copyright<br>
   3.2. Links<br>
   3.3. Address<br>
   3.4. Contact<br>

Parcel does the Hot Module Replacement for Us -> gives the response very quickly. 

## Standard Component Format
```js
const AppLayout = () => {
    return (
      <div>

      </div>
   );
}
```

## Ways to give css to a component
1. In the index.css like the external css.

2. In the inline JSX tag as a javascript object.
```js
<div className="res-card" style={{backgroundColor: "red"}}>
```

3. In the program by making a React Element.
```js
const styleCard = {
   backgroundColor: "red"
}

const RestaurantCard = () =>{
    return(
        <div className="res-card" style={styleCard}>
            <h3>Meghna Foods</h3>
         </div>
    )
}
```

## How can we create the dynamic Cards?
By using the props.

## Props in React 
- Passing a prop to a component is like passing the argument to a function.
- These are just the attributes which are passed to the components.

E.g.
```js
<RestaurantCard 
   resname = "McDonald's"
   cuisine = "American"/>

const RestaurantCard = (props) =>{
   // Now props can be accessed here using the . operator
   {props.resname}
   {props.cuisine}
}
```
- These all properties are wrapped inside the javascript object and these 
  are sent to the function arguments using the props keyword.

- Use the props in the Functional Components like a javascript object.

- Destructuring on the fly
```js
<RestaurantCard resname = "McDonald's" cuisine = "American" />

const RestaurantCard = ({resname, cuisine}) =>{
   // Now props can be accessed here using the . operator
   {resname}
   {cuisine}
}
```

- To understand the things properly :-
```js
const RestaurantCard = (props) =>{
   const {resname, cuisine} = props;

   // Now props can be accessed here using the . operator
   {resname}
   {cuisine}
}
```

- How the data comes to us from the backend?
1. It will come in the form of a JSON file (Referring to the browser).
2. Install the plugin to see the data coming from the backend.
3. Inspect Element -> Network Tab -> Fetch/XHR -> Reload -> Click links and find api's -> Open in New Tab
4. Copy the data to the program.


## Config Driven UI
- Some offers are available in some location and some other in some other location.
- The UI is driven by the config which is the JSON data from the backend.
- The config means the JSON data.

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

- Send the data which is required by the UI from the backend and consume it to build the UI on the front end.

- UI is powered by the data.

## How to integrate data manually to the front end?
- Take the data as an object in the code like 
```js
const data = {}.
```

- Pass the data as a prop to the functional component 
```js
<Component resData={data}/>.
```

- Take the data into the function as props like
```js
   const Component => (resData){ <br>
      const {resObj} = resData; <br>
   }
```

## CDN to store images
Swiggy uses the CDN to store the images. So, the image source is link+"id".

## To make our code look good
- We will use Optional Chaining.
```js
const { cloudinaryImageId, name, avgRating, cuisines, areaName, costForTwo } = resData?.info;
```
## How to loop over the components in React?
- We can loop over the components in React by using 
  - Map 
  - For-each loop
- We will be using map, since it creates a shallow copy.

## MAP, FILTER and REDUCE are very important from Javascript.

## Importance of Key in the map while looping.
- React will re-render all the components when one component is added, because it will be confused where to insert the component.
- In react version 19 it will throw an error, if the key is not added.

## Alternative to the key
- We can also write the index instead of key, but the React's official website says do not use index for keys as the order of items may change.

- "Index as a key is an anti-pattern"

## Note :
- If we do not have a key by any means then we have no other option than to use the id.
- [Not using keys] <<<<<<<<< [Index as a key] <<<<<<<<< [Unique Id as Key] 

