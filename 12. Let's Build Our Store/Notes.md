# Redux
- How to create our own Redux Store?
- How to manage state of our application using Redux?
- How to manage data of our application using Redux?
- Redux works in the Data Layer.
- Since, UI Layer and Data Layer work closely, Redux helps manage the data of the UI Layer.

## REDUX is NOT MANDATORY.
- It should not be used for small scale or mid size application.
- If there are lots of Read/Write Operations happening in our React Application, there are a lot of Components, then the Redux can be used.
- Applications which are built with Redux can be built without Redux as well.
- Redux and React are different Libraries.
- Use Redux wisely and only when it is required.
- Redux is not the Only Library which is popular **zustand** is also very popular these days.

## Uses of Redux.
- It is used to handle the state of our application.
- Our application becomes very easy to debug using the Redux.
- There is a chrome extension to the Redux.
- Redux help us Debug the Application really well.

## What is Redux?
- A predictable state Container for JS Application.
- There are two libraries required for writing the Redux application:-
  1. React Redux
  2. Redux Toolkits
- Redux Toolkits is the easier way of writing the Redux Application.
- Earlier the Vanilla Redux was used to manage state in the Application, now we will use the Redux Toolkit.

## Problem which were solved by the Redux Toolkit.
- Configuring the Redux store was too complicated, Now also it is tough to understand but not that much.
- It required a lot of packages to install, now we have only 2 libraries to worry about.
- It required too much Boiler Plate Code earlier.
  
## Redux Tool Kit (RTK):-
- Now, RTK is used instead of the Boiler Plate Code.
- Writing the Code is easy understang the Architecture is tough.

## Feature which will be Developed:-
- Cart Feature will be developed.
- On Clicking the Add+ Button the Item should be added to the Cart.
- Cart Page will also be developed.
- To store the Cart Information Redux will be used.

## Architecture of Redux Toolkit:-
- Redux Store is a Big Javascript Global Object which can store the data, i.e. it can write the data it can read the data.
- We keep majority of our Data in our Redux Store.

## Is it fine to store a lot of Data to a single place?
- Yes, it is completely all right to store all the data at one single place, but to make sure it does not get too clumsy, slices are used.

## Slices :-
- Slices are small portion of our Redux Store.
- Based on the data we have we can use Slices :-
  - User Slice
  - Cart Slice
  - Theme Slice... etc.

## How will the Data go to the Store on the add button?
### Write the data to the store :-
- It dispatches an action which calls a function.
- It is called a reducer function which modifies the cart internally.
- It modifies the slice inside the Redux Store.

## Selector :-
- Selector is used to read the data from the Store.
- It will modify the component.

## Read the data from the Store :- 
- Now, we have to move the data from the Store to the Component.
- Subscribing to the Store, it means the data inside the Store is in sync with the Cart.
- React will automagically change the data in the component when the data changes in the store.
- This is why it is called Subscribing to the store, changing everything automatically in the component.

## Installing the Redux Toolkit ()RTK:-
- Install @reduxjs/toolkit and react-redux
  
- npm install @reduxjs/toolkit
- @reduxjs/toolkit is a normal library it does not mean anything.
  
- npm install react-redux

## Steps to do:-
0. Install the libraries.
1. Build our Store. - **@reduxjs-toolkit thing**
  - Create the appStore.js in the utils/ directory.

2. Connect the store to our app. - **react-redux**
  - Provider will connect the store or Provide the store to the App. 
```html
    <Provider store={appStore}>

    </Provider>
```
  - appStore is imported from the `./utils/appStore`

3. Slice (cartSlice) - **@reduxjs-toolkit thing**
   - Create the cartSlice.js file in the utils/ directory.

4. Dispatch(action) when we click on the add button.
   - Export the reducers of the Slice.
```js
         export default cartSlice.reducer;
```
   - Export the actions of the Slice.
```js
         export const {addItem, removeItem, clearCart} = cartSlice.actions;
```

1. Subscribe to the store using the selector.

## Where to build the store or store files:-
- We will build the files in the utils/
- addStore.js created in the utils/ directory.

