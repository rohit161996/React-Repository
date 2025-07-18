# Netflix GPT (Netflix + GPT)
- We will use GPT Api's to search for movies
- User Input will be given input to GPT, based on it we will get suggestions.

## Following Features used in the project.
1. Authentication<br>
2. Protected Routes<br>
3. Forms<br>
4. Tailwind CSS<br>
5. Firebase<br>

## App Creation - vite
- We will use the vite to create the app.

### Command
- npm create vite@latest

- It uses web-pack behind the scenes, which is a bundler.
- It has react-testing library etc. already :-)

## How to run the project?
- npm run start
- npm run dev

## What all is provided?
- Main Application File App.jsx

## Tailwind CSS Setup
- Install Tailwind
  npm install tailwindcss @tailwindcss/vite

- Install Config File - "vite.config.ts"
  ```js
  import { defineConfig } from 'vite'
  import tailwindcss from '@tailwindcss/vite'
  export default defineConfig({
    plugins: [
      tailwindcss(),
    ],
  })
  ```

- In CSS
  @import "tailwindcss";

## Use Tailwind 😁

## Features :-
- Login/Sign Up Page
  - Sign In / Sign Up Page
  - Redirect to Browse Page

- Browse (after authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - Movie Suggestions
      - MovieList + Multiple Scrolls

- Netflix GPT
  - Search Bar 
  - Movie Suggestions

## 1. App Page
- It will only have the Body Component

## 2. Login Page
- rafce -> react arrow function component export
- Component: <Header/>
- Image : Background Image with -z-10
- Form:
  - 2 Input
  - Submit Button
  - Link to Sign Up : Same Login Form Will Convert to Sign Up using Higher Order Component.

## 3. Header Component
- Image : Fetch logo from the Inspect Element from the Network -> Refresh -> In the Image tab.


## 4. Body Component
- Create Routing in the Body Component
- Routing Setup :-
  - npm i -D react-router-dom

## To handle Big Forms use:
- Use the Formik library.
- Large Forms
- It is used to make Big Large Forms.
- https://formik.org/

## Email & Password Validation in the utility
- Using the Regular Expression.
- Write the function in the utils/validate.js
```js
export const checkValidData = (email, password) => {
  /* Email regex */
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  /* Password regex */
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);

  if(!isEmailValid) return "Email is not Valid!!";
  if(!isPasswordValid) return "Password is not Valid!!";
  return null;

};
```

- Bind the input fields using the state variables using the useState()

## useRefs Hook:-
- It is used for referencing a value, now we will use the useRefs() for this referencing the values of the input fields.
- We use useRef() to give a reference of the tag or HTML Object, but the useState() is used to change something in the DOM.
- The reference is created by react.

```js
const email = useRef(null);
const password = useRef(null);

<input
  ref={email}
  type="text"
  placeholder="Email Address"
  className="p-4 my-4 w-full bg-gray-700 rounded-lg"
/>
<input
  ref={password}
  type="password"
  placeholder="Password"
  className="p-4 my-4 w-full bg-gray-700 rounded-lg"
/>

<button
  className="p-4 my-6 bg-red-700 w-full cursor-pointer rounded-sm"
  onClick={handleButtonClick}
>
  {isSignInForm ? "Sign In" : "Sign Up"}
</button>

const handleButtonClick = () => {

  console.log(email.current.value);
  console.log(password.current.value);

  /* Validate the form data */
  checkValidData(email.current.value, password.current.value);
}

```

## Clicking on the Submit Button of the form will lead to Refreshing the Page
- It will call the onSubmit function of the form.
- Solution is to pass
```js
<form  onSubmit={(e)=> e.preventDefault()} className="w-3/12 absolute p-12 bg-black/70 my-36 mx-auto right-0 left-0 text-white rounded-lg">
```

## Name Authentication also done

## Authentication with the help of backend(Firebase)
- Firebase is a very sophisticated app used by the Startups.
- We can host the Website on Firebase.
- Create the Web App on Firebase Named -> NetflixGPT
- npm install firebase
- Create utils/firebase.js
```js
/* Import the functions you need from the SDKs you need */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
/* TODO: Add SDKs for Firebase products that you want to use */
/* https://firebase.google.com/docs/web/setup#available-libraries */

/* Your web app's Firebase configuration */
/* For Firebase JS SDK v7.20.0 and later, measurementId is optional */
const firebaseConfig = {
  apiKey: "AIzaSyCR58apwJQi9DQzh5j7ke7V7HpjhnbEze8",
  authDomain: "netflixgpt-93052.firebaseapp.com",
  projectId: "netflixgpt-93052",
  storageBucket: "netflixgpt-93052.firebasestorage.app",
  messagingSenderId: "384481007706",
  appId: "1:384481007706:web:25f8c98299606b00ec2063",
  measurementId: "G-55HFXRW2TG"
};

/* Initialize Firebase */
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```

## Go to the Project Overview 
- Authentication
- Get Started
- Sign In Method
- When the User Sign Up it will we registered in the Email.

# Login to Firebase
- `npm install -g firebase-tools`
- To Login to the `firebase login`
- To initialize the firebase `firebase init`
❯◯ Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys<br>
❯ Use an existing project<br>
❯ netflixgpt-93052 (NetflixGPT)<br>
❯ What do you want to use as your public directory? dist<br>
❯ Configure as a single-page app (rewrite all urls to /index.html)? n<br>
❯ Set up automatic builds and deploys with GitHub? n<br>

- Build the Project and Deploy the Project
- `npm run build`
- 
- Deploy the App
- `firebase deploy`

## Steps for Deployment:-
0. Install firebase CLI - `npm install -g firebase-tools`<br>
1. Firebase Login - `firebase login`<br>
2. Initialize Firebase -  `firebase init`<br>
3. Deploy Command - `firebase deploy`<br>

## Hosting URL: 
- https://netflixgpt-93052.web.app

## Changing the URL
- URL can be changed in the Firebase -> Build -> Hoisting

## Sign Up Creation in Firebase
- Create User Account
- https://firebase.google.com/docs/auth/web/manage-users
- Build -> Authentication -> Manage Users
- Build -> Authentication -> Password Authentication -> https://firebase.google.com/docs/auth/web/password-auth#create_a_password-based_account
- Use web modular api.

## Authentication :
- To not use this again and again we need to do this centrally.
- In the firebase.js
```js
const auth = getAuth();
```

- In the Login.js
```js
/* Sign Up */
if (!isSignInForm) {
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      /* Signed up */
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + ":" + errorMessage);
    });
}
/* Login In / Sign In */
else {
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      /* Signed in */
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorCode + ":" + errorMessage);
    });
}
```

## Setup the Store:-
1. Install Libraries <br>
- npm i @reduxjs/toolkit
- npm install react-redux

2. Create Files<br>
- appStore.js
```js
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export const appStore = configureStore(
    {
        reducer : {
            user : userReducer,
        },
    }
);
```
- userSlice.js
```js
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers : {
        adduser : (state, action) => {
            return action.payload;
        },
        removeUser : () => {
            return null;
        },
    },
});

export const {adduser, removeUser} = userSlice.actions;
export default userSlice.reducer;
```

3. Import the Store in the App.js<br>
```js
import Body from './Components/Body'
import { appStore } from './utils/appStore'
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  )
}

export default App
```

4. See for state in the React-Dev Tools in the browser.<br>
5. Now to create the user we need to call the dispatch the actions and handle the userLogin session at many places like <br>
```js
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    /* Signed up */
    const user = userCredential.user;
    console.log(user);
  })
  ```
and push the user information to the redux store.

6. But we will use the firebase API's - onAuthState()😊<br>
   - It is like a event Listener
   - It is called on the Authentication Change - SignUp/Signout.
   - We don't want to call event listener(onAuthState()) again and again, we want to call it only once - done using the useEffect().
   - Call it in the <Body/>

7. In the Body Section :-<br>
```js
useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            /* 
              * User is signed in, see docs for a list of available properties
              * https://firebase.google.com/docs/reference/js/auth.user
              * 
              */
            const {uid, email, displayname} = user;
            dispatch(addUser({uid:uid, email:email, displayName: displayName}));
        } else {
            /* User is signed out */
            dispatch(removeUser());
        }
    });
}, [])
```
8. We are controlling everything from this place whether user is signing in or signing out.<br>

## Navigating :-
- useNavigate() is used to test the application once the user Sign's In.
```js
const navigate = useNavigate();
navigate("/browser");
```

## NOTE:-
- Navigate can only happen inside the children component, Not on the Top Level.
### Solution 1:
- Alternative to the navigate() is window.location.href() but, it is not a good way, it is just a normal redirection.

### Solution 2:
- Apply the Routing on the Top Level. But it is not done since a lot of code is written in the <Body/>.

### Solution 3:
- Write the navigate() in the <Login/> Component.

## Browse Page Designing
- Take the Header Component
- Place the User Button in it.
- Build the Signout Functionality using the 
```js
import { getAuth, signOut } from "firebase/auth";

const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      navigate("/");
    })
    .catch((error) => {
      navigate("/error");
    })
}
```

## Get the User Name in the App
- Update a User's profile 
- Using the update user API's in the firebase.

```js
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    /* Signed up */
    const user = userCredential.user;
    
    updateProfile(user, {
      displayName: name.current.value, 
      photoURL: "https://avatars.githubusercontent.com/u/171681041?v=4"
    }).then(() => {
      navigate("/browse");
    }).catch((error) => {
      setErrorMessage(error.message);
    });

    console.log(user);

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + ":" + errorMessage);
  });
```

## Now show the image on the Page using the selector or Subscribe to the Store.
```js
import { useSelector } from 'react-redux';
const user = useSelector((store) => store.user);
src={user?.photoURL}
```

## Resolving the Bug:-
- Call the dispatch function again in the 
```js
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    /* Signed up */
    const user = userCredential.user;

    updateProfile(user, {
      displayName: name.current.value,
      photoURL: "https://avatars.githubusercontent.com/u/171681041?v=4"
    }).then(() => {
      /* Update the Store once again */
      const { uid, email, displayName, photoURL } = auth.currentUser;
      dispatch(addUser(
        {
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        })
      );
      navigate("/browse");
    }).catch((error) => {
      setErrorMessage(error.message);
    });

    console.log(user);

  })
```
## We have build the Authentication Till Now, Sign In / Sign Out, With the Firebase Api's

## In the Next Episode we will build the Main Netflix Page with the help of the TMDB Api's
- It gives the Token, authentication, and everything we need.
- Netflix API's are not public so we cannot use those.
