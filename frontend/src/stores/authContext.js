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
    const [token, setToken] = useState(initialState);
    const UserIsLoggedIn = !!token

    const handleAddToken = (token) => {
        setToken(token);
        localStorage.setItem("token", token)
    }

    const handleResetToken = (token) => {
        setToken(token);
        localStorage.setItem("token", token)
    }

    const handleRemoveToken = () => {
        setToken(null);
        localStorage.removeItem("token")
    }

    return (
        <AuthContext.Provider value={{ token, isLoggedIn: UserIsLoggedIn, onLogin: handleAddToken, onLogout: handleRemoveToken, onReset: handleResetToken }}>
            {props.children}
        </AuthContext.Provider >
    )
}

export default AuthContextProvider;