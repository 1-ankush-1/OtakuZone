import React, { useState } from "react"

export const AuthContext = React.createContext({
    token: "",
    onAddToken: () => { },
    onRemoveToken: () => { }
});


const AuthContextProvider = (props) => {
    const [token, setToken] = useState("");

    const handleAddToken = (newToken) => {
        console.log("clicked");
        setToken(newToken);
    }

    const handleRemoveToken = () => {
        console.log("removed");
        setToken("");
    }

    return (
        <AuthContext.Provider value={{ token, onAddToken: handleAddToken, onRemoveToken: handleRemoveToken }}>
            {props.children}
        </AuthContext.Provider >
    )
}

export default AuthContextProvider;