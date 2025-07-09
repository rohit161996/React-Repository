## Higher Order Component:-
- Higher Order Component is a function which takes a component as an input and returns a component.
- It is a normal javascript function.


                                        _______________________
    Input as a function   ->           | Higher Order Function |       -> Output as a function
                                       |(Normal Javascript Fn)_|

- It takes a component, it modifies it and returns it back.

# Writing a Higher Order Component

## New Feature Development :-
- Some restaurants out of the few restaurants are marked as "promoted", but data is not available from the backend for promoted, so we will use "isOpen" = true from the data fetched.
- All the cards are similar except for the promoted(Open) feature on the top.
- So, we will take a card and we will put a promotion(Open) label on top of it.
- We will take the card and give it to the Higher Order Component and we will return a card with the promotion label.
- This is what is called Higher Order Component.


- If the restaurant is promoted then we add a promotion label to it in Body.js
- Higher order Component.
- Input -> Restaurant Card.
- Output -> Promoted Restaurant Card.

## Change the component where we want to call the Other Component.
{/* Add open label */
    restaurant.info.isOpen ?
        <RestaurantCardOpen resData={restaurant} /> :
        <RestaurantCard resData={restaurant} />
}

- Now, we have to add Higher Order Component in the Restaurant Card called <RestaurantCardOpen/>.

##  In the RestaurantCard make a function which takes RestaurantCard as an input and return a JSX.
- export the function.
export const withPromotedLabel = (RestaurantCard)=>{
    return ()=>{
        // return JSX
        return(
            <div>
                <label>Promoted</label>
                <RestaurantCard/>
            </div>
        );
    }
} 

## Import the Higher order Component:-
import RestaurantCard, { withOpenLabel } from "./RestaurantCard";

## Take it in the variable:-
const RestaurantCardOpen = withOpenLabel(RestaurantCard);

## Higher order Components are pure functions:-
- Higher order components do not change anything in the function taken as input.
- It only adds the props or features to it and returns.

## Overlapp label using tailwind:-
className = "absolute bg-black text-white m-2 p-2 rounded-lg"

## React has 2 layers:-
1. UI Layer - It is the JSX which we write in our code. It is powered by the data layer.
2. Data Layer - It consists of stateVariables, props etc. It is the javascript written in the code.

If data is managed properly the application will be very fast, major part is to handle the data layer.

## Controlled and Uncontrolled 
- Now we will build the RestaurantMenu Page.
- We will build the entire page.

## Accordian UI
- It is a UI in which there is a drop down menu.
- It hides and shows the body.
- There are two things in the accordian - 1. Accordian Header.
                                        - 2. Accordian Data.

## Filter all the categories using :-
- const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>card?.card?.["@type"]);
- It is not allowed to use  ->   "card?.@type"
- This is allowed   ->    ["card"]?.["@type"]

- For all categories we will build an accordian.
- Create Component <RestaurantCategory/>

## Tailwind insights from the RestaurantCategory:-
- w-6/12 will make tag to half size of the screen.
- mx-auto will bring the div to the center, we will be using x axis only since the x axis should be in the center.
- my- will make the difference between the divs.
- bg-gray-50 will make the div's background as gray of shade 50 in [0-900].
- p-4 will give the padding to the div's content.
- justify-between will make it to the end points.
- font-bold will make the title bold.
- text-lg will enlarge the text.

{data.itemCards.length} - show the length of the Data Cards.

