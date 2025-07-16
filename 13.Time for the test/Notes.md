# Testing from a Developer's Point of View:-

## Types of testing:-
1. Manual Testing.
   - We are manually testing the Components and the Functionality.
   - Single Line can destroy many components.
  
2. Code to Test the Application.

## What are the different types of Application which can be done in the React Application?
1. Unit Testing
   - Testing the <Component/> in the Isolation from the App.

2. Integration Testing
   - Testing the Integration of the Components.
   - For e.g. The Restaurant Card Changes on the writing something in the Input Box.
   - Code will be written to check the flow of the Project.

3. End to End Testing
   - Testing the Application from when the User Lands on the Website to when the user leaves the website.
   - Tools are used such as Celinium, Citrius etc. 

## We will be concerned about the first two type of Testing.

## Libraries used to test the React Application:-
1. React Testing Library 
   It builds on top of DOM Testing Library by adding APIs for working with React components.
   https://testing-library.com/docs/react-testing-library/intro/#installation

- RTL is a wrapper which is build on the DOM Testing Library.

2. create-react-app uses the React Testing Library Internally.

## Setup the Project to create the test cases:-
- The DOM Testing Library or the React Testing Library uses the Jest to write the test cases.
- Jest is a delightful **JavaScript Testing Framework** with a focus on simplicity.
- Jest uses babel.
- We need React Testing Library and Jest in our application.

npm install -D @testing-library/react
npm install -D jest

## Install the dependencies which are required to use Babel :-
npm install --save-dev babel-jest @babel/core @babel/preset-env

## Create a file called :-
"babel.config.ts" with content
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

## As mentioned in :-
https://jestjs.io/docs/getting-started

## Parcel uses Babel Behind the Scenes.
This babel.config.ts can modify the configurations for Parcel

## Go to 
https://parceljs.org/languages/javascript/#babel
-> Usage with other tools

- Configure the Parcel Config file to disable default babel transpilation
.parcelrc file with the following content
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}

## How to run the Test Cases?
- In the package.json we have the test which uses the jest.

npm run test
```js
{
  "name": "swiggy-app",
  "version": "1.0.0",
  "scripts": {
    "start": "parcel index.html",
    "test": "jest"
  },
}
```

 Now, we have synced the React Testing Library, Jest, Parcel and Babel.

 ## Now we have to make the Jest Configuration.
npx jest --init

1. Typescript - N
2. Environment - jsdom
3. Add coverage report - Y
4. Provider used to instrument code for coverage - babel
5. contexts and results before every tests - y

It will create a big jest.config.ts file.

## jsDOM
- Test cases do not run on Browser, they require a runtime.
- JSDOM is a library which parses and interacts with assembled HTML just like a Browser.
- LIKE A BROWSER.
- Tested code runs in the browser like environment -> jsdom.

## Difference between the npm and npx :-
- npx means we are just executing not installing.

## Now we have to install the jsdom library 
- We have to seperately install the jest-environment-jsdom
  
npm install --save-dev jest-environment-jsdom

                OR

npm install -D jest-environment-jsdom


# FINAL STEPS FOR TESTING ENVIRONMENT SETUP:-
1. Install React Testing Library
   npm install -D @testing-library/react

2. Intalling jest
   npm install -D jest

3. Installed Babel dependencies
   npm install --save-dev babel-jest @babel/core @babel/preset-env

4. Configure Babel
   "babel.config.ts" with content
   ```js
    module.exports = {
        presets: [
            ['@babel/preset-env', { targets: { node: 'current' } }],
            ['@babel/preset-react', { runtime: 'automatic' }]
        ],
    };
    ```

5. Configure Parcel Config file to disable default babel transpilation
    .parcelrc file with the following content
    ```js
    {
    "extends": "@parcel/config-default",
      "transformers": {
          "*.{js,mjs,jsx,cjs,ts,tsx}": [
          "@parcel/transformer-js",
          "@parcel/transformer-react-refresh-wrap"
          ]
      }
    }
    ```
6. Jest
   npx jest --init

7. Intall jsdom library
   npm install -D jest-environment-jsdom

8. Install the ts-node
   npm install --save-dev ts-node

9. Install @babel/preset-react and add it to the preset configuration.
   npm install @babel/preset-react

- Babel is a transpiler which converts one code to another.
- preset helps the JSX to be converted to the normal HTML Code.

10. Install @testing-library/jest-dom
    npm install --save-dev @testing-library/jest-dom

## We can do create-react-app and it automatically gives testing library

