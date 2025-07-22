import { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

function Header() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
        navigate("/error");
      })
  };

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
    return (()=> unsubscribe());

  }, []);

  return (
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black flex justify-between z-30">
      {/* Netflix Logo Image */}
      <img
        className="w-44 cursor-pointer"
        src={LOGO}
        alt="logo"
      />

      {/* User Icon  */}
      {user && (
        <div className="flex p-2 m-2">
          <img
            alt="usericon"
            className="w-12 h-12 rounded-4xl"
            src={user?.photoURL}
          />
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