## Create a store
### Redux toolkit vs React redux
- configureStore() is a Redux Toolkit Job, it comes from our "@reduxjs/toolkit".
- Configure store uses a configuration 
```js
  reducer: {
        cart: cartReducer,
    }
```
- export the appStore.
- Provide the store to the application using <Provider/>, <Provider/> is React redux job i.e. react-redux.
```js
    <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
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
    </Provider>
  ```
- Pass the "store" as the prop in the provider.
- Wrap the <App/> Component inside the 
  <Provider store={appStore}>
    <App/>
  </Provider>
- Now, if we want to provide the store to the specific portion of the <App/> Wrap Component inside the 
  <Provider store={appStore}>
    <Component/>
  </Provider>

## Create a slice
- create a cartSlice.js in the `utils/`
- It uses the createSlice() which comes from the  - `@reduxjs-toolkit;`
- createSlice takes some configuration.
  
- It will have 3 things in the configurations :-
1. Name of the Slice 
```js
      name : 'cart'
```
2. Initial State of the Slice
```js
      initialState: {
          items: [] // Empty
      }
```
3. Reducer functions mapped to the actions in the reducers.
```js
       reducers: {
        addItem: (state, action)=>{
            state.items.push(action.payload);
        },
        removeItem: (state)=>{
            state.items.pop();
        },
        clearCart : (state) => {
            state.items.length = 0;
        }
    }
```
- addItem is an action and the arrow function mapped to it is the reducer function.
- reducer function takes 2 arguments -> state and action.
- Actions are like API's which call the Store to do some task.
- Reducer configuration adds the mapping of the reducer to the Action.
- cartSlice() will return an object with the following entries in the json object
```js
  {
    actions: {
      addItem,
    },
    reducer
  }
 ```
- Export the reducers of the Slice.
  export default cartSlice.reducer;

- Export the actions of the Slice.
```js
  export const {addItem, removeItem, clearCart} = cartSlice.actions;
```

## NOTE:-
- We are mutating the state in the actions written.

## Now we will add the slices to our store 
## App Store will have its own reducer which will contain the slices
- reducer in the app will be the whole app's reducer, it will contain the whole app's reducer.
- It will contain the reducers of the slices which have been exported like cartReducer is 
```js
  exported from the cartSlice.js.
    reducer : {
      cart : cartReducer,
      user : userReducer,
    },
```
- This reducer will modify the app store. 

# Now we have to populate the Header Component:-
- We will have to subscribe to our Store to get the data from our store and display on the `<Header/>`.

## Define the items in the Store:-
```js
  const cartSlice = createSlice({
    initialState : {
        items : ["burger", "pizza"]
    },
  })
```

## Now we have to access the items from the store or subscribing the items from the store.
- In the `<Header/>` Component we will access the item from the store using a Hook Called as useSelector() from React Redux Library.
  const cartItems = useSelector((store) => store.cart.items);

- We have "subscribed" to the store using the selector.
- We need access to the store's cart's items i.e. (store) => store.cart.items

## Now we will add the items on the basis of the Button:-
- Add the Logic to the Button.
- So, write the onCLick = {handleAddItem} to the button.
```js
  const handleAddItem = () => {
    }
```

- Dispatch the addItem action from the handleAddItem function.
```js
  const dispatch = useDispatch();
  
  const handleAddItem = () => {
      dispatch(addItem("pizza"))
  }
```

- dispatch(addItem("pizza")) will send an object like 
```js
  {
    payload : "pizza"
  }
```
  to the action in the cartSlice()

- "pizza" is the action.payload which is the second argument.
- react-redux will handle it itself.

- Calling the function directly
```js
  onClick={handleAddItem(item)}
```

- Calling the function without argument
```js
  onClick={handleAddItem}
```

- Passing the callback function.
```js
  onClick={() => handleAddItem(item)}
```

## On clicking the Button the item should be passed in the Cart.
- map is iterating over the item, so we will pass the item.
```js
onClick={() => handleAddItem(item)}
```

