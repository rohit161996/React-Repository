import Header from './Header';
import { useState, useRef } from 'react';
import { checkValidData } from '../utils/validate';
import { updateProfile } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

  /* Dispatch Hook */
  const dispatch = useDispatch();

  /* Navigation Hook */
  const navigate = useNavigate();

  /* Give the message that the email id and password are invalid */
  const [errorMessage, setErrorMessage] = useState(null);

  /* Change the Form on the Button Click */
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    /* Validate the form data */
    const message = checkValidData(email.current.value, password.current.value, !isSignInForm ? name.current.value : null);
    setErrorMessage(message);

    if (message !== null) return;

    /* Sign Up */
    if (!isSignInForm) {
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
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":" + errorMessage);
        });
    }
  }



  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Background Image */}
      <div>
        <img
          className="absolute -z-10 object-cover w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9a924b36-8e85-4f2a-baac-ce2872ee8163/web/IN-en-20250714-TRIFECTA-perspective_dfbf09de-9182-41e1-a9c6-cd7b1a6d84d6_small.jpg"
          alt="background"
        />
      </div>

      {/* Form to Sign Up/Login */}
      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black/70 my-36 mx-auto right-0 left-0 text-white rounded-lg">
        {/* Form Heading */}
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {/* Input Fields */}
        {!isSignInForm &&
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />}
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

        {/* Invalidate Text in the Form */}
        {
          <p className="text-lg">{errorMessage}</p>
        }

        {/* Submit Button */}
        <button
          className="p-4 my-6 bg-red-700 w-full cursor-pointer rounded-sm"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* Link to change Sign Up to Login */}
        <p className="my-4 cursor-pointer" onClick={toggleSignUpForm}>
          {isSignInForm ?
            "New to Netflix? Sign Up Now" :
            "Already Registed? Sign In Now"}
        </p>
      </form>

    </div>
  )
}

export default Login
