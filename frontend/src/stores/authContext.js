import React, { useEffect, useRef, useState } from "react"

export const AuthContext = React.createContext({
    token: "",
    isLoggedIn: false,
    onLogin: (token) => { },
    onLogout: () => { },
    onReset: (token) => { }
});


const AuthContextProvider = (props) => {
    const initialState = localStorage.getItem("token");
    const intialEmail = localStorage.getItem("email");

    const emailRef = useRef(intialEmail);
    const [token, setToken] = useState(initialState);
    const UserIsLoggedIn = !!token

    const handleAddToken = (token, email) => {
        setToken(token);
        emailRef.current = email;
        localStorage.setItem("token", token)
        localStorage.setItem("email", emailRef.current)
    }

    const handleResetToken = (token) => {
        setToken(token);
        localStorage.setItem("token", token)
    }

    const handleRemoveToken = () => {
        setToken(null);
        localStorage.removeItem("token");
        emailRef.current = null;
        localStorage.removeItem("email");
    };

    //autolog out after 30 min
    useEffect(() => {
        const timeout = setTimeout(() => {
            handleRemoveToken();
        }, 30 * 60 * 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [token]);

    return (
        <AuthContext.Provider value={{ email:emailRef.current, token, isLoggedIn: UserIsLoggedIn, onLogin: handleAddToken, onLogout: handleRemoveToken, onReset: handleResetToken }}>
            {props.children}
        </AuthContext.Provider >
    )
}

export default AuthContextProvider;