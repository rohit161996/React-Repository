import { Component } from "react";
import UserClass from "./UserClass";

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
            <div>
                <h1>About Class Component</h1>
                <h2>This is Rohit Ramchandani</h2>
                <UserClass />
            </div>
        );
    }
}

export default About;
