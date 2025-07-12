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
            <div className="w-6/12 m-5">
                <h1>About Class Component</h1>
                <div>
                    Logged In User : {" "}
                    <UserContext.Consumer>
                        {(data) => <h3 className="font-bold inline">{data.loggedInUser}</h3>}
                    </UserContext.Consumer>
                </div>
                <h2>This is Rohit Ramchandani</h2>
                <UserClass className="text-center"/>
            </div>
        );
    }
}

export default About;
