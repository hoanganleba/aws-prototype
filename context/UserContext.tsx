import {createContext} from "react";

const UserContext = createContext({
    errorMessage: "",
    userId: "",
    userType: null,
    login: (email: string | undefined, password: string | undefined) => {
    },
    logout: () => {
    },
});

export default UserContext;
