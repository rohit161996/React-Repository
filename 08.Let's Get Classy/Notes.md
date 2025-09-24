## Class based components:-
- It is an older way of creating components in React.
- But they are very important to know since many companies are still using it.

## Creating the Class Based Components :-
- It will display the data about the team members fetched from the github API's.

## Functional Component :- 
- It is a normal JavaScript Function

## Class Component :-
- It is a normal JavaScript Class.
- We define a class in our file and extend it to React.Component to let the JS Engine know that it is a react based component.
- We have a render method in the Class which will return the piece of JSX.

## Difference between the Functional Component and Class Component :-
- Functional component returns the JSX which contains HTML.
- Class component has a render() function which returns JSX which contains HTML.

## How to pass a prop in the Functional Component :-
1.     <User name = {"Rohit Ramchandani"}/>
2.     const User = ()=>{
                return(

                );
        }

## How to pass a prop in the Class Based Component :-
1.     <UserClass name = {"Harsh Ramchandani"}/>
2.     class UserClass extends React.Component{
            construtor(prop){
                super(prop);

                console.log(prop);
            }
            render (){
                return(

                );
            }
       }

## How the props are fetched in the Class Components?
- Whenever an instance of a class is created constructor is called.
- In this the props are converted into a single object
  <UserClass
                name={"Harsh Ramchandani Node"}
                location={"Mysore"}
                contact={"+91-8529632268"} 
            />
- Object
            {   
                name={"Harsh Ramchandani Node"}
                location={"Mysore"}
                contact={"+91-8529632268"} 
            }

- The constructor fetches the object in form of a prop from the argument of the Component.
 
class UserClass extends React.Component {

    constructor(props){
        super(props);
        // console.log(props);
    }


    render() {
        return (
            <div  className="user-class">
                <h1>Name: {this.props.name}</h1>
                <h2>Location: {this.props.location}</h2>
                <h4>Contact: {this.props.contact}</h4>
            </div>
        );
    } 
}

                    OR

class UserClass extends React.Component {

    constructor(props){
        super(props);
        // console.log(props);
    }


    render() {

        const {name, location, contact} = this.props;

        return (
            <div  className="user-class">
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h4>Contact: {contact}</h4>
            </div>
        );
    } 
}


## How to create a state variable in the Class Based Components?
- Loading a class based components is creating an instance of the class.
- Whenever an instance of a class is created, constructor is called.
- So, the constructor is the best place to take the props passed as an object from the Component argument.
- Constructor is the best place to create the state variables.

## Creation of state variable :-
this.state = {
    count = 0;
    count2 = 0;
}

## Using the state variable :-
{this.state.count}
{this.state.count2}

or 

const {count, count2} = this.state;
{count}
{count2}

## Difference between the Functional Component and Class Component's state Variable :-
- In the functional components we create multiple state variables like:
    - const count = useState(0)
    - const count2 = useState(0)

- But in the class based components there is one big object:
    this.state = {
        count = 0;
        count2 = 0;
    }

## Dereferencing the state variable in Class Based Components :-
- const {count, count2} = this.state;
- It is very similar to dereferencing the props.
- const {name, contact, location} = this.props;

## WRONG way of incrementing the state variable :-
    <button
        onClick={() => {
            <!-- This will not work -->
            this.state.count = this.state.count + 1;
        }}
    >
        Count Increase
    </button>

## Right way of updating the state variable :-
this.setState({
                count : this.state.count + 1,
            });

- This will change only the this.state.count variable of the state variable, it will 
  only find the difference between the two.

## Life cycle methods of the class based components :-
-  About is the parent component of the UserClass.
-  Whenever the About component is mounted on the web page, it starts rendering the HTML in the web page.
-  When it encounters the child component, it starts to load the Child class now i.e UserClass is started to load.
-  Now a new instance of the class is created and the constructor() is called.
-  Then render() is Called.
-  <AboutUs/> -> Render JSX -> <UserClass/> -> constructor() -> render().
-  Check this using the console.log in both the component.
    console.log("constructor");
    console.log("render");

