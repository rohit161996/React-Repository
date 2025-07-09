import { createContext } from "react";

// It is a type of a central global object which can be used anywhere.
const UserContext = createContext({
    loggedInUser : "Rohit",
});

export default UserContext;