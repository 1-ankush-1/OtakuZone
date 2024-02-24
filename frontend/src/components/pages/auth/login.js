import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <form onSubmit={handleSubmit} className="w-64">
                <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} className="mb-4 p-2 border border-gray-300 rounded" />
                <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} className="mb-4 p-2 border border-gray-300 rounded" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
            <div className="mt-4">
                <Link to="../forget-password" className="text-blue-500 hover:text-blue-700">Forgot Password</Link>
                <Link to="../signup" className="ml-4 text-blue-500 hover:text-blue-700">Sign Up</Link>
            </div>
        </div>
    );
};

export default Login;