- This thing gets complicated when the Parent is also a Class Based Component.
- Now, we will make the <AboutUs/> component also class based.

## What is componentDidMount() in the Class Based Components?
- Calling sequence
- <UserClass /> -> constructor() -> render() -> componentDidMount().
- If it is present in the parent as well.
- <About /> -> 
            constructor_about() -> 
            render_about() -> 
                <UserClass /> -> 
                constructor_userclass() -> 
                render_userclass() -> 
                componentDidMount(userclass) -> 
            componentDidMount(about).
- Above is the sequence of calling.

## What is componentDidMount and why it is used to call API( API is called inside componentDidMount() )?
- Because in React, we render the component quickly without waiting for the data to come from the API.
- This is the reason the API Call is made in the componentDidMount() because it is called after the constructor() and the render().
- React Life Cycle:-
  Load the Page -> Render the UI -> Make API Call -> Re-render the UI.
- If we will make the API call somewhere else in the class based component the above flow will be disturbed.

## Life cycle of multiple child classes in the Class Based Component.
-  <UserClass name={"Harsh Ramchandani Cutie"} location={"Mysore"} contact={"+91-8529632268"} />
-  <UserClass name={"Rohit Ramchandani YO"} location={"Delhi"} contact={"+91-7737577188"} />

##  Expected Output :-
   1. Parent constructor
   2. Parent render

   3. Harsh Ramchandani UserClass constructor
   4. Harsh Ramchandani UserClass render
   5. Harsh Ramchandani User Class component did mount

   6. Rohit Ramchandani UserClass constructor
   7. Rohit Ramchandani UserClass render
   8. Rohit Ramchandani User Class component did mount

   9. Parent component did mount


## Why react is fast?
-  https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- It has 2 phases :-
  1. Render Phase
     - React calls the constructor 
     - React then calls the render.
  
  2. Commit Phase
     - It updates the DOM.
     - Then the componentDidMount is called.

## React Optimization :-
- It optimizes the application, by merging the constructor() and render() in render phase.
- Then it calls the update dom() phase and the componentDidMount() phase.

##  Actual Output :-
---- Render Phase ------
   1. Parent constructor
   2. Parent render

   3. Harsh Ramchandani UserClass constructor
   4. Harsh Ramchandani UserClass render

   5. Rohit Ramchandani UserClass constructor
   6. Rohit Ramchandani UserClass render

----- Commit Phase -----
      <DOM UPDATION - IN A SINGLE BATCH>
   7. Harsh Ramchandani UserClass component did mount
   8. Rohit Ramchandani UserClass component did mount

   9. Parent component did mount

- React compares the difference between the DOM and the virtual DOM and the changes are reflected in the page.
- The DOM manipulation is the most expensive task so, it is done in a single go in the commit phase, firstly the 
  Render Phase is done which calls the constructor on instance creation(rendering the class components). this is
  what makes react faster.

### Code 
import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 0,
        }

        console.log(this.props.name + " UserClass constructor");
    }

    componentDidMount(){
        console.log(this.props.name + " User Class component did mount");
    }

    render() {

        const { name, location, contact } = this.props;
        const { count, count2 } = this.state;

        console.log(this.props.name + " UserClass render");

        return (
            <div className="user-class">
                <button
                    onClick={() => {
                        // NEVER UPDATE THE STATE VARIABLES DIRECTLY
                        this.setState({
                            count: this.state.count + 1,
                            count2: this.state.count2 + 1,
                        });
                    }}
                >
                    Count Increase
                </button>
                <h1>Count : {count}</h1>
                <h1>Count2 : {count2}</h1>
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h4>Contact: {contact}</h4>
            </div>
        );
    }
}

export default UserClass;

## How to make API call in the class based component?
- We will be fetching the github-user API, from the link - https://api.github.com/users/rohit161996.
- The componentDidMount() will be used to get the data.
- The componentDidMount() will be made async.

async componentDidMount(){
    // await since it returns a promise
    const data = await fetch("https://api.github.com/users/rohit161996");
    const json = await data.json();

    console.log(json);
}

