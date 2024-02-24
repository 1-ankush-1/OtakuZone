import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError('');
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }

        // Continue with form submission
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Signup</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">Name</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} className="border border-gray-300 px-4 py-2 rounded-md w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} className="border border-gray-300 px-4 py-2 rounded-md w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="number" className="block mb-2">Number</label>
                    <input type="tel" id="number" value={number} onChange={handleNumberChange} className="border border-gray-300 px-4 py-2 rounded-md w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2">Password</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} className="border border-gray-300 px-4 py-2 rounded-md w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
                    <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} className="border border-gray-300 px-4 py-2 rounded-md w-full" />
                    {passwordError && <p className="text-red-500">{passwordError}</p>}
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Signup</button>
            </form>
            <p className="mt-4">Already have an account? <Link to="../login" className="text-blue-500">Login</Link></p>
        </div>
    );
}

export default Signup;