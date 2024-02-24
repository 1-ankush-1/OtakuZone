import React, { useState } from "react"

export const AuthContext = React.createContext({
    token: "",
    isLoggedIn: false,
    onLogin: (token) => { },
    onLogout: () => { },
    onReset: (token) => { }
});


const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);

    const UserIsLoggedIn = !!token

    const handleAddToken = (token) => {
        setToken(token);
    }

    const handleResetToken = (token) => {
        setToken(token);
    }

    const handleRemoveToken = () => {
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{ token, isLoggedIn: UserIsLoggedIn, onLogin: handleAddToken, onLogout: handleRemoveToken, onReset: handleResetToken }}>
            {props.children}
        </AuthContext.Provider >
    )
}

export default AuthContextProvider;