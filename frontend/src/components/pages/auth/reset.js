import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthServices from '../../../services/authService';
import { AuthContext } from '../../../stores/authContext';

const ResetPassword = () => {
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const [isSending, setIsSending] = useState(false);
    const [password, setPassword] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === "") {
            alert("empty password field")
            return;
        }

        const response = await AuthServices.reset({ idToken: authCtx.token, password })

        setIsSending(true);
        if (response.data !== null) {
            authCtx.onReset(response.data.idToken)
            alert("reset password successfull");
            if (prompt("want to loggin again")) {
                authCtx.onLogout();
                navigate("/");
            }
        } else {
            alert(response.error);
        }
        setIsSending(false);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit} className="w-64">
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} className="mb-4 p-2 border border-gray-300 rounded" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{isSending ? "logging..." : "Submit"}</button>
            </form>
        </div>
    );
};

export default ResetPassword;