const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDxuFYGPKR6ZSLAf52T2gImIGDfaFrigJU'

const signupUser = async (user) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...user, returnSecureToken: true })
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.error.message);
        }

        const data = await response.json();
        return { data, error: null };
    } catch (error) {
        console.error('An error occurred in registering user');
        return { data: null, error: error.message };
    }
};

const loginUser = async (user) => {
    const url  = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDxuFYGPKR6ZSLAf52T2gImIGDfaFrigJU"
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                ...user, 
                returnSecureToken: true,
             })
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.error.message);
        }

        const data = await response.json();
        return { data, error: null };
    } catch (error) {
        console.error('An error occurred in logging in user');
        return { data: null, error: error.message };
    }
};

const AuthServices = {
    signup: signupUser,
    login: loginUser
};

export default AuthServices;