## Extension for Icons :-
- vscode-icons
- Install for folder icons.

## Basic Testing
- Create a sum.js file
- npm run test

- Logs
  testMatch: **/__tests__/**/*.?([mc])[jt]s?(x), **/?(*.)+(spec|test).?([mc])[jt]s?(x) - 0 matches
  testPathIgnorePatterns: \\node_modules\\ - 28 matches

- It says that the test cases should be written in the __tests__/ directory.
- __tests__ folder can be created anywhere.
- Any file written in this folder will be considered as a test file.
- We can also write the file with the extension like.
  Header.test.js
  Header.test.ts
  Header.spec.js
  Header.spec.js

- Dunder -> __name__
- __add__ It is called dunder method.

- create a file sum.test.js in the __test__/ folder
  test(arg1, arg2);

- arg1 is the Description of what are we testing
- arg2 is the function to what are we testing.
  ```js
  () => {
    
  }
  ```
- Asserting the function
- expect(result).toBe(5);

# 1. Contact Component Testing
## Now we will be testing the Contact Component.
- Updated the Contact Component and trying to load it and check if it loads or not?
- Writing the test case to check if it loads or not.

- To test the UI Component, we have to render the Component on the jsdom first.
  import { render } from "@testing-library/react";

### Test 1
- To check whether the Heading occured on the screen or not?
  ```js
    test('Should load the Heading in the Contact Us Component', () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
  ```
### Test 2
- To check whether the Button occured on the screen or not?
  ```js
    test('Should load the Button inside the Contact Component', () => {
        render(<Contact />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
  ```
### Test 3
- To check whether the Button occured on the screen or not through Submit Text?
  ```js
    test('Should load the Button inside the Contact Component', () => {
        render(<Contact />);
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    });
  ```
- If the text fails, we get to know how it failed in the Screen.

## First Class Basics:-
- JSX is the React Element at the end of the day.
- React element is an object at the end of the day.
- screen.getByRole("button"); return the React Element, React Fibre Node, JSX, Virtual DOM Object.

## Querying :-
const inputs = screen.getAllByRole("textbox");

- Now, we can club the similar test cases:- 
- Using the describe()
  ```js
  describe("Contact Us Page Test Case", ()=>{
    
  });
  ```
## Naming of the test function :-
- We can use both test() function or the it() function.
- "it" is an alias of the "test" function.

## Do not push the coverage/ directory to the git:-
- Add it to the gitignore.

# 2. Header Component Testing :-
## Now we will test the Header Component:-
- That the <Header/> Component is loaded or not.
- Create the Header.test.js.
- The problem with writting the Test Case for the Header Component is that it is subscribed to the 
  Redux Store, and the Jest Does not understand the Redux's Hooks like useSelector() etc.
- So, we have to pass the Redux Store to the Header Component in its test cases i.e. Header.test.js

- Now, the <Link/> is also not the part of the react, it is a part of the react-browser-router.
- So, for the test application of <Header/> Component, we will have to write the rendering of the <Header/> Component in the 
```html
<BrowserRouter>
    <Provider>
        <Header/>
    </Provider>
</BrowserRouter>
```

### Test 1
```js
test('Should load the Header Component with a login button', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
})
```

### Test 2
```js
it('Should render Header Component with a Cart items 0', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore} >
                <Header />
            </Provider>
        </BrowserRouter>
    );

    // Use Regex to run the Test because the Cart items 0 has line break etc.
    const cartItems = screen.getByText(/Cart\s*\(\s*0\s*items\s*\)/i);
    expect(cartItems).toBeInTheDocument()
})
```

# 3.Restaurant Card Testing :-
## Now we will test the RestaurantCard Component:-
### To test the components with the props:-
- We will have to create the mock data and pass it to the test case.
  
- Go to the <RestaurantCard/> -> Print the data using the console.log();
  ```js
  const RestaurantCard = (props) => {
    const { resData } = props;
    console.log("resdata",resData);
  }
  ```

- Copy the object from the console paste it in the "mock/resCardMock.json" file.
- Import the data in the RestaurantCard.test.js
- import MOCK_DATA from "../mocks/mockResListData.json";
- Write the test case.

## Test 1 - Check if the name of the restaurant is present in the Card via text or not?
```js
it('should render RestaurantCard component with props data', () => {

  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("McDonald's");
  expect(name).toBeInTheDocument();

});
```

