const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
const signupUser = async (user) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...user,returnSecureToken:true})
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