## Collapse and Expand the Accordian Body to show the Item List.
const RestaurantItemCategory = ({ items }) => {
    console.log("items", items);
    return (
        <div>
            {
                // In map do not return {}
                items.map( (item) => (
                    <div key={item.card.info.id}>
                        <div>
                            <span>{item.card.info.name}</span>
                            <span>{item.card.info.defaultPrice}</span>
                        </div>
                        <p>{item.card.info.description}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default RestaurantItemCategory;

## Note:-
- In map do not return {} like 
- items.map(() => (return in this))
- items.map(() => { do not return in this})

## Tailwind in the ItemCategory:-
- Border Bottom - border-b-2
- Border Color  - border-gray-200
- Padding - p-2
- Margin - m-2

## Note:-
- Swiggy Sometimes uses the default price and sometimes it uses the price
- Use
  (item.card.info.price ?? item.card.info.defaultPrice)/100

## Hide and Show the Item List:-
- Make the header clickable.
- Define the stateVariable 
  const [showItem, setShowItems] = useState(false)

- In the <RestaurantCategory/> add the onClick()={function} attribute in the div to call the function on the click.
- In the function change the state variable.
- Make the component visible on setting the state variable.
    {showItem && <RestaurantItemCategory items={data.itemCards} />} 

- In this the data layer is protected by the UI Layer.
- This is called an **Uncontrolled Component** <RestaurantCategory/> is an uncontrolled conponent as it is not controlled by anyone. 

## Functionality to Make other accordians collapse on clicking one.
- Check the state of the RestaurantItemCategory using the Components window in the Inspect element after Installing the React Dev Tools.
- It is tough to do this because the <RestaurantCategory/> maintains the state of the "showItem" state variable.
- So, we need to give the control to the parent of the <RestaurantCategory/> i.e. the <RestaurantMenu/>.
- We want <RestaurantMenu/> to control the <RestaurantCategory/> so, pass the props from the <RestaurantMenu/> to the <RestaurantCategory/>.
- Remove the stateVariable from the <RestaurantCategory/>
- This is called **Controlled Component** by the Parent, RestaurantCategory is a controlled component by the parent.

### Install the React Developer's tool in the system
- In the inspect element on the chrome -> Components window will enable us to see the components in our page.
- It will show us the data layer.
- It shows us the Virtual DOM(UI Layer) and it's props.
- It will also show us the data layer which are its props.

- Profiler it records the React Application:-
- If you start the recording and start interacting with the application it will record it.
- It will also tell the amount of time it took to open the app.

- Colorful components are the effected components.
- React Router added all the Router Components.

## Controlled and Uncontrolled Components:-
- These are the philosophy which is used by the developer to mention a concept.
- These have no specific definition.


## Map highlights :-
- Along with the iterator in the map function we can use the **index** as well
- Like array_name.map((result, index)=>{
  }) 

- {index === 0 && true}, it means that if index is 0 then true.
- Only one accrodian should be expanded.


- In the RestaurantCategory take the index as the state
  const [showIndex, setShowIndex] = useState(0); , import the useState
- Now the child will modify the state variable of the Parent i.e. showIndex.
- By passing the setShowIndex function from the Parent to Child.

## How the child Component will modify the Parent's state Variable?
- Pass the state variable's function which modifies the state variable to the Child from the parent with the help of the props.
  <RestaurantCategory
                    data={category.card.card}
                    key={category.card.card.categoryId}
                    showItem={index === showIndex && true}
                    setShowIndex={()=>setShowIndex(index)}
                />
- Now, the Child will call the setShowIndex(); in the onClickFunction.

## NOTE:-
- DO NOT DECLARE THE useState() after the return statement.

## Lifting the stateup of the parent by the child.
- Lifting the state up in React.
- The feature Implementation we did was lifting the State up from <RestaurantCategory/> of <RestaurantMenu/>.

## New Feature :-
- Enabling the opening and the closing of the Drop Down.
- Make the default value of the showIndex as null which will collapse all the accordian in the beginning.
- Change the setShowIndex function to update the showIndex state variable, which is passed as a prop.
  setShowIndex={()=>setShowIndex((prev) => prev === index ? null : index)}

## Prop Drilling :-
- <RestaurantMenu/> Page Passes Data to -> <RestaurantCategory/> -> <RestaurantItemCategory/>
- Passing the Data from the Pages From Root -> Leaf type structure.
   const dummy = "Dummy Data";
- <RestaurantCategory
                    data={category.card.card}
                    key={category.card.card.categoryId}
                    showItem={index === showIndex ? true : false}
                    setShowIndex={()=>setShowIndex((prev) => prev === index ? null : index)}
                    dummy={dummy}
                />
- Receiving it in the <RestaurantCategory/>
- const RestaurantCategory = ({ data, showItem, setShowIndex, dummy }) => {}
  
- <RestaurantItemCategory items={data.itemCards} dummy={dummy} />
- const RestaurantItemCategory = ({ items, dummy }) => {
    console.log("items", items);
    console.log(dummy);
  }

- In React Prop Drilling should be avoided, it is okay to use the Prop Drilling to the few levels but not more than that levels.
- In React Components it's Props and states are really important, react application cannot run without it completely. 
- We should not use prop drilling to 10 levels or something.

## Alternative to the Prop Drilling:-
- **Context** is used to avoid Prop Drilling.
- Like Logged in UserName should be present throughout the page.
- Light Theme or Dark Theme information should be present anywhere inside the app.

## React Context:-
- We will create the information of the logged in user in the UserContext.js.
- createContext is a utility function, which is used to create context or store central information that will be stored globally.
- It is provided by the react library.
- It will hold some information.
  import { createContext } from "react";

  const UserContext = createContext({
      loggedInUser : "Default User",

  });

  export default UserContext;
- This information can be used anywhere in the app.

## Using the Context in the Header Component:-
- We will access it in <Header/>
  
- This information can be gathered by a Hook called useContext().
  const {loggedInUser} = useContext(UserContext);

- It can be used anywhere, like we have used it in the list item of the <Header/> Component in the Nav Items.
  <li className='m-4 px-4 py-2 flex items-center rounded-lg bg-orange-400 cursor-pointer font-bold'>
                        Hello {loggedInUser}!
  </li>
- We can create multiple context. 



## NOTE:-
- Places only where the data can be used multiple time, should have the data from useContext().


## Using the Context in the Class Based Components:-
- In <AboutUs/> page we cannot use useContext() Hook, because there are no Hooks in a class based components.

- We can use the <UserContext.Consumer/> way to use the value created in the context <UserContext/>.
- This is how we use the Context from the <UserContext/> Component.
  <UserContext.Consumer>
      {(data) => <h3 className="font-bold inline">{data.loggedInUser}</h3>}
  </UserContext.Consumer>

- The createContext will not work if we will have the Component in lazy loading function.
- Remove the Component from Lazy Loading.


## Now we don't want the default value we want to change it.
## Changing the Context in the App.js (User Authentication):-
- Now we want to take the context from the <UserContext/> component and update it in the <App/> App.js.
- **1. Create a state variable**
  const [userName, setUserName] = useState();

- **2. Call useEffect() to update the state variable** 
- useEffect() is used to make the API call and get the data after sending username and password from the API.
  useEffect(() => {
      // 1. Suppose we made the API call and send username and password.
      // 2. We got the data.
      const data = {
          name: "Rohit Ramchandani"
      };
      // 3. Now, we have set the data.
      setUserName(data.name);
  }, []);

- **3. We now have to pass the data or provide the updated data(userName) throughout the app through Provider**
<UserContext.Provider value={{loggedInUser:userName}}>
    <div className="app">
        <Header />
        {/* if path = / */}
        {/* <Body /> */}
        {/* if path = /about */}
        {/* <About /> */}
        {/* if path = /contact */}
        {/* <Contact /> */}
        <Outlet />
        <Footer />
    </div>
</UserContext.Provider>

- If we want to pass the data="Elon Musk" throughout the <Header/> wrap the <Header/> inside the 
  <UserContext.Provider  value={{loggedInUser:"Elon Musk"}} >
    <Header/>
  </UserContext.Provider>

- Header will use "Elon Musk" and rest everything will use "Rohit Ramchandani", since <Header/> is wrapped with value "Elon Musk". 
- Data Layer is very important for the app to work faster UI is powered by the Data Layer.

## CONCLUSION :- 
1. Context can be created and used for Functional Components in few Steps:-
   - Create the utility like <UserContext/> with createContext().
     const UserContext = createContext({
        loggedInUser : "Rohit",
     });
     export default UserContext;

    - Get the context in a variable by using the useContext().
      const {loggedInUser} = useContext(UserContext);

    - Use the variable anywhere.
      <h2> {loggedInUser} <h2/>

2. Context can be created for a Class Based Components just like Functional Components but is used in a different way due to unavailability of hooks.
   -  <UserContext.Consumer>
        {(data) => <h3 className="font-bold inline">{data.loggedInUser}</h3>}
      </UserContext.Consumer>
   -  We need to have this tag provided by react and a callback function inside it to use the Context inside it.
  
3. If you want to change the context or override the default value of a context or send the changed value to a component, throughout the component.
   - <UserContext.Provider value={{ loggedInUser: userName }} >
          <Header />
      </UserContext.Provider>
4. It can be used throughout the app.

## Change the username or Context on changing the HTML Object
- Create a label and an input box in the <Body/> besides the Top Rated Restaurants.
- It should update the userName in the <App/>.
- setUserName is in the <App/> component we want to call it from the <Body/> Component.
- Pass the setUserName of the useState from the <App/> to <Body/>.
- Now in the <Body/> Component import the useContext.
- const {setUserName} = useContext(UserContext);

## Can we use the <UseContext.Consumer></UseContext.Consumer> multiple times?
- Yes.

## Explaination to the Method in App.
- We have created a stateVariable userName and tied the state variable to the UserContext in the Provider.
- Now, we have also passed the setUserName along with the userName, so now we can change the context through the state variable.

## What does Redux Do?
- It does the same thing as done by the useContext().
- It creates a central "Store" and we can access it anywhere inside our app.
- That is the Job of Redux.
- It is a package, not a part of react.

## Redux is not required for a small scale application.
## We can build a large scale application also with the help of Context.
## Redux is scalable and preferrable.
## Redux thungs etc. are not required for small scale application.