## Test 2 - Test Case for With Promoted Label (Higher Order Component)
```js
/*
 * Define the test case

 * Step 1: Apply the HOC (Higher Order Component)
 * `withOpenLabel` is a function that takes a component (RestaurantCard)
 * and returns a new component with an "Open" label added.
 * 
 * Step 2: Render the new component returned by HOC
 * We pass the required props (`resData`) while rendering
 * so it behaves like the original `RestaurantCard` but with extra "Open" label
 * 
 * Step 3: Search for the label "Open" in the rendered output
 * `getByText` looks for exact match by default.
 * 
 * Step 4: Verify that the "Open" label is indeed present in the DOM
 * This confirms the HOC successfully wrapped the card and added the label
 * 
 */
it("should render RestaurantCard component with Open label", () => {

  const RestaurantCardWithLabel = withOpenLabel(RestaurantCard);
  render(<RestaurantCardWithLabel resData={MOCK_DATA} />);

  const label = screen.getByText("Open");
  expect(label).toBeInTheDocument();
});
```
# 4. Body Component Testing : Integration Testing:-
- Test cases for elaborated features.
- Test the conjunction of multiple components.
- Integration of multiple components.

## Search Flow:
1. Application Opens -> Body Loads -> 8 Cards are available -> Type in the Search Box -> Search For Restaurants -> Get the Data.
2. Fill the Input Box -> Search -> Show Some Cards.

### Testing the Body Component:-
- Create a file Search.test.js
- render the Body Component in the Search.test.js
  ```js
  it('Should render the Body Component with Search Button with role', async () => {
      render(<Body />);
  });
  ```
- It will not render, because we use the fetch function in the <Body/>

### Problem 1 :- fetch() not there with the Jest
- We have the API calls in the Body Component so we have design the test case for API's fetching as well.
- Search.test.js is the test case for <Body/> Component.
- We will get the error rendering the <Body/> Component, because we are trying to fetch the data in the <Body/>, Jest Does not have all the superpowers of the browser, it 
  has only some features of the browser.
- fetch() is the superpower of the browser not the Javascript.
- We will have to write a mock fetch() function for the Test Case.

### Working of the fetch():-
- The fetch function gets the data from the API's and it returns a promise i.e. **const data = fetch(API's)**.
- Then we convert the data into the json format **data.json()** and it again return a promise.
```js
/* 
 *   1. Writing our own fetch function (mocking the fetch function)
 *   
 *   2. Since the fetch function returns a promise 
 *   so we will be returning a Promise.resolve()
 *   
 *   3. It resolves with a json, so resolve json : ()=>{}
 *   json function resolves a promise and get the 
 *   data i.e. return Promise.resolve(data);
 * 
 */
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(data);
        }
    });
});
```
- We cannot make an actual network call, only the browser can do that.
- We can execute the **test cases locally** using the **@testing-library/jest-dom**
- We will copy the data which comes from the API and paste it in the mockResListData.json
- We will pass the mockResListData.json data to the Search.test.js from the **Promise.resolve(MOCK_DATA)**
- We can run the test cases solely without browser, without internet, with jsDOM solely.

### Problem 2 :- Props not working - pass the mock data
### To test the components with the props:-
- We will have to create the mock data and pass it to the test case.
- Run the app go to Inspect Element -> Network -> Preview -> Locate the API from where the data is coming.
- Copy the object and paste it in the "mock/mockResListData.json" file.
- Save the resdata's object data in the mocks/resCardMock.json file.
- Import the data in the RestaurantCard.test.js
- import MOCK_DATA from "../mocks/mockResListData.json";
- Write the test case.

### Problem 3 :- Running the server Continously
### HMR - Hot Module Replacement:-
- Like parcel runs the server continously and automatically refreshes the browser with what happened in the
  code, we can also run the test cases continously.
- Add the watch-test object in the package.json with the command "jest --watch".

- The <RestaurantCard/> Component has props, till now <Header/> and <Contact/> did'nt had the props.
- Now we will see when props are passed inside the component, how to do the unit testing of it.

### Problem 4 :- State Update in the Component
- Whenever we are testing the <Component/> in which we have useState() or fetch() function we need to wrap that 
  <Component/> in the act(), act function comes from the react-dom/test-utils.

- We have to await the act(), since it returns a promise, and it takes an argument of async callback function.

- act() takes the await then it render the Component.
  await act(async () => render(<Body/>));

### Problem 5 :- Link Component in Body Function
- Since the <Body/> Component has a <Link></Link> tag we have to enclose the <Body/> Component in the <BrowserRouter></BrowserRouter>
  ```html
  <BrowserRouter>
    <Body/>
  </BrowserRouter> 
  ```

