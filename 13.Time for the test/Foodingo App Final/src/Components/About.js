import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

// Functional Component - Arrow Function which returns a JSX
class About extends Component {

    constructor(props) {
        super(props);
        // console.log("Parent constructor");
    }

    componentDidMount() {
        // console.log("Parent component did mount");
    }

    render() {
        // console.log("Parent render");
        return (
            // Full Content in the Div
            <div className="text-center p-24">

                <h1 className="text-2xl font-semibold mb-2 text-blue-700">
                    About Us (Class Component)
                </h1>

                <div className="mb-4">
                    Logged In User : {" "}
                    <UserContext.Consumer>
                        {(data) => <h3 className="text-sm text-gray-500 flex justify-center"> {data.loggedInUser}</h3>}
                    </UserContext.Consumer>
                </div>

                <h2 className="text-lg text-gray-700 mb-6">
                    This is Rohit Ramchandani
                </h2>

                <UserClass />
            </div>
        );
    }
}

export default About;