- Now we will create a state variable in the Component to store the data fetched by the componentDidMount().
this.state = {
    userInfo: {
        login: "Dummy", 
        created_at: "Dummy",
        type: "Dummy",
        avatar_url: "Dummy"
    },
}

- Then the state variable will be updated once the data is received in the promise object.
this.setState({
    userInfo : json,
});

- Now the data is taken in the variable
const { login, created_at, type } = this.state.userInfo;

- Rendered on the screen
render(){
    return (
        <div className="user-class">
            <img src={avatar_url}/>
            <h1>Login Id: {login}</h1>
            <h2>Created At: {created_at}</h2>
            <h4>Type: {type}</h4>
        </div>
    );
}

## We can debug the code with the help :-
- debugger;

-   render() {
        const { login, created_at, type, avatar_url } = this.state.userInfo;
        debugger;
        return (
            <div className="user-class">
                <img src={avatar_url} width={'150px'} height={'150px'}/>
                <h1>Login Id: {login}</h1>
                <h2>Created At: {created_at}</h2>
                <h4>Type: {type}</h4>
            </div>
        );
    }

- When the component is run once Mounting Cycle is happening in the React component.

## Mounting Life Cycle:-
- constructor(dummy) - get props & initialize the state variable
- render(dummy) - component is rendered with the dummy data.
- dom is updated and refs.
- componentDidMount() - it fetches the data from API and update the data in the state variable(this.setState).

## Updating Cycle:-
- render(API data) - component is rendered with the fetched data.
- dom is updated and refs i.e. HTML is updated with the new data.
- componentDidUpdate() - it is called now.

## Unmounting Cycle:-
- as soon as we go to the other component of the Single Page Application, componentWillUnmount() is called.

## Now the React has been simplified a lot...

## DO NOT COMPARE THE LIFE CYCLE METHODS TO THE HOOKS IN THE FUNCTIONAL COMPONENT
useEffect() NOT EQUAL TO componentDidMount()

### What Happens if we do not put anything in the dependency array in the useEffect(), when will it be called?
- It will be called after every render of the Component.

### What will be called for the first render in the Class Based Call?
- componentDidMount() will be called after the first render.

### What will be called for the subsequence render in the Class Based Call?
- componentDidUpdate() will be called subsequently after the first render.

### What will be called when the component is switched to some other component?
- componentDidUnmount() will be called

### THERE ARE NO LIFE CYCLE METHODS IN THE NEW REACT Methods.

### When will useEffect() change if we write the code like?
useEffect(()=>{
    console.log(count);
},[count, count2])
- Whenever the count variable will change, the useEffect() will be called.

## Equivalent Codes
componentDidUpdate(prevProps, prevState){
    if(this.state.count !== prevState.count || this.state.count2 !== prevState.count2 ){

    }
}

## Array is given in the useEffect() as an argument because of the dependencies were made in the componentDidUpdate().

## Comparision for the code before and after
useEffect(()=>{
    console.log(count);
},[count])

useEffect(()=>{
    console.log(count);
},[count2])


componentDidUpdate(prevProps, prevState){
    if(this.state.count !== prevState.count){
        // code
    }
    if(this.state.count2 !== prevState.count2 ){
        // code
    }
}

## Cons of the Single Page Application and how do we resolve it?
- If we write the following code on a Component :-
    componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("Yo Yo Honey Singh");
        }, 1000);
    }
ans we move to some other page then also this code will keep running till be unmount it.

- We need to clear the component data when we are leaving the component, it is done with the help of componentDidUnmount().
    componentWillMount(){
        clearInterval(this.timer);
    }

- This is how we make code "SCALABLE".

## What will happen when we will create a setInterval() in the useEffect(), how will it stop?
- No, it will not stop.
- useEffect(()=>{
        setInterval(()=>{
            console.log("Yo Yo Honey Singh");
        }, 1000);
  })
- We will have to return a function in useEffect() to do the unmounting
  useEffect(()=>{
    return () => {
        console.log("useEffect Return");
    }
  })