## Test cases of the Integration Testing :-
### Test 1 - Check whether Submit Button is loaded or not?
- Get the search button on the Page After the Body Component is Loaded with the help of role.
```js
it('Should render the Body Component with Search Button with role', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const searchBtn = screen.getByRole("button", { name : "Search"});
    console.log(searchBtn);
    expect(searchBtn).toBeInTheDocument();

});
```
### Test 2 - Check whether Submit Button is loaded or not with the help of TestID?
- Get the search button on the Page After the Body Component is Loaded with the help of testID.
```js
it('Should render the Body Component with Search Button with Text', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const searchBtn = screen.getByText("Search");
    expect(searchBtn).toBeInTheDocument();

});
```

### Test 3 - Check whether the Search Functionality is working or not with the input box?
1. Type the value in the input box and onchange() event is used to update the value in the Component, similarly write the test for this.<br>
2. Tesing the Button on the Body Component with the Help of Test ID:-<br>
3. In the input tag in Component write the **data-testid** attribute, jest will read it.<br>
```html
<input
    className="border border-solid border-black p-2 rounded-xl"
    type="text"
    value={searchText}
    data-testid="searchInput"
    onChange={(e) => {
        setSearchText(e.target.value);
    }}
/>
```
- e in the onchange() is given by browser, for jest we will have to use the `screen.getByTestId("searchInput")`.

```js
it('Should change the input box in the Body Component', async () => {

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {target: {value: "KFC"}});

});
```

- On click of the button the card should render, implement the on click of the button.<br>
```js
it('Should change the input box in the Body Component', async () => {

    const submitButton = screen.getByRole("button", {name : "Search"});
    fireEvent.click(submitButton);
    
});
```

- Check the Rendering of the Component using the data-testid.<br>
```js
it('Should change the input box in the Body Component', async () => {
  
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, {target: {value: "Big Bowl"}});

    const submitButton = screen.getByRole("button", {name : "Search"});
    fireEvent.click(submitButton);

    expect(searchInput).toBeInTheDocument();
    
});
```

4. Now to check the RestaurantCard on the Page, give the <RestaurantCard/> attribute -> data-testid = "res-card" in the <br>
  return (<div data-testid = "resCard">);

```js
// Screen should load the RestaurantCard Components
const cards = screen.getAllByTestId("resCard");
expect(cards.length).toBe(4);
```

### Test 4 - Check whether the Top Rated Restaurants Functionality is working or not?
```js
it('Should filter the Top Rated Restaurant', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    /* Cards before the Search = 8 */
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(8);

    /* Now click the button on the screen by getting through role and clicking*/
    const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
    fireEvent.click(topRatedBtn);

    /* Cards after the search are 7 */
    const cards = screen.getAllByTestId("resCard");
    console.log("Length", cards.length);

    expect(cards.length).toBe(7);
});
```

# Jest and the Testing library gives us the access to the following libraries:-
## 1. beforeAll() function 
- It takes a callback function as an argument.
- This function when written in the test case file is run once before executing the test cases.
```js
beforeAll(()=>{
  /*
   * Clean Up
   * Log Something
   */
  console.log("Before All Test Case it runs);
})
```

## 2. beforeEach() function
- This function when written in the test case file is run once before all the test cases.
```js
beforeEach(()=>{
  /*
   * Log Something, clean up before every test case
   */
  console.log("Before Each and Every Test it runs");
})
```

## 3. afterAll() function
- This function runs after all the test cases are executed.
```js
afterAll(()=>{
  /*
   * This function runs after all the test cases are executed.
   */
  console.log("After All the Tests have executed it runs");
})
```

## 4. afterEach() function
- This runs after each test case is executed.
```js
afterEach(){
  /*
   * This runs after each test case is executed.
   */
  console.log("After Each Tests have executed it runs");
}
```
# 5. Restaurant Menu Component Testing : Integration Testing:-
## Testing the Add To Cart Feature in the Application
### Test 1 : On Clicking the Add+ Button, the Header Item Changes.
1. Render the <RestaurantMenu/> Component.<br>
2. In the Cart.test.js make a test/it function with the async await callback since the function uses fetch function.<br>
3. Import the {render} from the @testing-library/react and import the component <RestaurantMenu/>.<br>
4. Mock the fetch() function in the Cart.test.js<br>

