import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // Make the state varible to store the data from api call
        this.state = {
            userInfo: {
                login: "Dummy",
                created_at: "Dummy",
                type: "Dummy",
                avatar_url: "Dummy"
            },
        }
        console.log(" UserClass constructor");
    }

    async componentDidMount() {
        // await since it returns a promise
        const data = await fetch("https://api.github.com/users/rohit161996");
        const json = await data.json();

        // store the data fetched in the state variable
        this.setState({
            userInfo: json,
        });

        // console.log(json);
        console.log(" User Class component did mount");
    }

    componentDidUpdate() {
        console.log("User Class component did update");
    }

    componentWillUnmount() {
        console.log("User Class component will unmount");
    }

    render() {
        const { login, created_at, type, avatar_url } = this.state.userInfo;
        console.log("UserClass render");

        return (
            <div className="user-class">
                <img src={avatar_url} width={'150px'} height={'150px'} />
                <h1>Login Id: {login}</h1>
                <h2>Created At: {created_at}</h2>
                <h4>Type: {type}</h4>
            </div>
        );
    }
}

export default UserClass;