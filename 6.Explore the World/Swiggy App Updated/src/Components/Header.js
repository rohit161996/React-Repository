import { useState } from 'react';
import constants from '../utils/constants'

// Functional Component with the arrow function
export const Header = () => {

    // changing the button from login to logout 
    // useState() only will be able to change it, not let or const or var
    const [btnNameReact, setBtnNameReact] = useState("Login");

    // If the component is re-rendered whole component will be logged.
    // On every useState call this log will be generated.
    console.log(Header);

    // let btnName = "Login";

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={constants.LOGO_URL} alt="" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {

                        btnNameReact === "Login" ?
                            setBtnNameReact("Logout") :
                            setBtnNameReact("Login");

                        console.log(btnNameReact);
                    }}
                    >{btnNameReact}
                    </button>
                </ul>
            </div>

        </div>
    );
}
