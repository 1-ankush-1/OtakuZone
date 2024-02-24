const signupUser = async (user) => {
    try {
        const response = await fetch('signup-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();
        return { data, error: null };
    } catch (error) {
        console.log(error);
        return { data: null, error };
    }
};

const AuthServices = {
    signup: signupUser
};

export default AuthServices;