## Create a Cart Page i.e. Cart Component :-
- Create a Cart Component.
- export the Cart Component.
- Create the Url in the App route.
```js
  {
    path: "/cart",
    element: <Cart />,
  }
```
- Update the Link in the `<Header/>` to the cart.
- Add css to the `<Cart/>` Component.

**Store Interaction with the cart**
- Now connect to the store or subscribe to the store using the selector.
  const cartItems = useSelector((store) => store.cart.items);

- Show the cart items using the component `<RestaurantItemCategory items={cartItems}/>`.
  
- Now, add the functionality to empty the cart on the basis of the Button Click.
```js
 <button
      className="m-2 p-2 text-white bg-amber-700 rounded cursor-pointer"
      onClick={handleClearCart}
  >
      Clear Cart
  </button>
```
- Now, make a dispatch object using the useDispatch() Hook.
- handleClearCart() will now dispatch the function clearcart without arguments.
```js
  handleClearCart = ()=>{
    dispatch(clearCart());
  }
```
- Show the message on the page using the following code.
```js
  {
    cartItems.length === 0 && 
    <h2>
      Cart is Empty!! Add Items to your cart!
    </h2>}
```

- These cart functionality work on the Local Shop Page.

# Interview Question:-
## Important Points to be Noted:-
1. Whenever we are subscribing to the store, we need to make sure we are subscribing to the right portion of the store.
- By this we can optimize the performance.
```js
  /* Correct -> Optimized Code */
  const cartItems = useSelector((store) => store.cart.items); 
  const store = useSelector((store) => store);

  /* InCorrect -> Code Not Optimized */
  const cartItems = store.cart.items;
```

## NOTE:
- We do not want the data to be affected on a small change in the store but if we use the above code it will be affected this is why it is called Selected.
- DO NOT DO THIS!!

1. For the appStore it is reducer i.e. one big reducer, and this reducer can have multiple reducers.
- For Slice we have many reducers so it is called reducers.
- When we are exporting the reducers from the Slice we are exporting the reducer (one big reducer from the slice).

1. When we used to write the Vanilla Redux, Redux used to shout like "DO NOT MUTATE STATE", it is an impure function.
```js
   const cartSlice = createSlice({
      name : 'cart',
      initialState : {
          items : []
      },
      reducers: {
          addItem: (state, action)=>{
              " STATE IS NOT MUTATED COPY IS CREATED "
              const newState = [...state];
              newState.items.push(action.payload);
              return newState;
  
              "DO NOT MUTATE STATE"
              state.items.push(action.payload);
          },
          removeItem: (state)=>{
              state.items.pop();
          },
          clearCart : (state) => {
              state.items.length = 0;
          }
      }
    })
```
- Redux is still doing what was done in Vanilla Redux Internally it uses the library **Immer** to Modify the state.
- **Immer** Library uses the diff between the original state the mutated state, and gives back the new state Immutable State(New State).
- **Immer is a tiny package that allows us to work with immutable state in a convinient way**. 
- In Vanilla Javascript the returning of the State was mandatory, now it is not mandatory redux takes care of it automatically.
- Redux Toolkit uses Immer BTS(Behind the Scenes).
- This is why the `state = []` will not work in this case, since Immer will not allow to do this, because we are not modifying/mutating the state we are changing the reference to it.
- `state = ["Akshay"]` is not mutating the state, it is adding a reference to it.
- `state.items.length = 0;` will make the state as `state = [];`
- `state = [];` will make the changes locally, as it is a local variable in the reducer function.

- `originalState = ["pizza"];`
- It this executes, `state = []`, but "pizza" remains the same.

## To print the Current State of the Object:-
```js
import { current } from "@reduxjs/toolkit";

clearCart : (state) => {
            state.items.length = 0;
            console.log(current(state));
        }
```
## Always mutate the state.
- RTK - either Mutate the existing state or return a new State

## Redux DevTOOLS:-
- It is a chrome extension which enables us to use the Redux efficiently.
- It is tested on the Add + Button on the <RestaurantItemCategory/> of the application.
- It writes the Test case for the Component as well.
- Redux works on the Data Layer, so DevTools help a lot.

## Read the RTK Query.
- We used to use Middleware, Thungs etc.
- Read About It :-)