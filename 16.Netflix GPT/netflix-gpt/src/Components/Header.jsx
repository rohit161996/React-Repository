import { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGPTSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

function Header() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      })
  };

  const handleGPTSearchClick = () => {
    /* Toggle the Search Page */
    dispatch(toggleGPTSearchView());
  }

  const handleLanguageChange = (e) => {
    /* We can consider the useRefs as well */
    /* Change the state in the redux store */
    dispatch(changeLanguage(e.target.value));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        /* 
         * User is signed in, see docs for a list of available properties
         * https://firebase.google.com/docs/reference/js/auth.user
         * 
         */
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser(
          {
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          })
        );
        navigate("/browse");
      } else {
        /* User is signed out */
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when the component unmounts.
    return (() => unsubscribe());

  }, []);

  return (
    <div
      className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex flex-col md:flex-row md:justify-between z-30">
      {/* Netflix Logo Image */}
      <img
        className="w-44 cursor-pointer mx-auto md:mx-0"
        src={LOGO}
        alt="logo"
      />

      {/* User Icon  */}
      {user && (
        <div className="flex p-2 m-2">
          {/* Language Selection */}
          {
            showGPTSearch &&
            <select className="p-2 m-2 rounded-lg bg-gray-900 text-white" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((language) => (
                <option
                  key={language.identifier}
                  value={language.identifier}>
                  {language.name}
                </option>
              ))
              }
            </select>
          }

          {/* User Icon  */}
          <img
            alt="usericon"
            className="w-12 h-12 rounded-4xl"
            src={user?.photoURL}
          />

          {/* GPT Search Button */}
          <button
            className="py-2 px-2 mx-2 bg-purple-400 rounded-lg text-white cursor-pointer"
            onClick={handleGPTSearchClick}
          >
            {showGPTSearch ? "Home" : "GPT Search"}
          </button>

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="bg-red-600 rounded-lg text-white px-2 mx-2 cursor-pointer">
            Sign Out
          </button>
        </div>)
      }

    </div>
  )
}

export default Header
