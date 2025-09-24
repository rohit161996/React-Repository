import constants from '../utils/constants'

// Functional Component with the arrow function
export const Header = () => {
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
                </ul>
            </div>

        </div>
    );
}
