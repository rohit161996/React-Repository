import { useState, useEffect } from 'react';
import constants from '../utils/constants'
import { Link } from 'react-router-dom';

export const Header = () => {

    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header Render");
    
    // 1. If no dependency array => useEffect is called on every render
    // 2. If the dependency array is empty = [], the useEffect is called on the initial render(just once)
    // 3. If we have a non empty dependency array, then useEffect is called on every event of the change 
    //    in the dependency array
    useEffect(()=>{
        console.log("useEffect called");
    });

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={constants.LOGO_URL} alt="" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link> 
                    </li>
                    <li>
                        <Link to="/">Cart</Link>
                    </li>
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
