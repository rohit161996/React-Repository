### Components in Our App
1. Header
   1.1. Logo 
   1.2. Nav Items

2. Body
   2.1. Search
   2.2. Restaurant  Container
        2.2.1. Restaurant Card

3. Footer
   3.1. Copyright
   3.2. Links
   3.3. Address
   3.4. Contact

Parcel does the HMR for Us -> gives the response very quickly. 

## Standard Component Format

const AppLayout = () => {
    return (
        <div>
        </div>
    )
}

## Ways to give css to a component
1. In the index.css like the external css.

2. In the inline JSX tag as a javascript object.
<div className="res-card" style={{backgroundColor: "red"}}>


3. In the program by making a React Element.
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

### How can we create the dynamic Cards?
By using the props.

### Props in React 
- Passing a prop to a component is like passing the argument to a function.
- These are just the attributes which are passed to the components.

E.g.
<RestaurantCard 
resname = "McDonald's"
cuisine = "American"
/>

const RestaurantCard = (props) =>{
   // Now props can be accessed here using the . operator
   {props.resname}
   {props.cuisine}
}

- These all properties are wrapped inside the javascript object and these 
  are sent to the function arguments using the props keyword.

- Use the props in the Functional Components like a javascript object.

- Destructuring on the fly
<RestaurantCard 
resname = "McDonald's"
cuisine = "American"
/>

const RestaurantCard = ({resname, cuisine}) =>{
   // Now props can be accessed here using the . operator
   {resname}
   {cuisine}
}

- To understand the things properly :-

const RestaurantCard = (props) =>{
   const {resname, cuisine} = props;

   // Now props can be accessed here using the . operator
   {resname}
   {cuisine}
}

- How the data comes to us from the backend?
0. It will come in the form of a JSON file.
1. Install the plugin to see the data coming from the backend .
2. Inspect Element -> Network Tab -> Fetch/XHR -> Reload -> Click links and find api's -> Open in New Tab
3. Copy the data to the program.


##### Config Driven UI
- Some offers are available in some location and some other in some other location.
- The UI is driven by the config which is the JSON data from the backend.
- The config means the JSON data.

{
statusCode: 0,
data: {
statusMessage: "done successfully",
pageOffset: {
nextOffset: "CJhlELQ4KIDQwPHy2OelazCnEzgD",
widgetOffset: {
NewListingView_category_bar_chicletranking_TwoRows: "",
NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
Restaurant_Group_WebView_SEO_PB_Theme: "",
collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "9",
inlineFacetFilter: "",
restaurantCountWidget: ""
}
},
cards: [],
firstOffsetRequest: true,
cacheExpiryTime: 240,
nextFetch: 1
},
tid: "f7bf6d4f-7316-4926-8371-16650cc70ba2",
sid: "ktue50a6-805a-41a0-a1ef-2f4be0648df8",
deviceId: "4afd8a8e-1cb4-15bb-65eb-d5317ddd58d3",
csrfToken: "1ZKvnAV2wCP5-pjCLmGuAq_q_FK4scVMAjzFtJWQ"
}

- Send the data which is required by the UI from the backend and consume it to build the UI on the front end.

- UI is powered by the data.

#### How to integrate data manually to the front end?
- Take the data as an object in the code like const data = {}.
- Pass the data as a prop to the functional component <Component resData={data}/>.
- Take the data into the function as props like
   const Component => (resData){
      const {resObj} = resData;    
   }

#### CDN to store images
Swiggy uses the CDN to store the images. So, the image source is link+"id".

#### To make our code look good
We will use Optional Chaining.
const { cloudinaryImageId, name, avgRating, cuisines, areaName, costForTwo } = resData?.info;

#### How to loop over the components in React?
We will loop over the components in React by using map or for-each loop, but we will be using map.

#### MAP, FILTER and REDUCE are very important.

#### Importance of Key in the map while looping.
- React will re render all the components when one component is added, because it will be confused where to insert the component.
- In react version 19 it will throw an error.

#### Alternative to the key
- We can also write the index instead of key, but the React's official website says do not use index for keys as the order of items may change.

" Index as a key is an anti-pattern"

#### If we do not have a key by any means then we have no other option than to use the id.

#### [Not using keys] <<<<<<<<< [Index as a key] <<<<<<<<< [Unique Id] 