```js
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})
```
5. Make a mock API data in mock/mockResMenu.json<br>
6. From the App -> Inspect Element -> Network -> Refresh -> API -> Copy Object -> Paste in the mock/mockResMenu.json.
7. Import the mock data in the Cart.test.js<br>
8. We have to replicate the event [Click on the panel -> Get the accordian -> Click the Add+ button -> Get item in cart].<br>

```js
it('should load the Restaurant Menu Component', async () => {
    await act(async () => render(
      <RestaurantMenu />
    ));

    const accordianHeader = screen.getByText("Honest Bowls (16)");
    fireEvent.click(accordianHeader);
});

```
9. It will give error because the Button Click will invoke the Store which is in the Redux, so we will have to wrap it around the Provider.
```js
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it('should load the Restaurant Menu Component', async () => {
    await act(async () => render(
        <Provider store={appStore}>
            <RestaurantMenu />
        </Provider>
    ));
    const accordianHeader = screen.getByText("Honest Bowls (16)");
    fireEvent.click(accordianHeader);
});
```
10. Now we want the count the elements in the accordian, so give the <RestaurantItemCategory/> Component's return a data-testid="fooditems"
11. Get the items on the basis of the data-testid="fooditems"
    const items = screen.getAllByTestId("fooditems");
12. Check the total items like this
    expect(items.length).toBe(20);
13. Now Check the Header Component's Content.
```js
import { act } from "react";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { Header } from "../Header";
import { appStore } from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it('should load the Restaurant Menu Component', async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>
        )
    );

    /* Check the according items are proper in number or not */
    const accordianHeader = screen.getByText("Recommended (20)");
    fireEvent.click(accordianHeader);

    const items = screen.getAllByTestId("fooditems");
    expect(items.length).toBe(20);

    /* Header Cart Text Before Adding Item */
    const cartItems0 = screen.getByText(/Cart\s*\(\s*0\s*items\s*\)/i);
    expect(cartItems0).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", { name: "Add +" });

    /* Click Button Once and Check Cart Items Size*/
    fireEvent.click(addBtns[0]);
    const cartItems1 = screen.getByText(/Cart\s*\(\s*1\s*items\s*\)/i);
    expect(cartItems1).toBeInTheDocument();

    /* Click Button Twice and Check Cart Items Size*/
    fireEvent.click(addBtns[1]);
    const cartItems2 = screen.getByText(/Cart\s*\(\s*2\s*items\s*\)/i);
    expect(cartItems2).toBeInTheDocument();
});
```

### Test 2 : On Clicking the Add+ Button, the Cart in the store changes.
1. Add the Cart Component in the CartComponent.test.js
2. Add the total elements with "fooditems" in the div.

```js
it('Should check the Cart Component that the Cart Items are Added in the Cart Component or Not?', async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <RestaurantMenu />
                    <Cart />
                    <Header/>
                </Provider>
            </BrowserRouter>
        )
    );

    const accordianClick = screen.getByText("*New* HealthifyMe X California Burrito (4)");
    fireEvent.click(accordianClick);

    const items = screen.getAllByTestId("fooditems");
    expect(items.length).toBe(4);

    /* Click Event */
    const addBtnClick = screen.getAllByRole("button", { name: "Add +" });

    /* Click Button Once and Check Cart Items Size*/
    fireEvent.click(addBtnClick[0]);
    const cartItems1 = screen.getByText(/Cart\s*\(\s*1\s*items\s*\)/i);
    expect(cartItems1).toBeInTheDocument();

    /* Click Button Twice and Check Cart Items Size*/
    fireEvent.click(addBtnClick[1]);
    const cartItems2 = screen.getByText(/Cart\s*\(\s*2\s*items\s*\)/i);
    expect(cartItems2).toBeInTheDocument();

    /* Click Button Thrice and Check Cart Items Size*/
    fireEvent.click(addBtnClick[2]);
    const cartItems3 = screen.getByText(/Cart\s*\(\s*3\s*items\s*\)/i);
    expect(cartItems3).toBeInTheDocument();

    /* Total 4 Items from the Accordian and 3 Items from the Cart Component */
    expect(screen.getAllByTestId("fooditems").length).toBe(7);

    /* Clear Cart Button Click and the Items should be 20 as before the Cart Component and only from the Accordian*/
    const clearCart = screen.getByRole("button", { name: "Clear Cart" });
    fireEvent.click(clearCart);

    expect(screen.getAllByTestId("fooditems").length).toBe(4);
});
```

## How to Check the Coverage?
- Coverage -> lcov-report -> index.html -> Right Click -> Open with Live Server
- Make this 100%
- It should be greater than 90% or 85%.